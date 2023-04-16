import React from 'react';
import images from '../../config/images';
import fakeData from '../../config/fakeData';
import {Box, Button, Text, Image, VStack} from 'native-base';

const ErrorScreen = () => {
  return (
    <Box h="100%" bg="muted.100">
      <VStack alignItems={'center'} justifyContent="center" h="80%">
        <Image source={images.ErrorScr} alt="Alternate Text" size="2xl" />
        <Text fontWeight={'bold'} fontSize="2xl" mt="5">
          Whoops
        </Text>

        <Text fontSize="md" mt="5">
          Slow or no internet connection
        </Text>
        <Text fontSize="md">Please check your internet Settings.</Text>

        <Box mt="10">
          <Button colorScheme="success">Pull Down to Refresh</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ErrorScreen;
