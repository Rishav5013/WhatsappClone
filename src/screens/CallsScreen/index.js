import React, {useState} from 'react';
import {ListItem} from '../../components/ListItem';
import SearchBox from '../../components/SearchBox';
import {CallScreenData} from '../../config/fakeData';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {HStack, Text, Box, VStack, ScrollView, Pressable} from 'native-base';


const CallsScreen = ({navigation}) => {
  const [isSearchCicked, setIsSearchCicked] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState(CallScreenData);

  function searchPerson(text) {
    if (text) {
      const newData = CallScreenData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchItem(text);
    } else {
      setFilteredData(CallScreenData);
      setSearchItem(text);
    }
  }

  const showSearchBox = text => {
    if (text === 'on') {
      setIsSearchCicked(true);
    } else {
      setIsSearchCicked(false);
    }
  };

  return (
    <>
      <Box safeArea>
        <HStack justifyContent={'space-between'} p={5}>
          <Text fontSize={25} fontWeight={'bold'}>
            Calls
          </Text>

          <Pressable onPress={() => showSearchBox('on')}>
            <Feather name="search" size={25} />
          </Pressable>
        </HStack>

        <Box>
          {isSearchCicked ? (
            <Box pl={5} pr={5}>
              <HStack>
                <Box width="89%" mr={1} mt={0.5}>
                  <SearchBox
                    searchPerson={searchPerson}
                    searchItem={searchItem}
                  />
                </Box>

                <Box ml={1} pb={5}>
                  <Pressable onPress={() => showSearchBox('off')}>
                    <Entypo name="cross" size={35} />
                  </Pressable>
                </Box>
              </HStack>
            </Box>
          ) : null}
        </Box>

        <ScrollView>
          <VStack>
            {filteredData.map((data, index) => {
              return (
                <ListItem
                  key={index}
                  title={data.title}
                  belowTitle={data.belowTitle}
                  color={data.color}
                  time={data.time}
                  fromCallScreen={data.fromCallScreen}
                  image={data.imagedata}
                  navigation={navigation}
                />
              );
            })}
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
};
export default CallsScreen;
