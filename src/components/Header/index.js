import React from 'react';
import {Text, Box, HStack, VStack, Image, Pressable} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';

const Header = ({navigation, name, image}) => {
  return (
    <Box mr={5} p={1}>
      <HStack justifyContent={'space-between'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Box mt={1} ml={2}>
            <AntDesign name="arrowleft" size={30} p={5} />
          </Box>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate('ContactInfo', {name: name, image: image})
          }>
          <HStack mr={15} mb={2}>
            <FastImage
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'red',
                borderRadius: 50,
              }}
              source={{uri:image}}
              alt="Women image"
            />

            <VStack pl={3}>
              <Text fontWeight={'bold'}>{name}</Text>
              <Text fontSize={10}>tap here for contact info</Text>
            </VStack>
          </HStack>
        </Pressable>

        <HStack>
          <Pressable pr={5}>
            <Ionicons name="videocam-outline" size={30} />
          </Pressable>
          <Pressable>
            <Ionicons name="call-outline" size={28} />
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
};
export default Header;
