import { Box, Grid } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

export const PageWithController: VFC<{
  controller: ReactNode;
  children: ReactNode;
}> = ({controller, children}) => {
  return (
    <Grid templateRows="1fr auto" h="100vh">
      <Box overflowY="scroll">{children}</Box>
      <Box>{controller}</Box>
    </Grid>
  )
};
