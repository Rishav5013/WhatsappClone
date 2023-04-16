import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const getData = async phoneNumber => {
  if (phoneNumber === null) {
    return null;
  } else {
    const response = await firestore()
      .collection('users')
      .doc(phoneNumber)
      .get();
    return response.data();
  }
};

export const getUser2Data1 = async user2 => {
  if (user2 === null || user2.length === 0) {
    return null;
  } else {
    const response = await firestore()
      .collection('users')
      .where('number', 'in', user2)
      .get();
    return response;
  }
};

export const getContactListUserData = async numbers1 => {
  var contactList1 = [];

  if (numbers1.length != 0) {
    const response = await firestore()
      .collection('users')
      .where('number', 'in', numbers1)
      .get();

    if (response != null) {
      response.forEach(doc => {
        contactList1.push(doc.data());
      });
    }
    return contactList1;
  }
};

export const CreateChatroom1 = async (docid, sentBy, sentTo) => {
  const response = await firestore().collection('Chatroom').doc(docid).get();

  if (response.exists) {
  } else {
    await firestore().collection('Chatroom').doc(docid).set({
      user1: sentBy,
      user2: sentTo,
      chatId: docid,
    });

    const item1 = await firestore().collection('users').doc(sentBy);
    item1.update({
      chatId: firestore.FieldValue.arrayUnion(docid),
    });

    const item2 = await firestore().collection('users').doc(sentTo);
    item2.update({
      chatId: firestore.FieldValue.arrayUnion(docid),
    });
  }
};

export const setChatroom = async (docid, sentBy, sentTo) => {
  const response = await firestore().collection('Chatroom').doc(docid).set({
    user1: sentBy,
    user2: sentTo,
    chatId: docid,
  });
  return response;
};

export const getRealtimeMessageService = async docid => {
  const realtimeMsg = await firestore()
    .collection('Chatroom')
    .doc(docid)
    .collection('messages')
    .orderBy('createdAt', 'desc');
  return realtimeMsg;
};

export const updateMessageService = async (docid, mymsg) => {
  

  const response = await firestore()
    .collection('Chatroom')
    .doc(docid)
    .collection('messages')
    .add(mymsg);
};

export const updateDataService = async (numberdoc, params) => {
  await firestore().collection('users').doc(numberdoc).update(params);
};

export const setProfileInfoData = async (numberDoc, params) => {
  await firestore().collection('users').doc(numberDoc).set(params);
};

export const updateDocIDUser2 = async (docid, sentTo) => {
  const response = await firestore().collection('users').doc(sentTo);
  response.update({
    chatId: firestore.FieldValue.arrayUnion(docid),
  });
  return response;
};

export const CreateTheDatabase = async MyNumber => {
  const resp = await firestore().collection('users').doc(MyNumber).get();
  if (resp.exists) {
    return
  } else {
    const response = await firestore().collection('users').doc(MyNumber).set({
      number: MyNumber,
      chatId: [],
      ContactList: [],
    });
    return response;
  }
};

export const SaveContactNoData = async (numberDoc, params) => {
  const item = firestore().collection('users').doc(numberDoc);
  item.update({
    ContactList: firestore.FieldValue.arrayUnion(params),
  });
};

export const getChatIDData = async numberDoc => {
  const chatId = [];
  const user2 = [];
  const chatScreenData = [];
  let myArray = [];
  let userDocData;
  let name;
  let image;

  await firestore()
    .collection('users')
    .doc(numberDoc)
    .get()
    .then(doc => {
      myArray = doc.data().chatId;
    });

  if (myArray.length != 0) {
    const response = await firestore()
      .collection('Chatroom')
      .where('chatId', 'in', myArray)
      .get();

    response.forEach(doc => {
      userDocData = doc.data();
      chatId.push(userDocData);

      if (userDocData.user2 === numberDoc) {
        user2.push(userDocData.user1);
      } else {
        user2.push(userDocData.user2);
      }
    });

    const responseUser = await firestore()
      .collection('users')
      .where('number', 'in', user2)
      .get();

    responseUser.forEach(doc => {
      let today = new Date();
      let date =
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear();

      const user1 = doc.data().number;
      const user2 = numberDoc;

      const uniqueDocId =
        user1 > user2 ? user1 + '-' + user2 : user2 + '-' + user1;

      const index = doc.data().chatId.findIndex(id => {
        return id === uniqueDocId;
      });

      const userData = {
        name: doc.data().firstName,
        image: doc.data().image,
        docid: doc.data().chatId[index],
        sentBy: numberDoc,
        date: date,
      };
      chatScreenData.push(userData);
    });
  }
  return chatScreenData;
};

export const updateDocIDUser1 = async (docid, sentBy) => {
  const response = await firestore().collection('users').doc(sentBy);
  response.update({
    chatId: firestore.FieldValue.arrayUnion(docid),
  });
};
