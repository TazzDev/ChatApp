import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Conversation.styled";
import { getTimeDifferenceText } from "../../utils";
import { motion } from "framer-motion";

export interface ConversationProps {
  id: string;
  sender: { name: string; userId: string; last_seen_at: string };
  name?: string;
  lastMessage?: { userId: string; sentAt: string; text: string };
}

const Conversation: React.FC<ConversationProps> = ({
  id,
  name,
  sender,
  lastMessage,
}) => {
  const lastSeenAt = getTimeDifferenceText(sender.last_seen_at);
  const senderFirstChar = sender.name.split("")[0].toUpperCase();
  const navigate = useNavigate();
  return (
    <Styled.ConversationContainer
      as={motion.div}
      whileHover={{
        backgroundColor: "#0000002e",
        transition: { duration: 0.8 },
      }}
      onClick={() => navigate(`/conversation/${id}`)}
    >
      <Styled.Sender>
        <Styled.SenderAvatar>{senderFirstChar}</Styled.SenderAvatar>
        <Styled.SenderDetails>
          <Styled.SenderName>{sender.name}</Styled.SenderName>
          <Styled.LastMessage> {lastMessage?.text}</Styled.LastMessage>
        </Styled.SenderDetails>
      </Styled.Sender>
      <Styled.LastSeen> Last seen {lastSeenAt} ago</Styled.LastSeen>
    </Styled.ConversationContainer>
  );
};

export default Conversation;
