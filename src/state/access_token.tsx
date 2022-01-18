import { createContext, ReactNode, useState, VFC, useContext } from "react";

const accessTokenContext = createContext<string | undefined>(undefined);
const SetAccessTokenContext = createContext<(token: string) => void>(() => {});

export const AccessTokenProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string>();

  return (
    <accessTokenContext.Provider value={token}>
      <SetAccessTokenContext.Provider value={setToken}>
        {children}
      </SetAccessTokenContext.Provider>
    </accessTokenContext.Provider>
  );
};

export function useAccessToken(){
  return useContext(accessTokenContext)
}

export function useSetAccessToken(){
  return useContext(SetAccessTokenContext)
}