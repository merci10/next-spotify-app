import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { WebPlaybackSDK } from "../common/webPlaybackSDK";
import { SpotifyClientProvider } from "../state/spotifyClient";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <SpotifyClientProvider>
          <WebPlaybackSDK>
            <Component {...pageProps} />
          </WebPlaybackSDK>
        </SpotifyClientProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
