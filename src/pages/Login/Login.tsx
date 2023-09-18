import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import * as Styled from "./Login.styled";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import Separator from "../../components/Separator/Separator";
import Toast from "../../components/Toast/Toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const validateCredentials = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      setToastMessage("Logged In");
      navigate("/dashboard");
    } else setToastMessage("Invalid Credentials");
  };

  return (
    <Styled.Background>
      <Styled.LoginPopup
        as={motion.div}
        initial={{ y: -100, opacity: 0, scale: 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Styled.LoginHeader>
          ChatApp
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
        <Button onClick={() => validateCredentials(username, password)}>
          Log in
        </Button>
        {toastMessage && (
          <Toast toastMessage={toastMessage} variant="Failed" closeToast={()=>setToastMessage("")}/>
        )}
      </Styled.LoginPopup>
    </Styled.Background>
  );
};

export default Login;
