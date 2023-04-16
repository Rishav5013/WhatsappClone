import React from 'react';
import {Input,Box,Spinner} from 'native-base';
import debounce from 'lodash.debounce';

const LoadingSpinner = () => {
  return (
    <Box justifyContent={'center'} alignItems={'center'} h="100%">
      <Spinner size={'lg'} />
    </Box>
  );
};
export default LoadingSpinner;
