import images from '../../config/images';
import auth from '@react-native-firebase/auth';
import constants from '../../config/constants';
import React, {useState, useEffect} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {Box, Text, Image, Center, Button, Link, HStack} from 'native-base';

const Signin = ({navigation}) => {
  const [userNumber, setUserNumber] = useState('');

  async function signInWithPhoneNumber(phoneNumber) {
    if (phoneNumber === '') {
      alert('Number Field is Empty !');
    } else {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('OtpScreen', {
        MyNumber: userNumber,
        confirm: confirmation,
      });
    }
  }

  return (
    <Box>
      <Box
        bg={'muted.200'}
        height="350"
        justifyContent={'center'}
        alignItems={'center'}
        roundedBottomLeft={'80'}
        roundedBottomRight={'80'}>
        <Center>
          <Image source={images.whatsapp} alt="Alternate Text" size="sm" />
          <Text fontWeight={'bold'} fontSize={'20'} pt={'5'}>
            WELCOME
          </Text>
          <Text fontSize={'15'} pt={'0'}>
            Sign in to continue
          </Text>
        </Center>
      </Box>

      <HStack pt={49} pl={39}>
        <PhoneInput
          containerStyle={{height: '92%'}}
          defaultvalue={userNumber}
          // keyboard={numeric}
          variant="underlined"
          onChangeFormattedText={text => {
            setUserNumber(text);
          }}
          textInputStyle={{marginBottom: '0%'}}
        />
      </HStack>

      <Box pt={'10'} w="75%" maxW="300px" mx="auto">
        <Button
          bg={'success.500'}
          onPress={() => signInWithPhoneNumber(userNumber)}>
          <Text color={'light.100'} fontWeight="bold">
            Generate OTP
          </Text>
        </Button>
      </Box>

      <Box justifyContent={'center'} alignItems={'center'} pt={'5'}>
        <HStack>
          <Text>{constants.Policy}</Text>
          <Link
            href="https://nativebase.io"
            isExternal
            _text={{color: 'success.400'}}>
            {constants.Terms}
          </Link>
        </HStack>

        <HStack>
          <Text>{constants.And}</Text>
          <Link
            href="https://nativebase.io"
            isExternal
            _text={{color: 'success.400'}}>
            {constants.Privacy}
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Signin;
