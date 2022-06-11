import { Box, Flex, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { VFC } from "react";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdAccountCircle,
} from "react-icons/md";

export const Header: VFC = () => {
  return (
    <Box
      w="100%"
      h="64px"
      backgroundColor="white"
      borderBottom="1px solid whitesomoke"
      px={6}
    >
      <Flex justifyContent="space-between" alignItems="center" h="100%">
        <HStack>
          <IconButton
            aria-label="browser back"
            icon={<Icon as={MdNavigateBefore} />}
            fontSize="3xl"
          />
          <IconButton
            aria-label="browser forward"
            icon={<Icon as={MdNavigateNext} fontSize="3xl" />}
          />
          <Text as="h3" fontSize="4xl" fontWeight="bold" letterSpacing="2px">
            Title
          </Text>
        </HStack>
        <Box>
          <IconButton
            aria-label="account button"
            icon={<Icon as={MdAccountCircle} />}
            fontSize="3xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};

//  opacity: Math.min(300 - 200,Math.max(y - 200, 0)) / (300 - 200)

