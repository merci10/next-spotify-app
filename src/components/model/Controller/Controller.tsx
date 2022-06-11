import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { VFC } from "react";
import {
  MdFavoriteBorder,
  MdPictureInPicture,
  MdPlayCircleFilled,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
} from "react-icons/md";

export const Controller: VFC = () => {
  return (
    <Flex justifyContent="space-between" h="90px" px={4} alignItems="center" borderTop="1px solid whitesmoke">
      {/* left */}
      <Box>
        <HStack>
          <Flex flexDirection="row">
            <Image src="https://placehold.jp/56x56.png" alt="cd jacket image" />
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
          <IconButton aria-label="shuffle" icon={<MdShuffle />} size="lg" />
          <IconButton
            aria-label="skip previous"
            icon={<MdSkipPrevious />}
            size="lg"
          />
          <IconButton
            aria-label="play music"
            icon={<MdPlayCircleFilled />}
            size="lg"
          />
          <IconButton aria-label="skip next" icon={<MdSkipNext />} size="lg" />
          <IconButton aria-label="repeat" icon={<MdRepeat />} size="lg" />
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
  );
};
