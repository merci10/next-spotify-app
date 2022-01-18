import { createContext, ReactNode, useContext, useState, VFC } from "react";

const accessTokenContext = createContext<string | undefined>(undefined);
const setAccessTokenContext = createContext<(token: string) => void>(() => {});

export const AccessTokenProvider: VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>();

  return (
    <accessTokenContext.Provider value={token}>
      <setAccessTokenContext.Provider value={setToken}>
        {children}
      </setAccessTokenContext.Provider>
    </accessTokenContext.Provider>
  );
};

export const useAccessToken = () => {
  return useContext(accessTokenContext);
};

export const useSetAccessToken = () => {
  return useContext(setAccessTokenContext);
};
