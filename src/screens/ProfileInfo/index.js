import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {setProfileInfo} from '../../store/actions/userData';
import {Text, Box, Pressable, Image, Button, VStack, Input} from 'native-base';

const ProfileInfo = ({route, navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [img, setImg] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3O173KZ0i_nZWqkkzbjtsGcJQ_1y99MZZXPWxbzZPKaAD8uZ1TyTltM9Jm8lKBzKnz0&usqp=CAU',
  );
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [urlImage, setUrlImage] = useState('');
  const [userNameImage, setUserNameImage] = useState('');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const submitImage = async path => {
    const uploadImage = path;
    let filename = uploadImage.substring(uploadImage.lastIndexOf('/') + 1);
    setUserNameImage(filename);
    setUploading(true);
    try {
      await storage().ref(filename).putFile(uploadImage);
      setUploading(false);
    } catch (e) {
      console.log('Error is + ', e);
    }
  };

  const handleChange = async () => {
    var data = '';
    if (!userNameImage) {
      data = '';
    } else {
      data = await storage().ref(userNameImage).getDownloadURL();
    }

    const numberDoc = auth().currentUser.phoneNumber;
    dispatch(
      setProfileInfo(numberDoc, {
        firstName: firstName,
        lastName: lastName,
        image: data,
        number: auth().currentUser.phoneNumber,
        chatId: [],
        ContactList: [],
        aboutInfo: 'Hi there! I am on WhatsApp',
      }),
    );
    navigation.navigate('HomeScreen');
  };

  async function pickPhotoFromGallery() {
    const response = ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImg(image.path);
      submitImage(image.path);
    });
  }

  return (
    <Box height="100%" safeArea>
      <Box>
        <VStack>
          <Pressable alignItems={'center'} onPress={pickPhotoFromGallery}>
            <Image
              size="xl"
              borderRadius={100}
              source={{
                uri: img,
              }}
              alt="Alternate Text"
            />
          </Pressable>

          <Box p={8}>
            <Input
              variant="underlined"
              onChangeText={text => setFirstName(text)}
              placeholder="First Name"
              fontSize={15}
            />
          </Box>

          <Box p={8}>
            <Input
              variant="underlined"
              onChangeText={text => setLastName(text)}
              placeholder="Last Name"
              fontSize={15}
            />
          </Box>
        </VStack>
      </Box>

      <Box pt={'10'} w="85%" maxW="350px" mx="auto" borderRadius={5}>
        <Button
          bg={'success.500'}
          onPress={() => {
            handleChange();
          }}>
          <Text color={'light.100'} fontWeight="bold">
            Save
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
export default ProfileInfo;
