import styled from "styled-components";

export const SenderAvatar = styled.div`
  min-width: 60px;
  height: 60px;
  margin: 0 8px;
  border-radius: 50%;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sender = styled.div`
  display: flex;
`;

export const SenderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ConversationContainer = styled.div`
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem;
  padding: 1rem;
`;

export const SenderName = styled.h3`
  margin: 0;
`;

export const LastSeen = styled.p`
  font-size: 14px;
  color: black;
  margin: 0;
  white-space: nowrap;
`;

export const LastMessage = styled.div`
  font-size: 14px;
  line-height: 28px;
  color: grey;
  width: 40%;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
