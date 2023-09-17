import React from "react";
import ChatService from "../../api";
import { Background } from "../Login/Login.styled";
import ConversationList from "../../components/ConversationList/ConversationList";

const Dashboard: React.FC = () => {
  // See the list of conversations for this user
  const { data, loading, error } = ChatService.useGetConversations(10);
  return (
    <Background>
      {!loading && <ConversationList conversations={data?.data} />}
    </Background>
  );
};

export default Dashboard;
