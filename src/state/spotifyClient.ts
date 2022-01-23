import { useMemo } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useAccessToken } from "./access_token";

export const useSpotifyClient = () => {
  const accessToken = useAccessToken();

  const spotifyAPI = useMemo(() => {
    const api = new SpotifyWebApi();
    api.setAccessToken(accessToken ?? null);
    return api;
  }, [accessToken]);

  return spotifyAPI;
};
