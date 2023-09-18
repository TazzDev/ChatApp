import styled from "styled-components";

export const ConversationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  background: white;
  border-radius: 4px;
  height: 40%;
  overflow: scroll;
`;

export const ConversationControls = styled.div`
  margin-bottom: 20%;
  button {
    position: fixed;
    width: 20%;
  }
`;

export const ConversationListWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding: 0 10vw;
  background-color: #ffffff2f;
`;
