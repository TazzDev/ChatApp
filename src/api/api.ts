import { useEffect, useState } from "react";
import { useInterval } from "../utils";

const API_URL = (process.env as any).REACT_APP_API_URL;
const API_KEY = (process.env as any).REACT_APP_API_TOKEN;

const headersWithBearerAuth = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

const useFetchData: (
  endpoint: string,
  method?: "GET" | "POST",
  requestBody?: any
) => { data: any; loading: boolean; error: any } = (
  endpoint,
  method = "GET",
  requestBody = undefined
) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchOptions: RequestInit = {
      headers: headersWithBearerAuth,
      method,
    };
    if (method === "POST") {
      fetchOptions.body = JSON.stringify(requestBody);
    }
    fetch(`${API_URL}${endpoint}`, fetchOptions)
      .then((response: Response) => response.json())
      .then((json: any) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [endpoint, method, requestBody]);

  return { data, loading, error };
};

export const healthCheck: () => Promise<boolean> = async () => {
  return await fetch(`${API_URL}/ping`, { headers: headersWithBearerAuth })
    .then((response: Response) => {
      if (response.ok) {
        return true;
      }
      return false;
    })
    .catch((err) => false);
};

export const useGetAllUsers: () => {
  data: any;
  loading: boolean;
  error: any;
} = () => {
  return useFetchData("/user");
};

export const useGetUser: (userId: number) => {
  data: any;
  loading: boolean;
  error: any;
} = (userId) => {
  return useFetchData(`/user/${userId}`);
};

export const useCreateConversation: (
  currentUserId: number,
  userIds: number | number[]
) => { data: any; loading: boolean; error: any } = (currentUserId, userIds) => {
  const createConversationBody = {
    user_ids: typeof userIds === "number" ? [userIds] : userIds,
  };
  return useFetchData(
    `/user/${currentUserId}/conversation`,
    "POST",
    createConversationBody
  );
};

export const useGetConversations: (
  currentUserId: number,
  conversationId?: string
) => { data: any; loading: boolean; error: any } = (
  currentUserId: number,
  conversationId = ""
) => {
  return useFetchData(
    `/user/${currentUserId}/conversation${
      conversationId ? `/${conversationId}` : ""
    }`
  );
};

export const useSendMessage: (
  currentUserId: number,
  conversationId: string,
  message: string
) => { data: any; loading: boolean; error: any } = (
  currentUserId,
  conversationId,
  message
) => {
  const sendMessageBody = {
    text: message,
  };
  return useFetchData(
    `/user/${currentUserId}/conversation/${conversationId}/message`,
    "POST",
    sendMessageBody
  );
};

export const useGetMessages: (
  currentUserId: number,
  conversationId: string
) => { data: any; loading: boolean; error: any } = (
  currentUserId,
  conversationId
) => {
  return useFetchData(
    `/user/${currentUserId}/conversation/${conversationId}/message`
  );
};

export const useMessagePolling = (
  currentUserId: number,
  conversationId: number
) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchOptions: RequestInit = {
    headers: headersWithBearerAuth,
    method: "GET",
  };

  const callbackFn = () =>
    fetch(
      `${API_URL}/user/${currentUserId}/conversation/${conversationId}/message`,
      fetchOptions
    )
      .then((response: Response) => response.json())
      .then((json: any) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

  useInterval(callbackFn, 3000);

  return { data, loading, error };
};
