import styled from "styled-components";

export const MessageWrapper = styled.div<{ sender: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${({ sender }) => (sender ? "row" : "row-reverse")};
`;

export const MessageAvatar = styled.div<{ sender: boolean }>`
  min-width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ sender }) => (sender ? "#ff0000" : "#00ff00")};
  margin: 6px;
`;

export const MessageContainer = styled.div`
  background: #ffffff1f;
  border-radius: 8px;
  padding: 8px;
`;

export const SubscriptTime = styled.div<{ sender: boolean }>`
align-self: ${({ sender }) => (sender ? "flex-start" : "flex-end")};
font-size: 0.6rem;
`

export const MessageBody = styled.div`
display: flex;
flex-direction: column;
max-width: 50%;

`
