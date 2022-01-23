import { VFC, ReactNode, useCallback } from "react";
import {
  WebPlaybackSDK as SpotifyWebPlaybackSDK,
  WebPlaybackSDKProps,
} from "react-spotify-web-playback-sdk";
import { useAccessToken } from "../state/access_token";

export const WebPlaybackSDK: VFC<{ children: ReactNode }> = ({ children }) => {
  const accessToken = useAccessToken();
  const getOAuthToken: WebPlaybackSDKProps["getOAuthToken"] = useCallback(
    (callback) => {
      accessToken && callback(accessToken);
    },
    [accessToken]
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
