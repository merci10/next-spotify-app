import { Box, Grid } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

export const PageWithSidebar: VFC<{
  sidebar: ReactNode;
  children: ReactNode;
}> = ({ sidebar, children }) => {
  return (
    <Grid templateColumns="auto 1fr" h="100%">
      <Box overflowY="scroll">{sidebar}</Box>
      <Box overflowY="scroll">{children}</Box>
    </Grid>
  );
};
