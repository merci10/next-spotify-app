import { Progress } from "@chakra-ui/react";
import { access } from "fs/promises";
import { createContext, ReactNode, useContext, useMemo, VFC } from "react";
import { useQuery } from "react-query";
import SpotifyWebApi from "spotify-web-api-js";
import { AccessToken } from "../common/token";

const fetchAccessToken = async (): Promise<AccessToken> => {
  const headers = await fetch("/api/token");
  console.log("client side", headers.ok)

  if (headers.ok) return await headers.json();
  else throw new Error("failed.");
};

const AccessTokenContext = createContext<AccessToken | undefined>(undefined);
const SpotifyClientContext = createContext<
  SpotifyWebApi.SpotifyWebApiJs | undefined
>(undefined);

export const SpotifyClientProvider: VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data: token, error } = useQuery(
    "AccessToken",
    () => fetchAccessToken(),
    {
      refetchInterval: 1000 * 60 * 59,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  console.log(token, error)

  const client = useMemo(() => {
    const _client = new SpotifyWebApi();
    _client.setAccessToken(token?.access_token ?? null); // null or undefined以外は左
    return _client;
  }, [token?.access_token]);

  return (
    <AccessTokenContext.Provider value={token}>
      <SpotifyClientContext.Provider value={client}>
        {token === undefined && error === null ? (
          <Progress size="xs" isIndeterminate />
        ) : (
          children
        )}
      </SpotifyClientContext.Provider>
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => useContext(AccessTokenContext);

export const useSpotifyClient = () => {
  const client = useContext(SpotifyClientContext);
  if (client === undefined) throw new Error();
  return client;
}