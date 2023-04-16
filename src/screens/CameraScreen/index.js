import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Text, Box, Image, Button, Center, VStack} from 'native-base';


const CameraScreen = () => {
  const [img, setImg] = useState(
    'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
  );

  function takePhotoFromCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
    });
  }

  function pickPhotoFromGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImg(image.path);
    });
  }

  return (
    <Box safeAreaTop>
      <Box mt={50} pl={20} pr={20}>
        <Center>
          <Image
            source={{
              uri: img,
            }}
            alt="Alternate Text"
            size="2xl"
            borderRadius="10"
          />
        </Center>
      </Box>

      <VStack m="50">
        <Button bg={'tertiary.300'} onPress={takePhotoFromCamera} mt={5}>
          <Text color={'light.100'} fontWeight="bold">
            Take Photo
          </Text>
        </Button>

        <Button bg={'tertiary.400'} onPress={pickPhotoFromGallery} mt={5}>
          <Text color={'light.100'} fontWeight="bold">
            Choose Photo
          </Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default CameraScreen;
