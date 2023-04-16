import React from 'react';
import {Input} from 'native-base';
import debounce from 'lodash.debounce';

const SearchBox = ({searchPerson, searchItem}) => {

  const handleText = debounce(text => {
    searchPerson(text);
  }, 200);

  return (
    <Input
      onChangeText={text => handleText(text)}
      h={10}
      mb={5}
      w={{
        base: '100%',
        md: '25%',
      }}
      placeholder="Name"
      bg={'muted.200'}
    />
  );
};
export default SearchBox;
