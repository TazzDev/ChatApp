import styled from "styled-components";

export const Seperator = styled.hr<{fullWidth: boolean, thickness: string}>`
  width: 100%;
  size: ${({thickness})=>thickness};
`;