import React, {useState} from 'react';
import {
  Box,
  Text,
  Link,
  Image,
  Center,
  Button,
  Pressable,
  HStack,
} from 'native-base';
import {useDispatch} from 'react-redux';
import images from '../../config/images';
import constants from '../../config/constants';
import MaskInput from 'react-native-mask-input';
import {createRealtimeDatabase} from '../../store/actions/userData';

const OtpScreen = ({route, navigation}) => {
  const {MyNumber} = route.params;
  const {confirm} = route.params;

  const dispatch = useDispatch();
  const [code, setCode] = useState('');

  async function confirmCode() {
    try {
      dispatch(createRealtimeDatabase(MyNumber));
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
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
            OTP Verifications
          </Text>
          <Text fontSize={'xs'} pt={'0'}>
            Enter OTP code sent to your mobile number
          </Text>
          <Text fontSize={'xs'} pt={'0'}>
            {MyNumber}
          </Text>
        </Center>
      </Box>

      <Box p="10%">
        <HStack
          alignItems="center"
          justifyContent={'center'}
          textAlign={'center'}>
          <MaskInput
            autoFocus
            value={code}
            onChangeText={(masked, unmasked) => {
              setCode(unmasked);
            }}
            style={{
              color: 'black',
              fontSize: 20,
            }}
            mask={[
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
              '       ',
              /\d/,
            ]}
          />
        </HStack>

        <Pressable>
          <Text position={'absolute'} right={'15'} color={'success.500'}>
            Resend
          </Text>
        </Pressable>
      </Box>

      <Box pt={'10'} w="75%" maxW="300px" mx="auto">
        <Button bg={'success.500'} onPress={confirmCode}>
          <Text color={'light.100'} fontWeight="bold">
            Submit
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

export default OtpScreen;
