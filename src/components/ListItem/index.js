import React from 'react';
import {HStack, Text, Image, VStack, Pressable} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
export const ListItem = ({
  title,
  belowTitle,
  fromHeader,
  fromStatusScreen,
  fromChatScreen,
  fromCreateNewScreen,
  color,
  time,
  fromCallScreen,
  date,
  navigation,
  image,
}) => {
  return (
    <>
      <HStack
        ml={5}
        mr={5}
        mt={2}
        pb={1}
        justifyContent={'space-between'}
        bg={fromHeader === true ? 'tertiary.400' : 'muted.50'}
        borderRadius={5}>
        <HStack p={0.5} mt={1}>
          <FastImage
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'red',
              borderRadius: 50,
            }}
            source={typeof image === 'string' ? {uri: image} : image}
            alt="Women image"
          />

          <VStack pt={1} pl={3}>
            <Text fontWeight={'bold'}>{title}</Text>
            <Text>{belowTitle}</Text>
          </VStack>
        </HStack>

        {fromStatusScreen ? (
          <HStack ml={100}>
            <Pressable mt={4} mr={3}>
              <MaterialCommunityIcons name="camera" color={'white'} size={25} />
            </Pressable>
            <Pressable mt={4}>
              <MaterialCommunityIcons name="pencil" color={'white'} size={25} />
            </Pressable>
          </HStack>
        ) : null}

        {fromCallScreen ? (
          <HStack ml={100}>
            <Pressable mt={4} mr={3}>
              <Text>{time}</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate('ContactInfo', {
                  name: title,
                  image: image,
                })
              }
              mt={3.5}>
              <Ionicons
                name="information-circle-outline"
                color={'blue'}
                size={25}
              />
            </Pressable>
          </HStack>
        ) : null}
        {fromChatScreen ? (
          <Pressable mt={4} mr={1}>
            <Text>{date}</Text>
          </Pressable>
        ) : null}
      </HStack>
    </>
  );
};
