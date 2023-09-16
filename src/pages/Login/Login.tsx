import React, { useState } from "react";
import Input from "../../components/Input/Input";
import * as Styled from "./Login.styled";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import Separator from "../../components/Separator/Separator";

const Login: React.FC<any> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Styled.LoginContainer>
      <Styled.LoginPopup
        as={motion.div}
        initial={{ y: -100, opacity: 0, scale: 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Styled.LoginHeader>
          ChatApp
          <Styled.Subscript> for Bunq</Styled.Subscript>
        </Styled.LoginHeader>
        <Separator animate />
        <Input
          value={username}
          onChange={(text) => setUsername(text)}
          type="text"
          labelText="Username"
          fullWidth
        />
        <Input
          value={password}
          onChange={(text) => setPassword(text)}
          type="password"
          labelText="Password"
          fullWidth
        />
        <Button>Log in</Button>
      </Styled.LoginPopup>
    </Styled.LoginContainer>
  );
};

export default Login;
