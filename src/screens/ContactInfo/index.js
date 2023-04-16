import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Text,
  Box,
  VStack,
  Image,
  HStack,
  Divider,
  ScrollView,
} from 'native-base';

const ContactInfo = ({route}) => {
  const {name, image} = route.params;

  return (
    <Box height="100%">
      <ScrollView h="100%">
        <Box height="100%" bg={'muted.100'} safeArea>
          <VStack alignItems={'center'} bg={'muted.100'} height="25%">
            <Image
              size="xl"
              borderRadius={100}
              source={{uri: image}}
              alt="Alternate Text"
            />
            <Text fontWeight={'bold'} fontSize="30">
              {name}
            </Text>
            <Text>+91 86098 45787</Text>
          </VStack>

          <Box mt={5} pl={10} pr={10}>
            <HStack justifyContent={'space-between'}>
              <VStack alignItems={'center'}>
                <Entypo name="message" size={25} />
                <Text>messages</Text>
              </VStack>

              <VStack alignItems={'center'}>
                <Ionicons name="ios-call" size={25} />
                <Text>audio</Text>
              </VStack>

              <VStack alignItems={'center'}>
                <Feather name="video" size={25} />
                <Text>video</Text>
              </VStack>

              <VStack alignItems={'center'}>
                <FontAwesome5 name="rupee-sign" size={25} />
                <Text>pay</Text>
              </VStack>
            </HStack>
          </Box>

          {/* <ScrollView> */}
          <Box bg={'muted.50'} height="8%" m={5} borderRadius={5}>
            <VStack p={2}>
              <Text color={'black'}>Error : Bio unavailable</Text>
              <Text color={'muted.500'}>12 Jul 2021</Text>
            </VStack>
          </Box>

          <Box
            bg={'muted.50'}
            height="8%"
            ml={5}
            mr={5}
            mb={5}
            borderRadius={5}>
            <VStack p={2}>
              <Text color={'black'}>8 Sep 2022</Text>
              <HStack justifyContent={'space-between'}>
                <Text color={'muted.500'}>09:05</Text>
                <Text color={'muted.500'}>Missed Voice Call</Text>
              </HStack>
            </VStack>
          </Box>

          <Box bg="muted.50" h="12%" ml={5} mr={5} mb={5} borderRadius={5}>
            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Ionicons name="image-outline" size={25} />
                <Text ml={2} mt={1}>
                  Media, Links, and Docs
                </Text>
              </HStack>
              <MaterialIcons name="navigate-next" size={30} />
            </HStack>

            <Divider mr={5} />

            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Ionicons name="star" size={25} />
                <Text ml={2} mt={1}>
                  Starred Messages
                </Text>
              </HStack>
              <MaterialIcons name="navigate-next" size={30} />
            </HStack>
          </Box>

          <Box bg="muted.50" h="18%" ml={5} mr={5} mb={5} borderRadius={5}>
            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Ionicons name="volume-mute-sharp" size={25} />
                <Text ml={2} mt={1}>
                  Archived Chats are Muted
                </Text>
              </HStack>
              <MaterialIcons name="navigate-next" size={30} />
            </HStack>

            <Divider mr={5} />

            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Ionicons name="ios-flower-outline" size={25} />
                <Text ml={2} mt={1}>
                  Disappering Messages
                </Text>
              </HStack>
              <MaterialIcons name="navigate-next" size={30} />
            </HStack>

            <Divider mr={5} />

            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Ionicons name="download-outline" size={25} />
                <Text ml={2} mt={1}>
                  Save to Camera Roll
                </Text>
              </HStack>
              <MaterialIcons name="navigate-next" size={30} />
            </HStack>
          </Box>

          <Box bg="muted.50" h="12%" ml={5} mr={5} mb={5} borderRadius={5}>
            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Text ml={2} mt={1}>
                  Export Chat
                </Text>
              </HStack>
            </HStack>

            <Divider mr={5} />

            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Text ml={2} mt={1} color={'red.500'}>
                  Delete Chat
                </Text>
              </HStack>
            </HStack>
          </Box>

          <Box bg="muted.50" h="12%" ml={5} mr={5} mb={5} borderRadius={5}>
            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Text ml={2} mt={1} color={'red.500'}>
                  Block +91 76456 67897
                </Text>
              </HStack>
            </HStack>

            <Divider mr={5} />

            <HStack justifyContent={'space-between'}>
              <HStack p={2}>
                <Text ml={2} mt={1} color={'red.500'}>
                  Report +91 76456 67897
                </Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default ContactInfo;
