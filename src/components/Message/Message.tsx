import React from "react";
import { MessageProps } from "../MessageList/MessageList";
import * as Styled from "./Message.styled";

const Message: React.FC<MessageProps> = ({ userId, text, sentAt }) => {
  const isSender = userId.toString() !== '10';
  console.log(userId)
  return (
    <Styled.MessageWrapper sender={isSender}>
      <Styled.MessageAvatar sender={isSender} />
      <Styled.MessageContainer>{text}</Styled.MessageContainer>
    </Styled.MessageWrapper>
  );
};

export default Message;
