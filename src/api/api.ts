import { useCallback, useEffect, useState } from "react";
import { useInterval } from "../utils";

const API_URL = (process.env as any).REACT_APP_API_URL;
const API_KEY = (process.env as any).REACT_APP_API_TOKEN;

const headersWithBearerAuth = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

const usePostData: (endpoint: string) => {
  postFunction: any;
  data: any;
  loading: boolean;
  error: any;
} = (endpoint) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const postFunction = useCallback(
    (requestBody: any) => {
      const fetchOptions: RequestInit = {
        headers: headersWithBearerAuth,
        method: "POST",
      };
      fetch(`${API_URL}${endpoint}`, {
        ...fetchOptions,
        body: JSON.stringify(requestBody),
      })
        .then((response: Response) => response.json())
        .then((json: any) => {
          setData(json);
          setLoading(false);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },
    [endpoint]
  );

  return { postFunction, data, loading, error };
};

const useFetchData: (endpoint: string) => {
  data: any;
  loading: boolean;
  error: any;
} = (endpoint, requestBody = undefined) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchOptions: RequestInit = {
      headers: headersWithBearerAuth,
      method: "GET",
    };
    fetch(`${API_URL}${endpoint}`, fetchOptions)
      .then((response: Response) => response.json())
      .then((json: any) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [endpoint]);

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

export const useCreateConversation: (currentUserId: number) => {
  postFunction: any;
  data: any;
  loading: boolean;
  error: any;
} = (currentUserId) => {
  return usePostData(`/user/${currentUserId}/conversation`);
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
  conversationId: string
) => { postFunction: any; data: any; loading: boolean; error: any } = (
  currentUserId,
  conversationId
) => {
  return usePostData(
    `/user/${currentUserId}/conversation/${conversationId}/message`
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
  currentUserId: string,
  conversationId: string
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

  useInterval(callbackFn, 1000);

  return { data, loading, error };
};
