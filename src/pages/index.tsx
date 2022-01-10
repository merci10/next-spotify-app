import { Button, Container } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container p="8">
      <Button colorScheme="teal" as="a" href="/api/login">
        Log in
      </Button>
    </Container>
  );
};

export default Home;
