import styled from "styled-components";

export const InputContainer = styled.div<{ inline: boolean, fullWidth: boolean }>`
display: flex;
flex-direction: ${({inline})=>!inline ? "column" : "row"};
width: ${({fullWidth})=>fullWidth ? "100%" : "5rem"};
margin: 1rem 0;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Input = styled.input<{background: string}>`
cursor: pointer;
color: white;
background: ${({background})=>background};
border: 0.4px solid transparent;
box-shadow: none;
padding: 0.6rem;
border-radius: 10px;
&:focus {
    outline: none;
    border: 0.4px solid #c4671b;
}
`

export const Label = styled.label`
font-size: 0.8rem;
margin-bottom: 4px;
letter-spacing: 0.1rem;
`