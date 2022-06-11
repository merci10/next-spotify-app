import { VFC, ReactNode, useCallback } from "react";
import {
  WebPlaybackSDK as SpotifyWebPlaybackSDK,
  WebPlaybackSDKProps,
} from "react-spotify-web-playback-sdk";
import { useAccessToken } from "../state/spotifyClient";

export const WebPlaybackSDK: VFC<{ children: ReactNode }> = ({ children }) => {
  const token = useAccessToken();
  const getOAuthToken: WebPlaybackSDKProps["getOAuthToken"] = useCallback(
    (callback) => {
      token && callback(token.access_token);
    },
    [token]
  );

  return (
    <SpotifyWebPlaybackSDK
      deviceName="ゆうまのプレイヤー"
      getOAuthToken={getOAuthToken}
    >
      {children}
    </SpotifyWebPlaybackSDK>
  );
};
