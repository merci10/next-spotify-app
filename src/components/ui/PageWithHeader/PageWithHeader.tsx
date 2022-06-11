import { Box, Grid } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

export const PageWithHeader: VFC<{
  header: ReactNode;
  children: ReactNode;
}> = ({ header, children }) => {
  return (
    <Grid templateRows="auto 1fr">
      <Box position="sticky" top="0" left="0" zIndex="1">
        {header}
      </Box>
      <Box>{children}</Box>
    </Grid>
  );
};
