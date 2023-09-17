import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;

export const Dot = styled.span<{backgroundColor: string}>`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: ${(props)=>props.backgroundColor};
  border-radius: 50%;
`;
