import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../Message/Message";
import * as Styled from "./MessageList.styled";
import Input from "../Input/Input";
import { useSendMessage } from "../../api/api";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import Separator from "../Separator/Separator";

export interface MessageProps {
  userId: string;
  text: string;
  sentAt: string;
}

export interface MessageListProps {
  messages: MessageProps[];
  conversationId: string;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  conversationId,
}) => {
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  const { postFunction } = useSendMessage(10, conversationId);
  const onSendText = (value: string) => {
    postFunction({ text: value });
    setMessageText("");
  };

  return (
    <Styled.MessageListContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Button onClick={() => navigate("/dashboard")}>&#60; Chats </Button>
      <Separator />
      <Styled.MessageListWrapper>
        {messages.map(({ userId, sentAt, text }) => (
          <Message userId={userId} sentAt={sentAt} text={text} />
        ))}
      </Styled.MessageListWrapper>

      <Input
        placeholder="Type your message here"
        fullWidth
        value={messageText}
        onChange={(value) => setMessageText(value)}
        type="text"
        onEnter={(value: string) => onSendText(value)}
      />
    </Styled.MessageListContainer>
  );
};

export default MessageList;
