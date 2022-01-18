import { Button, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useAccessToken } from "../state/access_token";

const Home: NextPage = () => {
  const accessToken = useAccessToken();

  return (
    <Container p="8">
      <Button colorScheme="teal" as="a" href="/api/login">
        Log in
      </Button>

      <pre>{accessToken}</pre>
    </Container>
  );
};

export default Home;
