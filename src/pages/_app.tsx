import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AccessTokenProvider } from "../state/access_token";
import { WebPlaybackSDK } from "../components/webPlaybackSDK";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <AccessTokenProvider>
          <WebPlaybackSDK>
            <Component {...pageProps} />
          </WebPlaybackSDK>
        </AccessTokenProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
