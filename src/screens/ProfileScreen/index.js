import {
  Text,
  Box,
  HStack,
  Image,
  Input,
  VStack,
  Divider,
  Pressable,
  Button,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {useSelector, useDispatch} from 'react-redux';
import {updateData} from '../../store/actions/userData';

const ProfileScreen = ({navigation}) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [image, setImage] = useState('');
  const [aboutInfo, setAboutInfo] = useState('');
  const [img, setImg] = useState(
    'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
  );
  const [userNameImage, setUserNameImage] = useState('');

  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      const response = CurentUserData;
      const {firstName, image, lastName, aboutInfo} = response;
      setUserFirstName(firstName);
      setAboutInfo(aboutInfo);
      setImg(image);
    };
    fetchData();
  }, [CurentUserData.firstName]);

  function pickPhotoFromGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImg(image.path);
      submitImage(image.path);
    });
  }

  const updateData1 = async () => {
    var data = '';
    if (!userNameImage) {
      data = '';
    } else {
      data = await storage().ref(userNameImage).getDownloadURL();
    }

    const numberdoc = CurentUserData.number;

    if (userFirstName === '') {
      setUserFirstName(CurentUserData.firstName);
    }
    if (aboutInfo === '') {
      setAboutInfo(CurentUserData.aboutInfo);
    }
    if (data === '') {
      data = CurentUserData.image;
    }
    dispatch(
      updateData(numberdoc, {
        firstName: userFirstName,
        aboutInfo: aboutInfo,
        image: data,
      }),
    );
    navigation.goBack();
  };

  const submitImage = async path => {
    const uploadImage = path;
    let filename = uploadImage.substring(uploadImage.lastIndexOf('/') + 1);
    setUserNameImage(filename);
    try {
      await storage().ref(filename).putFile(uploadImage);
    } catch (e) {
      console.log('Error is + ', e);
    }
  };

  return (
    <Box bg={'muted.100'} mt={2}>
      <HStack pl={5}>
        <VStack>
          <Image
            source={{
              uri: img,
            }}
            alt="Alternate Text"
            size="sm"
            borderRadius="100"
          />
          <Pressable onPress={pickPhotoFromGallery}>
            <Text fontSize={15} pt={2} pl={4} color={'blue.500'}>
              Edit
            </Text>
          </Pressable>
        </VStack>
        <VStack ml={5} mt={2.5}>
          <Text fontSize={14}>Enter your name and add an optional</Text>
          <Text fontSize={14}>Profile picture</Text>
        </VStack>
      </HStack>
      <Divider pl={5} mt={'5'} ml={'5'} />
      <Box pl={5}>
        <Input
          borderStyle="solid"
          backgroundColor={'muted.50'}
          borderWidth={'0'}
          color={'black'}
          fontSize={18}
          fontWeight={500}
          onChangeText={text => setUserFirstName(text)}>
          {userFirstName}
        </Input>
      </Box>
      <Divider pl={5} mt={0} ml={'5'} />
      <Box height={45} ml={5} pt={22} bg={'muted.100'}>
        <Text>PHONE NUMBER</Text>
      </Box>
      <Divider />
      <Box pl={5} m={0}>
        <Input
          borderStyle="solid"
          backgroundColor={'muted.50'}
          borderWidth={'0'}
          color={'black'}
          fontSize={15}
          fontWeight={600}>
          +91 9110969789
        </Input>
      </Box>
      <Divider />
      <Box height={45} ml={5} pt={22} bg={'muted.100'}>
        <Text>ABOUT</Text>
      </Box>
      <Divider />
      <Box pl={5} m={0}>
        <Input
          borderStyle="solid"
          backgroundColor={'muted.50'}
          borderWidth={'0'}
          color={'black'}
          fontSize={15}
          fontWeight={400}
          onChangeText={text => setAboutInfo(text)}>
          {aboutInfo}
        </Input>
      </Box>
      <Divider />

      <Box pt={'10'} w="75%" maxW="300px" mx="auto">
        <Button bg={'success.500'} onPress={() => updateData1()}>
          <Text color={'light.100'} fontWeight="bold">
            Update
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
export default ProfileScreen;
