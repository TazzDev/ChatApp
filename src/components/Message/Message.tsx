import React from "react";
import { MessageProps } from "../MessageList/MessageList";
import * as Styled from "./Message.styled";
import { getTimeDifferenceText } from "../../utils";

const Message: React.FC<MessageProps> = ({ userId, text, sentAt }) => {
  const isSender = userId.toString() !== "10";
  const sentAtDate = new Date(sentAt);
  const hour = sentAtDate.getHours();
  const mins = sentAtDate.getMinutes();
  const date = sentAtDate.getDate();
  const month = sentAtDate.getMonth()

  return (
    <Styled.MessageWrapper sender={isSender}>
      <Styled.MessageAvatar sender={isSender} />
      <Styled.MessageBody>
        <Styled.MessageContainer>{text}</Styled.MessageContainer>
        <Styled.SubscriptTime sender={isSender}>
          {`${date}/${month} ${hour}:${mins}`}
        </Styled.SubscriptTime>
      </Styled.MessageBody>
    </Styled.MessageWrapper>
  );
};

export default Message;
