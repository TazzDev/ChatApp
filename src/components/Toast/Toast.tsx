import React, { useEffect } from "react";
import * as Styled from "./Toast.styled";
import { motion } from "framer-motion";

export interface ToastProps {
  toastMessage: string;
  variant: "Success" | "Failed" | "Warning";
  closeToast: () => any;
}

const Toast: React.FC<ToastProps> = ({ toastMessage, variant, closeToast }) => {
  const backgroundColor =
    variant === "Success"
      ? "#5dc15d"
      : variant === "Failed"
      ? "#de6b6b"
      : "#e9e984";
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const timer = setTimeout(() => closeToast(), 3000);
    return () => clearTimeout(timer);
  }, [closeToast]);

  return (
      <Styled.ToastContainer
        background={backgroundColor}
        as={motion.div}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 1.5 }}
        onClick={() => closeToast()}
      >
        {toastMessage}
      </Styled.ToastContainer>
  );
};

export default Toast;
