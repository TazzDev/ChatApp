import React, { useState } from "react";
import ChatService from "../../api";
import * as Styled from "./CreateConversation.styled";
import { Background } from "../Login/Login.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";

const CreateConversation: React.FC = () => {
  const { data, loading } = ChatService.useGetAllUsers();
  const { postFunction } = ChatService.useCreateConversation(10);
  const navigate = useNavigate();

  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [activeUserId, setActiveUserId] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");

  const onCreateConversation = (
    userId: string[] | undefined,
    groupName: string | undefined
  ) => {
    let createConversationPayload: any = { user_ids: userId };
    if (groupName && userId && userId?.length > 1)
      createConversationPayload.name = groupName;
    if (userId) postFunction(createConversationPayload);
    navigate("/dashboard");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Background>
      <Styled.CreateConversationContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Styled.AddUserSection>
          <Dropdown
            label="Choose user"
            onChange={(value) => {
              setActiveUserId(value);
            }}
            options={data.data
              .filter(({ id }: { id: number }) => id !== 10)
              .map(({ name, id }: { name: string; id: number }) => ({
                name: name,
                value: id,
              }))}
          />
          <Button
            onClick={() =>
              setSelectedUserIds((userIds) => [...userIds, activeUserId])
            }
          >
            Add
          </Button>
        </Styled.AddUserSection>
        <Input
          fullWidth
          labelText="Group name:"
          value={groupName}
          onChange={(groupName) => setGroupName(groupName)}
          type="text"
          disabled={selectedUserIds.length < 2}
          placeholder={
            selectedUserIds.length < 2
              ? "You need more than one user to enable group name"
              : ""
          }
        />
        Added users:
        <Styled.AddedUserSection>
          {selectedUserIds.map((userId) => (
            <Styled.AddedUserChip
              as={motion.div}
              whileHover={{
                backgroundColor: "#ffffff4f",
                transition: { duration: 0.2 },
              }}
              onClick={() =>
                setSelectedUserIds((userIds) =>
                  userIds.filter((id) => id !== userId)
                )
              }
            >
              {data.data.filter(({ id }: { id: any }) => id == userId)[0].name}
            </Styled.AddedUserChip>
          ))}
        </Styled.AddedUserSection>
        <Button fullWidth onClick={() => onCreateConversation(selectedUserIds, groupName)}>
          Create Conversation
        </Button>
      </Styled.CreateConversationContainer>
    </Background>
  );
};

export default CreateConversation;
