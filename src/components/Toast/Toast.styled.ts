import styled from "styled-components";

export const ToastContainer = styled.div<{ background: string }>`
  position: absolute;
  bottom: 5%;
  width: 30%;
  height: 20px;
  background-color: ${({ background }) => background};
  border-radius: 4px;
  padding: 4px;
  text-align: center;
  vertical-align: middle;
  font-weight: 600;
`;
