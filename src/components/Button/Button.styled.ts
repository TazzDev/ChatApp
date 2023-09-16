import styled from "styled-components";

export const StyledButton = styled.button<{ fullWidth: boolean, background: string }>`
  width: ${(props) => (props.fullWidth ? "100%" : "5rem")};
  margin: 1rem;
  white-space: nowrap;
  background: ${({background})=>background};
  color: inherit;
  font-size: 1em;
  font-weight: 800;
  padding: 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
