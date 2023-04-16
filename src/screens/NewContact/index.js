import React, {useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Text, Box, HStack, Pressable, Button, VStack, Input} from 'native-base';
import {useSelector,useDispatch} from 'react-redux';
import { saveContactData } from '../../store/actions/userData';

const NewContact = ({navigation}) => {
  const [userNumber, setUserNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );

  const numberDoc = CurentUserData.number;

  const saveContact = () => {
    dispatch(
      saveContactData(numberDoc, {
        userNumber: userNumber,
        firstName: firstName,
        lastName: lastName,
      }),
    );
    navigation.goBack();
  };

  return (
    <Box height="100%" safeArea>
      <HStack justifyContent={'space-between'} ml={4} mr={2}>
        <Text fontWeight={'bold'} fontSize={20}>
          New Contact
        </Text>

        <Box ml={1} pb={5}>
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={30} />
          </Pressable>
        </Box>
      </HStack>

      <Box>
        <VStack>
          <Box ml={8} mt={5}>
            <PhoneInput
              defaultvalue={userNumber}
              variant="underlined"
              onChangeFormattedText={text => {
                setUserNumber(text);
              }}
              textInputStyle={{marginBottom: '0%'}}
            />
          </Box>

          <Box p={8}>
            <Input
              variant="underlined"
              placeholder="First Name"
              fontSize={15}
              onChangeText={text => setFirstName(text)}
            />
          </Box>

          <Box p={8}>
            <Input
              variant="underlined"
              placeholder="Last Name"
              fontSize={15}
              onChangeText={text => setLastName(text)}
            />
          </Box>
        </VStack>
      </Box>

      <Box pt={'10'} w="85%" maxW="350px" mx="auto" borderRadius={5}>
        <Button bg={'success.500'} onPress={() => saveContact()}>
          <Text color={'light.100'} fontWeight="bold">
            Save
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
export default NewContact;
