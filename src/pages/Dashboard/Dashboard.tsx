import React from "react";
import ChatService from "../../api";
import { Background } from "../Login/Login.styled";
import ConversationList from "../../components/ConversationList/ConversationList";
import Loader from "../../components/Loader/Loader";

const Dashboard: React.FC = () => {
  // See the list of conversations for this user
  const { data, loading } = ChatService.useGetConversations(10);
  if (loading) return <Loader/>
  return (
    <Background>
      {!loading && <ConversationList conversations={data?.data} />}
    </Background>
  );
};

export default Dashboard;
