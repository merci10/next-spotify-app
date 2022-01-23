import { Button, Container } from "@chakra-ui/react";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Container p="8">
      <Button colorScheme="teal" as="a" href="/api/login">
        Log in
      </Button>
    </Container>
  )
}

export default Login;