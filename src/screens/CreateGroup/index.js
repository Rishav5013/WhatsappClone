import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchBox from '../../components/SearchBox';
import {CreateNewData} from '../../config/fakeData';
import {ListItem} from '../../components/ListItem';
import {Text, Box, HStack, Pressable, Button, ScrollView} from 'native-base';

const CreateGroup = ({navigation}) => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState(CreateNewData);

  function searchPerson(text) {
    if (text) {
      const newData = CreateNewData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchItem(text);
    } else {
      setFilteredData(CreateNewData);
      setSearchItem(text);
    }
  }

  return (
    <Box height="100%" safeArea>
      <HStack justifyContent={'space-between'} ml={4} mr={2}>
        <Text fontWeight={'bold'} fontSize={20}>
          Create Group
        </Text>

        <Box ml={1} pb={5}>
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={30} />
          </Pressable>
        </Box>
      </HStack>

      <Box ml={4} mr={4}>
        <SearchBox searchPerson={searchPerson} searchItem={searchItem} />
      </Box>

      <Box mb={4} ml={5}>
        <Text fontWeight={500}>All Contacts</Text>
      </Box>

      <ScrollView>
        {filteredData.map((data, index) => {
          return (
            <Pressable
              key={data.title}
              onPress={() =>
                navigation.navigate('InternalChatScreen', {
                  name: data.title,
                  image: data.imagedata,
                })
              }>
              <ListItem
                key={index}
                title={data.title}
                belowTitle={data.belowTitle}
                date={data.date}
                fromChatScreen={data.fromChatScreen}
                image={data.imagedata}
              />
            </Pressable>
          );
        })}
      </ScrollView>

      <Box pt={'10'} w="85%" maxW="350px" mx="auto" borderRadius={5}>
        <Button bg={'success.500'}>
          <Text color={'light.100'} fontWeight="bold">
            Create
          </Text>
        </Button>
      </Box>
      
    </Box>
  );
};
export default CreateGroup;
