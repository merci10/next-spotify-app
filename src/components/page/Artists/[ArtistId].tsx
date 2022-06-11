import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { min } from "lodash";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  MdPlayCircleFilled,
  MdMoreHoriz,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { useQuery } from "react-query";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { useSpotifyClient } from "../../../state/spotifyClient";

const formatMilliseconds = (ms: number): string => {
  const hours = Math.floor(ms / 1000 / 60 / 60);
  const minutes = Math.floor(ms / 1000 / 60);
  const seconds = Math.floor(ms / 1000) % 60;
  const mm = minutes < 10 ? `0${minutes}` : minutes; // 成形
  const ss = seconds < 10 ? `0${seconds}` : seconds; // 成形

  if (hours > 0) return `${hours}:${mm}:${ss}`
  else return `${minutes}:${ss}`
};

export const Artist: NextPage = () => {
  const spotifyClient = useSpotifyClient();
  const device = usePlayerDevice();
  const router = useRouter();

  window.navigator.languages;

  const { data } = useQuery(
    ["artistTopTracks", router.query.artistId],
    () =>
      spotifyClient.getArtistTopTracks(router.query.artistId as string, "JP"),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60,
      staleTime: 60 * 60,
    }
  );

  return (
    <Box>
      <Flex
        h="220px"
        justifyContent="flex-end"
        flexDirection="column"
        pb={6}
        px={8}
      >
        <Box>
          <Heading as="h2" fontSize="8xl">
            artist name
          </Heading>
        </Box>
      </Flex>
      <Box px={8} py={6}>
        <Flex alignItems="center" flexDirection="row">
          <IconButton
            w="60px"
            h="60px"
            mr={8}
            aria-label="play music"
            icon={<Icon as={MdPlayCircleFilled} fontSize="5xl" />}
            bg="teal"
            color="whitesmoke"
            // onClick={() => {
            //   spotifyClient.play({
            //     context_uri: item.uri,
            //     device_id: device?.device_id,
            //   });
            // }}
          />
          <Button colorScheme="gray" variant="outline" size="md" mr={4}>
            フォローする
          </Button>
          <IconButton
            icon={<Icon as={MdMoreHoriz} />}
            aria-label="other options"
          />
        </Flex>
      </Box>
      <Box px={8}>
        <Text as="h3" fontSize="2xl" fontWeight="bold" mb={3}>
          人気曲
        </Text>
        <List>
          {data?.tracks.map((track, index) => (
            <ListItem key={track.id}>
              <Flex
                gap={4}
                alignItems="center"
                h="54px"
                px={4}
                border="1px slide transparet"
              >
                <Flex w="16px">
                  <Text as="span" w="20px">
                    {index + 1}
                  </Text>
                </Flex>
                <Flex flex={4} alignItems="center">
                  <Image
                    src={track.album.images[2].url}
                    alt="cd jacket"
                    w="40px"
                    h="40px"
                    mr={4}
                  />
                  <Text as="div" noOfLines={1}>
                    {track.album.name}
                  </Text>
                </Flex>
                <Flex flex={2} justifyContent="flex-end">
                  <Text as="span">{track.album.id}</Text>
                </Flex>
                <Flex flex={1} justifyContent="flex-end" alignItems="center">
                  <IconButton
                    aria-label="favorite button"
                    icon={<Icon as={MdFavoriteBorder} />}
                    mr={4}
                  />
                  <Text as="span" mr={4} minW="36px">
                    {formatMilliseconds(track.duration_ms)}
                  </Text>
                  <IconButton
                    aria-label="other options"
                    icon={<Icon as={MdMoreHoriz} />}
                  />
                </Flex>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* <Box>
        <pre>{JSON.stringify(data, null, 8)}</pre>
      </Box> */}
    </Box>
  );
};