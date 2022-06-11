import NextLink from "next/link";
import {
  Box,
  Flex,
  Icon,
  Image,
  List,
  ListItem,
  Text,
  Grid,
} from "@chakra-ui/react";
import { VFC, ReactNode } from "react";
import { IconType } from "react-icons";
import { MdMenuBook, MdOutlineHome, MdSearch } from "react-icons/md";

type sidebarListItemProps = {
  text: string;
  icon: IconType;
  href: string;
};

const SidebarListItem = (props: sidebarListItemProps) => {
  return (
    <ListItem px={2} borderRadius={4} opacity=".8" _hover={{ opacity: "1" }}>
      <NextLink href={props.href} passHref>
        <Flex as="a" px={4} gap={4} h={10} alignItems="center">
          <Icon as={props.icon} w="24px" h="24px" />
          <Text fontWeight="bold">{props.text}</Text>
        </Flex>
      </NextLink>
    </ListItem>
  );
};

export const Sidebar: VFC = () => {
  return (
    <Box w="240px" h="100%" pt={6} borderRight="1px solid whitesmoke">
      <Box px={6} mb={8}>
        <NextLink href="" passHref>
          <Box as="a">
            <Image
              src="/icons/Spotify_Logo_RGB_Black.png"
              alt="spotify logo"
              w="100%"
              maxW="131px"
              h="40px"
            />
          </Box>
        </NextLink>
      </Box>
      <List>
        <SidebarListItem text="Home" icon={MdOutlineHome} href="#" />
        <SidebarListItem text="検索" icon={MdSearch} href="#" />
        <SidebarListItem text="My Library" icon={MdMenuBook} href="#" />
      </List>
    </Box>
  );
};
