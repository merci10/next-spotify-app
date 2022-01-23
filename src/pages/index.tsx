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
  VStack,
  chakra,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  MdFavoriteBorder,
  MdPictureInPicture,
  MdOutlineHome,
  MdHomeFilled,
  MdSearch,
  MdMenuBook,
  MdPlayCircleFilled,
  MdPauseCircleFilled,
  MdSkipPrevious,
  MdSkipNext,
  MdRepeat,
  MdShuffle,
  MdVolumeUp,
  MdVolumeDown,
  MdVolumeOff,
} from "react-icons/md";
import type { NextPage } from "next";
import NextLink from "next/link";
import { IconType } from "react-icons";
import { useQuery } from "react-query";
import {
  useSpotifyPlayer,
  usePlayerDevice,
  usePlaybackState,
} from "react-spotify-web-playback-sdk";
import { useSpotifyClient } from "../state/spotifyClient";
import withAuth from "../common/withAuth";

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

const Home: NextPage = () => {
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
    <>
      <SimpleGrid columns={3} spacingX={5} spacingY={3}>
        {query.data?.items.map((item) => (
          <Flex
            flexDirection="row"
            alignItems="center"
            height="80px"
            bg="whitesmoke"
            key={item.id}
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
              <NextLink href={`/artists/${item.id}`} passHref>
                <Text
                  as="a"
                  fontSize="lg"
                  fontWeight="bold"
                  noOfLines={1}
                  mr={4}
                >
                  {item.name}
                </Text>
              </NextLink>
              <IconButton
                aria-label="play music"
                icon={<Icon as={MdPlayCircleFilled} fontSize="2xl" />}
                bg="teal"
                color="whitesmoke"
                onClick={() => {spotifyClient.play({context_uri: item.uri, device_id: device?.device_id});}}
              />
            </Flex>
          </Flex>
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

      <Box>
        <pre>{JSON.stringify(query.data?.items, null, 2)}</pre>
      </Box>

      <Box w="240px" pt={6}>
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

      <HStack spacing={6}>
        <Box backgroundColor="whitesmoke" p={4}>
          <Box>
            <Image
              src="https://placehold.jp/175x175.png"
              alt="cd jacket"
            ></Image>
          </Box>
          <Box>
            <Box>
              <NextLink href="#" passHref>
                <Text as="a" fontSize="lg" fontWeight="bold">
                  title
                </Text>
              </NextLink>
            </Box>
            <Box>
              <NextLink href="#" passHref>
                <Text as="a" fontSize="lg">
                  author
                </Text>
              </NextLink>
            </Box>
          </Box>
        </Box>
      </HStack>

      {/* footer */}
      <Flex justifyContent="space-between" h="90px" px={4} alignItems="center">
        {/* left */}
        <Box>
          <HStack>
            <Flex flexDirection="row">
              <Image
                src="https://placehold.jp/56x56.png"
                alt="cd jacket image"
              />
              <Box mx={4} pt={2}>
                <Box>
                  <NextLink href="#" passHref>
                    <Text as="a" fontSize="lg" fontWeight="normal">
                      title
                    </Text>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="#" passHref>
                    <Text as="a" fontSize="xs" lineHeight="1">
                      author
                    </Text>
                  </NextLink>
                </Box>
              </Box>
            </Flex>
            <IconButton
              aria-label="save to my library"
              icon={<MdFavoriteBorder />}
              mr={1}
            />
            <IconButton
              aria-label="use picture in picture"
              icon={<MdPictureInPicture />}
            />
          </HStack>
        </Box>

        {/* center */}
        <Box>
          <HStack justifyContent="center">
            <IconButton aria-label="shuffle" icon={<Icon as={MdShuffle} fontSize="xl" />} size="lg" />
            <IconButton
              aria-label="skip previous"
              icon={<Icon as={MdSkipPrevious} fontSize="3xl" />}
              size="lg"
            />
            <IconButton
              aria-label="play music"
              icon={<Icon as={MdPlayCircleFilled} fontSize="3xl" />}
              size="lg"
            />
            <IconButton
              aria-label="skip next"
              icon={<Icon as={MdSkipNext} fontSize="3xl" />}
              size="lg"
            />
            <IconButton aria-label="repeat" icon={<Icon as={MdRepeat} fontSize="xl" />} size="lg" />
          </HStack>
          <HStack>
            <Text as="span">0:00</Text>
            <Slider
              ari-label="music progress bar"
              defaultValue={20}
              colorScheme="blackAlpha"
              width="480px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text as="span">5:00</Text>
          </HStack>
        </Box>

        {/* right */}
        <Box>
          <HStack>
            <IconButton aria-label="" icon={<MdVolumeUp />} mr={1} />
            <Slider
              ari-label="volum bar"
              defaultValue={20}
              colorScheme="blackAlpha"
              width="93px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default withAuth(Home);
