import { StatusBar } from 'expo-status-bar';
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  ScrollView,
} from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import MyImage from '../../assets/images/image.png';
import { Carousel } from '../components/carousel/Carousel';

export default function Feed() {
  const { width } = useWindowDimensions();
  return (
    <>
      <StatusBar />
      <Box
        mt={4}
        borderBottomColor="gray.300"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
      >
        <Heading my={4} textAlign="center">
          Clicks & Tracks
        </Heading>
      </Box>
      <ScrollView>
        {Array.from({ length: 5 }, (__, index) => (
          <Box key={index}>
            <HStack p={2} space={2} alignItems="center">
              <Avatar />
              <Box>
                <Heading fontSize="sm">John Doe</Heading>
                <Text fontSize="sm">São Paulo, SP - Vila Mariana</Text>
              </Box>
            </HStack>
            <Carousel>
              {Array.from({ length: 5 }, (__, i) => (
                <Carousel.Panel>
                  <Image
                    key={i}
                    source={MyImage}
                    width={width}
                    height={width}
                    alt="Alternative Text"
                  />
                </Carousel.Panel>
              ))}
            </Carousel>
          </Box>
        ))}
      </ScrollView>
    </>
  );
}
