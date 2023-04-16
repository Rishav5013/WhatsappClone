import {Box} from 'native-base';
import Header from '../../components/Header';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {getRealtimeMessage, updateMessage} from '../../store/actions/userData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InternalChatScreen = ({route, navigation}) => {
  const {name, image, docid, sentBy} = route.params;
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const realtimeMsg = useSelector(state => state.userChatReducer.realtimeMsg);

  useEffect(() => {
    const loadData = async () => {
      dispatch(getRealtimeMessage(docid));
      if (realtimeMsg) {
        realtimeMsg.onSnapshot(querySnap => {
          const allmsg = querySnap.docs.map(docSnap => {
            return {
              ...docSnap.data(),
              createdAt: docSnap.data().createdAt.toDate(),
            };
          });
          setMessages(allmsg);
        });
      }
    };
    loadData();
  }, [!realtimeMsg]);

  const onSend = async messageArray => {
    const msg = messageArray[0];

    if (msg.text != '') {
      const mymsg = {
        ...msg,
        createdAt: new Date(),
      };

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, mymsg),
      );
      dispatch(updateMessage(docid, mymsg));
    }
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <MaterialCommunityIcons name="send-circle" size={45} color={'green'} />
      </Send>
    );
  };

  return (
    <>
      <Box safeAreaTop>
        <Header navigation={navigation} name={name} image={image} />
      </Box>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: sentBy,
        }}
        renderInputToolbar={props => {
          return (
            <Box w="100%" mt={10}>
              <InputToolbar {...props} />
            </Box>
          );
        }}
        alwaysShowSend
        renderSend={renderSend}
      />
    </>
  );
};
export default InternalChatScreen;
