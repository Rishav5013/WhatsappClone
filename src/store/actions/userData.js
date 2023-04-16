import {types} from './types';

export function getUserData(userNumber) {
  return {
    type: types.GET_USER_DATA,
    payload: {userNumber},
  };
}

export function userDataSucess(user) {
  return {
    type: types.GET_USER_DATA_SUCCESS,
    payload: user,
  };
}

export function userDataFailure(error) {
  return {
    type: types.GET_USER_DATA_FAILURE,
    payload: error,
  };
}

export function getUser2Data(user2) {
  return {
    type: types.GET_USER2_DATA,
    payload: {user2},
  };
}

export function getUser2DataSucess(user) {
  return {
    type: types.GET_USER2_DATA_SUCCESS,
    payload: user,
  };
}

export function getUser2DataFailure(error) {
  return {
    type: types.GET_USER2_DATA_FAILURE,
    payload: error,
  };
}

// export function getChatIDData(myArray) {
//   return {
//     type: types.GET_CHATID_DATA,
//     payload: {myArray},
//   };
// }

export function getChatIDData(numberDoc) {
  return {
    type: types.GET_CHATID_DATA,
    payload: {numberDoc},
  };
}

export function getChatIDDataSucess(user) {
  return {
    type: types.GET_CHATID_SUCCESS,
    payload: user,
  };
}

export function getChatIDDataFailure(error) {
  return {
    type: types.GET_CHATID_FAILURE,
    payload: error,
  };
}
//-------

export function getContactListUserData(numbers1) {
  return {
    type: types.GET_CONTACTLISTUSER_DATA,
    payload: {numbers1},
  };
}

export function getContactListUserDataSucess(user) {
  return {
    type: types.GET_CONTACTLISTUSER_DATA_SUCCESS,
    payload: user,
  };
}

export function getContactListUserDataFailure(error) {
  return {
    type: types.GET_CONTACTLISTUSER_DATA_FAILURE,
    payload: error,
  };
}
//-------------

export function CreateChatroom(docid,sentBy,sentTo) {
  return {
    type: types.CREATE_CHATROOM,
    payload: {docid,sentBy,sentTo},
  };
}

export function CreateChatroomSucess(user) {
  return {
    type: types.CREATE_CHATROOM_SUCCESS,
    payload: user,
  };
}

export function CreateChatroomFailure(error) {
  return {
    type: types.CREATE_CHATROOM_FAILURE,
    payload: error,
  };
}

export function SetChatroom(docid, sentBy, sentTo) {
  return {
    type: types.SET_CHATROOM,
    payload: {docid, sentBy, sentTo},
  };
}

export function SetChatroomSucess(user) {
  return {
    type: types.SET_CHATROOM_SUCCESS,
    payload: user,
  };
}

export function SetChatroomFailure(error) {
  return {
    type: types.SET_CHATROOM_FAILURE,
    payload: error,
  };
}
//---Check1
export function updateDocIdinUser1(docid, sentBy) {
  return {
    type: types.UPDATE_DOCID_IN_USER1,
    payload: {docid, sentBy},
  };
}

export function updateDocIdinUser2(docid, sentTo) {
  return {
    type: types.UPDATE_DOCID_IN_USER2,
    payload: {docid, sentTo},
  };
}

export function updateMessage(docid, mymsg) {
  console.log(mymsg);
  return {
    type: types.UPDATE_MESSAGE,
    payload: {docid, mymsg},
  };
}

export function updateData(numberdoc, params) {
  return {
    type: types.UPDATE_DATA,
    payload: {numberdoc, params},
  };
}

export function signOut() {
  return {
    type: types.USER_SIGNOUT,
    payload: {},
  };
}

export function clearMessage() {
  return {
    type: types.CLEAR_MESSAGE,
    payload: {},
  };
}

export function getRealtimeMessage(docid) {
  return {
    type: types.GET_REALTIME_MESSAGE,
    payload: {docid},
  };
}

export function getRealtimeMessageAfterPagination(
  lastVisible,
  postPerLoad,
  docid,
) {
  return {
    type: types.GET_REALTIME_MESSAGE_AFTER_PAGINATION,
    payload: {lastVisible, postPerLoad, docid},
  };
}

export function createRealtimeDatabase(MyNumber) {
  return {
    type: types.CREATE_REALTIME_DATABASE,
    payload: {MyNumber},
  };
}

export function clearTheUserData() {
  return {
    type: types.CLEAR_USER_DATA,
    payload: {},
  };
}
export function saveContactData(numberDoc, params) {
  return {
    type: types.SAVE_CONTACT,
    payload: {numberDoc, params},
  };
}

export function setProfileInfo(numberDoc, params) {
  return {
    type: types.SET_PROFILE_INFO,
    payload: {numberDoc, params},
  };
}

export function filterChatData(newData) {
  return {
    type: types.FILTER_CHATSCREEN_DATA,
    payload: {newData},
  };
}

export function filterCreateNewData(newData) {
  return {
    type: types.FILTER_CREATENEWSCREEN_DATA,
    payload: {newData},
  };
}


