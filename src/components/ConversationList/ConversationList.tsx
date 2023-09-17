import React from "react";
import { useNavigate } from "react-router-dom";
import Conversation from "../Conversation/Conversation";
import * as Styled from "./ConversationList.styled";
import Button from "../Button/Button";
import { motion } from "framer-motion";

export interface ConversationProps {
  sender: string;
  lastMessage: string;
  lastSeenAt?: string;
}

export interface ConversationListProps {
  conversations: ConversationProps[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
}) => {
  const navigate = useNavigate();
  const getConversations = (conversations: ConversationProps[]) => {
    console.log(conversations)
    if (!conversations.length) {
      return "No conversations";
    }
    return conversations.map((conversation: any) => (
      <Conversation
        key={conversation.id}
        id={conversation.id}
        lastMessage={conversation.last_message}
        sender={
          conversation.members.filter((member: any) => member.id !== 10)[0]
        }
      />
    ));
  };
  return (
    <Styled.ConversationListWrapper as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
    <Styled.ConversationListContainer >
      <Styled.ConversationControls>
        <Button fullWidth onClick={() => navigate("/create-conversation")}>
          Create Conversation
        </Button>
      </Styled.ConversationControls>
      {getConversations(conversations)}
    </Styled.ConversationListContainer>
    </Styled.ConversationListWrapper>
  );
};

export default ConversationList;
