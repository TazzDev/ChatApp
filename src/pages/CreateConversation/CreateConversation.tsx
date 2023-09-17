import React, { useState } from "react";
import ChatService from "../../api";
import * as Styled from "./CreateConversation.styled";
import { Background } from "../Login/Login.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

const CreateConversation: React.FC = () => {
  const { data, loading, error } = ChatService.useGetAllUsers();
  const { postFunction } = ChatService.useCreateConversation(10);
  const navigate = useNavigate();

  const [selectedUserIds, setSelectedUserIds] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");

  const onCreateConversation = (userId: string[] | undefined) => {
    if (userId) postFunction({ user_ids: userId });
    navigate("/dashboard");
  };

  return (
    <Background>
      <Styled.CreateConversationContainer>
        {!loading && (
          <>
            <Input
              fullWidth
              labelText="Group name:"
              value={groupName}
              onChange={(groupName) => setGroupName(groupName)}
              type="text"
              disabled={selectedUserIds.length < 2}
              placeholder={selectedUserIds.length < 2 ? "You need more than one user to enable group name": ""}
            />
            <Dropdown
              label="Choose user"
              onChange={(value) => {
                setSelectedUserIds(value);
              }}
              options={data.data
                .filter(({ id }: { id: number }) => id !== 10)
                .map(({ name, id }: { name: string; id: number }) => ({
                  name: name,
                  value: id,
                }))}
            />
            <Button
              fullWidth
              onClick={() => onCreateConversation([selectedUserIds])}
            >
              Create Conversation
            </Button>
          </>
        )}
      </Styled.CreateConversationContainer>
    </Background>
  );
};

export default CreateConversation;
