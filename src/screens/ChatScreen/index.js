import React, {useEffect, useState} from 'react';
import {
  Box,
  HStack,
  Input,
  Icon,
  Text,
  Pressable,
  ScrollView,
} from 'native-base';
import {ListItem} from '../../components/ListItem';
import SearchBox from '../../components/SearchBox';
import {useSelector, useDispatch} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {getChatIDData, filterChatData,clearMessage} from '../../store/actions/userData';


const ChatScreen = ({navigation}) => {
  const [searchItem, setSearchItem] = useState('');
  const [data2, setData2] = useState(ChatIDData);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );
  const ChatIDData = useSelector(state => state.userDataReducer.ChatIDData);

  useEffect(() => {
    const fetchData = async () => {
      const numberDoc = CurentUserData.number;
      dispatch(getChatIDData(numberDoc));
    };
    fetchData();
  }, [CurentUserData.chatId.length]);

  function searchPerson(text) {
    if (text) {
      const newData = ChatIDData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      if (newData != []) {
        dispatch(filterChatData(newData));
      }
    } else {
      dispatch(getChatIDData(CurentUserData.number));
    }
  }

  return (
    <>
      <Box bg={'muted.100'} height="100%">
        <Box safeAreaTop pl={5} pr={5} pb={3}>
          <HStack justifyContent={'space-between'}>
            <Text fontSize={30} fontWeight={'bold'}>
              Chats
            </Text>

            <Box bg={'tertiary.400'} h="8" w="8" borderRadius={10} mt={1.5}>
              <Pressable
                onPress={() => navigation.navigate('CreateNewNavigation')}>
                <Icon
                  as={<Feather name="plus" />}
                  ml={0.5}
                  mt={0.5}
                  size={7}
                  color="white.400"
                />
              </Pressable>
            </Box>
          </HStack>
        </Box>

        <Box ml="5" mr="5">
          <SearchBox searchPerson={searchPerson} searchItem={searchItem} />
        </Box>

        <ScrollView>
          {ChatIDData
            ? ChatIDData.map(data => {
                return (
                  <Pressable
                    key={data.docid}
                    onPress={async () => {
                      dispatch(clearMessage());
                      navigation.navigate('InternalChatScreen', {
                        name: data.name,
                        image: data.image,
                        docid: data.docid,
                        sentBy: data.sentBy,
                      });
                    }}>
                    <ListItem
                      key={data.id}
                      title={data.name}
                      belowTitle="Hey there!"
                      date={data.date}
                      fromChatScreen={true}
                      image={data.image}
                    />
                  </Pressable>
                );
              })
            : null}
        </ScrollView>
      </Box>
    </>
  );
};

export default ChatScreen;
