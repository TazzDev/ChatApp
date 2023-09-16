import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

export const LoginPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 2rem;
  background: rgba(50, 50, 50);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;

export const LoginHeader = styled.h1`
  font-family: "Courier New", Courier, monospace;
`;

export const Subscript = styled.sub`
  font-size: 12px;
`;
