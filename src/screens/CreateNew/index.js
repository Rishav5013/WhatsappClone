import React, {useState, useEffect} from 'react';
import {ListItem} from '../../components/ListItem';
import SearchBox from '../../components/SearchBox';
import {CreateNewData} from '../../config/fakeData';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, Box, HStack, Pressable, ScrollView, Button,Icon,leftIcon} from 'native-base';

import {
  getContactListUserData,
  SetChatroom,
  CreateChatroom,
  updateDocIdinUser1,
  updateDocIdinUser2,
  clearMessage,
  filterCreateNewData,
} from '../../store/actions/userData';

const CreateNew = ({navigation}) => {
  const [searchItem, setSearchItem] = useState('');
  const [data, setData] = useState([]);
  const [userContactList, setUserContactList] = useState([]);
  const numbers1 = [];
  const contactList1 = [];
  const dispatch = useDispatch();

  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );

  const ContactListUserData = useSelector(
    state => state.userDataReducer.ContactListUserData,
  );
  const CreateChatroomData = useSelector(
    state => state.userDataReducer.CreateChatroomData,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = CurentUserData.ContactList;
      if (data != null) {
        data.forEach(doc => {
          numbers1.push(doc.userNumber);
        });
      }
      dispatch(getContactListUserData(numbers1));
    };

    fetchData();
  }, [CurentUserData.ContactList.length]);

  function searchPerson(text) {
    if (text) {
      const newData = ContactListUserData.filter(item => {
        const itemData = item.firstName
          ? item.firstName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      if (newData != []) {
        dispatch(filterCreateNewData(newData));
      }
    } else {
      const data = CurentUserData.ContactList;
      if (data != null) {
        data.forEach(doc => {
          numbers1.push(doc.userNumber);
        });
      }
      dispatch(getContactListUserData(numbers1));
    }
  }

  return (
    <Box height="100%" safeArea>
      <HStack justifyContent={'space-between'} ml={4} mr={2}>
        <Text fontWeight={'bold'} fontSize={20}>
          Create New
        </Text>

        <Box ml={1} pb={5}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Entypo name="cross" size={30} />
          </Pressable>
        </Box>
      </HStack>

      <Box ml={4} mr={4}>
        <SearchBox searchPerson={searchPerson} searchItem={searchItem} />
      </Box>

      <Box p='3'>
        <Button
          leftIcon={<Icon size="md" as={AntDesign} name="addusergroup" />}
          bg={'success.500'}>
          <Text fontSize={17} fontWeight={600} color={'muted.50'}>
            New Group
          </Text>
        </Button>
      </Box>

      <Box pl='3' pr='3'>
        <Button
          leftIcon={<Icon size="md" as={AntDesign} name="adduser" />}
          bg={'success.500'}
          onPress={() => navigation.navigate('NewContact')}>
          <Text fontSize={17} fontWeight={600} color={'muted.50'}>
            Add User
          </Text>
        </Button>
      </Box>

      <Box mb={4} ml={5}>
        <Text fontWeight={500}>All Contacts</Text>
      </Box>

      <ScrollView>
        {ContactListUserData
          ? ContactListUserData.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={async () => {
                    const sentBy = CurentUserData.number;
                    const sentTo = item.number;

                    const docid =
                      sentBy > sentTo
                        ? sentBy + '-' + sentTo
                        : sentTo + '-' + sentBy;

                    dispatch(CreateChatroom(docid, sentBy, sentTo));
                    dispatch(clearMessage());
                    navigation.navigate('InternalChatScreen', {
                      name: item.firstName,
                      image: item.image,
                      docid: docid,
                      sentBy: sentBy,
                    });
                  }}>
                  <ListItem
                    key={index}
                    title={item.firstName}
                    belowTitle="Hello World"
                    date={item.date}
                    fromCreateNewScreen={true}
                    image={item.image}
                  />
                </Pressable>
              );
            })
          : null}
      </ScrollView>
    </Box>
  );
};
export default CreateNew;
