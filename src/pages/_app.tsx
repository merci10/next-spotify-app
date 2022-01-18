import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AccessTokenProvider } from "../state/access_token";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AccessTokenProvider>
        <Component {...pageProps} />
      </AccessTokenProvider>
    </ChakraProvider>
  );
}

export default MyApp;
