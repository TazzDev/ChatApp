import React from "react";
import { useParams } from "react-router-dom";
import { Background } from "../Login/Login.styled";
import { useMessagePolling } from "../../api/api";
import MessageList from "../../components/MessageList/MessageList";
import Loader from "../../components/Loader/Loader";

const UserMessage: React.FC = () => {
  let { conversationId = "" } = useParams();
  const { data: polledData, loading }: any = useMessagePolling(
    "10",
    conversationId
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Background>
      {!loading && (
        <MessageList
          conversationId={conversationId}
          messages={polledData?.data.map(({ user_id, sent_at, text }: any) => ({
            userId: user_id,
            sentAt: sent_at,
            text: text,
          }))}
        />
      )}
    </Background>
  );
};

export default UserMessage;
