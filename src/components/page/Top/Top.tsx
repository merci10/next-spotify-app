import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdPlayCircleFilled } from "react-icons/md";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useSpotifyClient } from "../../../state/spotifyClient";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { useQuery } from "react-query";

const Top: NextPage = () => {
  const spotifyClient = useSpotifyClient();
  const device = usePlayerDevice();

  const query = useQuery(
    "myTopArtists",
    () => spotifyClient.getMyTopArtists(),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60,
      staleTime: 60 * 60,
    }
  );

  return (
    <SimpleGrid columns={3} spacingX={5} spacingY={3}>
      {query.data?.items.map((item) => (
        <NextLink
          href={`/artists/${item.id}`}
          passHref
          key={item.id}
        >
          <Flex
            as="a"
            flexDirection="row"
            alignItems="center"
            height="80px"
            bg="whitesmoke"
            opacity="1"
            _hover={{ opacity: ".8" }}
          >
            <Box mr={4}>
              <Image
                src={item.images[2].url}
                alt="cd jackt"
                w="80px"
                h="80px"
              />
            </Box>
            <Flex
              flex={1}
              h="full"
              alignItems="center"
              justifyContent="space-between"
              pr={6}
            >
              <Text fontSize="lg" fontWeight="bold" noOfLines={1} mr={4}>
                {item.name}
              </Text>
              <IconButton
                aria-label="play music"
                icon={<Icon as={MdPlayCircleFilled} fontSize="2xl" />}
                bg="teal"
                color="whitesmoke"
                onClick={(e) => {
                  spotifyClient.play({
                    context_uri: item.uri,
                    device_id: device?.device_id,
                  });
                  e.preventDefault();
                }}
              />
            </Flex>
          </Flex>
        </NextLink>
      ))}
      <Flex
        flexDirection="row"
        alignItems="center"
        height="80px"
        bg="whitesmoke"
      >
        <Box mr={4}>
          <Image src="https://placehold.jp/80x80.png" alt="cd jackt" />
        </Box>
        <Box>
          <NextLink href="#" passHref>
            <Text as="a" fontSize="lg" fontWeight="bold" mr={10}>
              アーティストのタイトル
            </Text>
          </NextLink>
          <IconButton aria-label="play music" icon={<MdPlayCircleFilled />} />
        </Box>
      </Flex>
      <Box height="80px" bg="whitesmoke"></Box>
      <Box height="80px" bg="whitesmoke"></Box>
      <Box height="80px" bg="whitesmoke"></Box>
      <Box height="80px" bg="whitesmoke"></Box>
      <Box height="80px" bg="whitesmoke"></Box>
      <Box height="80px" bg="whitesmoke"></Box>
      <Box height="80px" bg="whitesmoke"></Box>
    </SimpleGrid>
  );
};

export default Top;