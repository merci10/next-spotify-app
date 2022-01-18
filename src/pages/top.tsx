import {
  Box,
  Flex,
  IconButton,
  Image,
  Heading,
  Text,
  HStack,
  Link,
  List,
  ListItem,
  ListIcon,
  Icon,
} from "@chakra-ui/react";
import {
  MdFavoriteBorder,
  MdPictureInPicture,
  MdOutlineHome,
  MdHomeFilled,
  MdSearch,
  MdMenuBook,
} from "react-icons/md";
import type { NextPage } from "next";
import NextLink from "next/link";

const Top: NextPage = () => {
  return (
    <>
      <Box w="240px" bg="black" pt={6}>
        <Box px={6} mb={8}>
          <NextLink href="/">
            <a>
              <Image
                src="/icons/Spotify_Logo_RGB_White.png"
                alt="spotify logo"
                w="100%"
                maxW="131px"
                h="40px"
              />
            </a>
          </NextLink>
        </Box>
        <List color="white">
          <ListItem
            px={2}
            borderRadius={4}
            opacity=".8"
            _hover={{ opacity: "1" }}
          >
            <NextLink href="#" passHref>
              <Flex as="a" px={4} gap={4} h={10} alignItems="center">
                <Icon as={MdOutlineHome} color="white" w="24px" h="24px" />
                <Text fontWeight="bold">Home</Text>
              </Flex>
            </NextLink>
          </ListItem>
          <ListItem
            px={2}
            borderRadius={4}
            opacity=".8"
            _hover={{ opacity: "1" }}
          >
            <NextLink href="#" passHref>
              <Flex as="a" px={4} gap={4} h={10} alignItems="center">
                <Icon as={MdSearch} color="white" w="24px" h="24px" />
                <Text fontWeight="bold">検索</Text>
              </Flex>
            </NextLink>
          </ListItem>
          <ListItem
            px={2}
            borderRadius={4}
            opacity=".8"
            _hover={{ opacity: "1" }}
          >
            <NextLink href="#" passHref>
              <Flex as="a" px={4} gap={4} h={10} alignItems="center">
                <Icon as={MdMenuBook} color="white" w="24px" h="24px" />
                <Text fontWeight="bold">My Library</Text>
              </Flex>
            </NextLink>
          </ListItem>
        </List>
      </Box>

      <HStack color="white" spacing={6}>
        <Box backgroundColor="blackAlpha.900" p={4}>
          <Box>
            <Image
              src="https://placehold.jp/175x175.png"
              alt="cd jacket"
            ></Image>
          </Box>
          <Box>
            <Text as="div">
              <Link href="#" fontSize="lg" fontWeight="bold">
                title
              </Link>
            </Text>
            <Text as="div">
              <Link href="#" fontSize="lg">
                author
              </Link>
            </Text>
          </Box>
        </Box>
      </HStack>

      {/* footer */}
      <Flex
        justifyContent="space-between"
        h="90px"
        bgColor="black"
        color="white"
        px={4}
      >
        <Flex alignItems="center">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Image src="https://placehold.jp/56x56.png" alt="cd jacket image" />
            <Box mx={4}>
              <Text as="div" fontSize="lg" fontWeight="normal" color="white">
                <Link href="#">title</Link>
              </Text>
              <Text as="div" fontSize="xs" lineHeight="1">
                <Link href="#">author</Link>
              </Text>
            </Box>
          </Box>
          <IconButton
            aria-label="save to my library"
            icon={<MdFavoriteBorder />}
            backgroundColor="transparent"
          />
          <IconButton
            aria-label="use picture in picture"
            icon={<MdPictureInPicture />}
            backgroundColor="transparent"
          />
        </Flex>
        <Box></Box>
        <Box></Box>
      </Flex>
    </>
  );
};

export default Top;
