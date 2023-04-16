import React, {useEffect, useState} from 'react';
import {
  Text,
  Box,
  VStack,
  HStack,
  Image,
  Pressable,
  ScrollView,
} from 'native-base';
import Share from 'react-native-share';
import images from '../../config/images';
import auth from '@react-native-firebase/auth';
import {ListItem} from '../../components/ListItem';
import {signOut} from '../../store/actions/userData';
import {useSelector, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SettingScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );

  useEffect(() => {
    const {firstName, image, lastName} = CurentUserData;
    setFirstName(firstName);
    setImage(image);
  });

  const Logout = async () => {
    return auth()
      .signOut()
      .then(() => dispatch(signOut()));
  };

  const shareScreen = async () => {
    const text = {
      message:
        "Let's chat on Whatsapp! It's fast,simple,and secure app we can use to message and call each other for free. Get it at https://whatsapp.com/dl/",
    };
    try {
      await Share.open(text);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box safeAreaTop pt={5} pb={2} bg={'muted.100'} h="100%">
      <HStack justifyContent={'space-between'} mr={5} mb={5}>
        <Text pl={5} fontSize={20} fontWeight={'bold'}>
          Account Settings
        </Text>
        <Feather name="search" size={25} />
      </HStack>

      <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
        <ListItem
          title={firstName}
          belowTitle="Hey there!"
          fromSettingScreen={true}
          color="tertiary.400"
          fromHeader={true}
          image={image}
        />
      </Pressable>

      <Box m={5} bg={'red.400'} borderRadius={'5'}>
        <VStack bg={'muted.50'}>
          <HStack m={3} justifyContent={'space-between'}>
            <Text fontSize={25} fontWeight={'600'}>
              Media
            </Text>
            <Text mt={2}>12</Text>
          </HStack>

          <HStack justifyContent={'space-evenly'} bg={'muted.50'}>
            <Image
              source={images.Home5}
              alt="Alternate Text"
              size="md"
              borderRadius={10}
            />
            <Image
              source={images.Home3}
              alt="Alternate Text"
              size="md"
              borderRadius={10}
            />
            <Image
              source={images.Road1}
              alt="Alternate Text"
              size="md"
              borderRadius={10}
            />
            <Image
              source={images.Home4}
              alt="Alternate Text"
              size="md"
              borderRadius={10}
            />
          </HStack>
        </VStack>
      </Box>

      <ScrollView h="100%">
        <Box ml={5} mr={5}>
          <HStack
            mb={2}
            pt={3}
            pb={3}
            justifyContent="space-between"
            bg={'muted.50'}
            borderRadius="5">
            <HStack ml={2}>
              <MaterialIcons name="star-outline" size={25} />
              <Text fontSize={15} pl={3}>
                Starred Messages
              </Text>
            </HStack>
            <Pressable mr={2}>
              <MaterialIcons name="navigate-next" size={30} />
            </Pressable>
          </HStack>

          <HStack
            mb={2}
            pt={3}
            pb={3}
            justifyContent="space-between"
            bg={'muted.50'}
            borderRadius="5">
            <HStack ml={2}>
              <MaterialCommunityIcons name="account" size={25} />
              <Text fontSize={15} pl={3}>
                Account
              </Text>
            </HStack>
            <Pressable mr={2}>
              <MaterialIcons name="navigate-next" size={30} />
            </Pressable>
          </HStack>

          <HStack
            mb={2}
            pt={3}
            pb={3}
            justifyContent="space-between"
            bg={'muted.50'}
            borderRadius="5">
            <HStack ml={2}>
              <MaterialIcons name="notifications" size={25} />
              <Text fontSize={15} pl={3}>
                Notifications
              </Text>
            </HStack>
            <Pressable mr={2}>
              <MaterialIcons name="navigate-next" size={30} />
            </Pressable>
          </HStack>

          <HStack
            mb={2}
            pt={3}
            pb={3}
            justifyContent="space-between"
            bg={'muted.50'}
            borderRadius="5">
            <HStack ml={2}>
              <Entypo name="database" size={25} />
              <Text fontSize={15} pl={3}>
                Storage and Data
              </Text>
            </HStack>
            <Pressable mr={2}>
              <MaterialIcons name="navigate-next" size={30} />
            </Pressable>
          </HStack>

          <Pressable onPress={shareScreen}>
            <HStack
              mb={2}
              pt={3}
              pb={3}
              justifyContent="space-between"
              bg={'muted.50'}
              borderRadius="5">
              <HStack ml={2}>
                <Entypo name="share" size={25} />
                <Text fontSize={15} pl={3}>
                  Tell a Friend
                </Text>
              </HStack>
              <Pressable mr={2}>
                <MaterialIcons name="navigate-next" size={30} />
              </Pressable>
            </HStack>
          </Pressable>

          <HStack
            mb={2}
            pt={3}
            pb={3}
            justifyContent="space-between"
            bg={'muted.50'}
            borderRadius="5">
            <HStack ml={2}>
              <MaterialIcons name="help-outline" size={25} />
              <Text fontSize={15} pl={3}>
                Help
              </Text>
            </HStack>
            <Pressable mr={2}>
              <MaterialIcons name="navigate-next" size={30} />
            </Pressable>
          </HStack>
          <Pressable onPress={() => Logout()}>
            <HStack
              mb={5}
              pt={3}
              pb={3}
              justifyContent="space-between"
              bg={'muted.50'}
              borderRadius="5">
              <HStack ml={2}>
                <MaterialIcons name="logout" size={25} />
                <Text fontSize={15} pl={3}>
                  LogOut
                </Text>
              </HStack>
              <Pressable mr={2}>
                <MaterialIcons name="navigate-next" size={30} />
              </Pressable>
            </HStack>
          </Pressable>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default SettingScreen;
