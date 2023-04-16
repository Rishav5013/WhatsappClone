import {types} from '../actions/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getData} from '../../services/firestore';
import {getChatIDData} from '../../services/firestore';
import {getContactListUserData} from '../../services/firestore';
import {setChatroom, CreateChatroom1} from '../../services/firestore';
import {getUser2Data1} from '../../services/firestore';
import {updateDocIDUser1} from '../../services/firestore';
import {
  updateDocIDUser2,
  CreateTheDatabase,
  gettingAllMessage,
  setProfileInfoData,
} from '../../services/firestore';
import {
  getRealtimeMessageService,
  getMoreRealtimeMessageService,
} from '../../services/firestore';
import {
  updateMessageService,
  updateDataService,
  SaveContactNoData,
} from '../../services/firestore';

function* getUserData(action) {
  const {userNumber} = action.payload;
  try {
    const data = yield call(getData, userNumber);
    yield put({type: types.GET_USER_DATA_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.GET_USER_DATA_FAILURE, payload: err});
    console.log(err);
  }
}

function* getChatIdData1(action) {
  const {numberDoc} = action.payload;
  try {
    const data = yield call(getChatIDData, numberDoc);
    yield put({type: types.GET_CHATID_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.GET_CHATID_FAILURE, payload: err});
    console.log(err);
  }
}

function* getContactListData1(action) {
  const {numbers1} = action.payload;
  try {
    const data = yield call(getContactListUserData, numbers1);
    yield put({type: types.GET_CONTACTLISTUSER_DATA_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.GET_CONTACTLISTUSER_DATA_FAILURE, payload: err});
    console.log(err);
  }
}

function* CreateChatroom(action) {
  const {docid, sentBy, sentTo} = action.payload;
  try {
    yield call(CreateChatroom1, docid, sentBy, sentTo);
    yield put({type: types.CREATE_CHATROOM_SUCCESS, payload: docid});
  } catch (err) {
    yield put({type: types.CREATE_CHATROOM_FAILURE, payload: err});
    console.log(err);
  }
}

function* SetChatroom(action) {
  const {docid, sentBy, sentTo} = action.payload;
  try {
    const data = yield call(setChatroom, docid, sentBy, sentTo);
    yield put({type: types.SET_CHATROOM_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.SET_CHATROOM_FAILURE, payload: err});
    console.log(err);
  }
}

function* getUser2Data(action) {
  const {user2} = action.payload;

  try {
    const data = yield call(getUser2Data1, user2);
    yield put({type: types.GET_USER2_DATA_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.GET_USER2_DATA_FAILURE, payload: err});
    console.log(err);
  }
}

function* UpdateDocIdInUser1(action) {
  const {docid, sentBy} = action.payload;
  try {
    yield call(updateDocIDUser1, docid, sentBy);
    yield put({type: types.UPDATE_DOCID_IN_USER1_SUCCESS, payload: docid});
  } catch (err) {
    yield put({type: types.UPDATE_DOCID_IN_USER1_FAILURE, payload: err});
    console.log(err);
  }
}

function* UpdateDocIdInUser2(action) {
  const {docid, sentTo} = action.payload;
  try {
    const data = yield call(updateDocIDUser2, docid, sentTo);
    yield put({type: types.UPDATE_DOCID_IN_USER2_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.UPDATE_DOCID_IN_USER2_FAILURE, payload: err});
    console.log(err);
  }
}

function* getRealtimeMessage(action) {
  const {docid} = action.payload;
  try {
    const data = yield call(getRealtimeMessageService, docid);
    yield put({type: types.GET_REALTIME_MESSAGE_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.GET_REALTIME_MESSAGE_FAILURE, payload: err});
    console.log(err);
  }
}

function* GetMoreRealtimeMessage(action) {
  const {lastVisible, postPerLoad, docid} = action.payload;
  try {
    const data = yield call(
      getMoreRealtimeMessageService,
      lastVisible,
      postPerLoad,
      docid,
    );
    yield put({
      type: types.GET_REALTIME_MESSAGE_AFTER_PAGINATION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: types.GET_REALTIME_MESSAGE_AFTER_PAGINATION_FAILURE,
      payload: err,
    });
    console.log(err);
  }
}

function* UpdateTheMessage(action) {
  const {docid, mymsg} = action.payload;
  try {
    yield call(updateMessageService, docid, mymsg);
    yield put({type: types.UPDATE_MESSAGE_SUCCESS, payload: mymsg});
  } catch (err) {
    yield put({type: types.UPDATE_MESSAGE_FAILURE, payload: err});
    console.log(err);
  }
}

function* UpdateTheData(action) {
  const {numberdoc, params} = action.payload;
  try {
    yield call(updateDataService, numberdoc, params);
    yield put({type: types.UPDATE_DATA_SUCCESS, payload: params});
  } catch (err) {
    yield put({type: types.UPDATE_DATA_FAILURE, payload: err});
    console.log(err);
  }
}

function* SignoutTheUser() {
  try {
    const data = 'SignOut';
    yield put({type: types.USER_SIGNOUT_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.USER_SIGNOUT_FAILURE, payload: err});
    console.log(err);
  }
}

function* ClearTheMessage() {
  try {
    const data = 'Clear Message';
    yield put({type: types.CLEAR_MESSAGE_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.CLEAR_MESSAGE_FAILURE, payload: err});
    console.log(err);
  }
}
function* CreateTheRealtimeDatabase(action) {
  const {MyNumber} = action.payload;
  try {
    const data = yield call(CreateTheDatabase, MyNumber);
    yield put({type: types.CREATE_REALTIME_DATABASE_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.CREATE_REALTIME_DATABASE_FAILURE, payload: err});
    console.log(err);
  }
}

function* SaveContactData(action) {
  const {numberDoc, params} = action.payload;
  try {
    yield call(SaveContactNoData, numberDoc, params);
    yield put({type: types.SAVE_CONTACT_SUCESS, payload: params});
  } catch (err) {
    yield put({type: types.SAVE_CONTACT_FAILURE, payload: err});
    console.log(err);
  }
}

function* SetProfileInfo(action) {
  const {numberDoc, params} = action.payload;
  try {
    yield call(setProfileInfoData, numberDoc, params);
    yield put({type: types.SET_PROFILE_INFO_SUCESS, payload: params});
  } catch (err) {
    yield put({type: types.SET_PROFILE_INFO_FAILURE, payload: err});
    console.log(err);
  }
}

function* filterChatscreenData(action) {
  const {newData} = action.payload;
  try {
    yield put({type: types.FILTER_CHATSCREEN_DATA_SUCESS, payload: newData});
  } catch (err) {
    yield put({type: types.FILTER_CHATSCREEN_DATA_FAILURE, payload: err});
    console.log(err);
  }
}
function* filterCreateNewscreenData(action) {
  const {newData} = action.payload;
  try {
    yield put({
      type: types.FILTER_CREATENEWSCREEN_DATA_SUCESS,
      payload: newData,
    });
  } catch (err) {
    yield put({type: types.FILTER_CREATENEWSCREEN_DATA_FAILURE, payload: err});
    console.log(err);
  }
}

export default function* MainSaga() {
  yield takeEvery(types.GET_USER_DATA, getUserData);
  yield takeEvery(types.SET_CHATROOM, SetChatroom);
  yield takeEvery(types.GET_USER2_DATA, getUser2Data);
  yield takeEvery(types.GET_CHATID_DATA, getChatIdData1);
  yield takeEvery(types.CREATE_CHATROOM, CreateChatroom);
  yield takeEvery(types.GET_CONTACTLISTUSER_DATA, getContactListData1);
  yield takeEvery(types.UPDATE_DOCID_IN_USER1, UpdateDocIdInUser1);
  yield takeEvery(types.UPDATE_DOCID_IN_USER2, UpdateDocIdInUser2);
  yield takeEvery(types.GET_REALTIME_MESSAGE, getRealtimeMessage);
  yield takeEvery(types.UPDATE_MESSAGE, UpdateTheMessage);
  yield takeEvery(types.UPDATE_DATA, UpdateTheData);
  yield takeEvery(types.USER_SIGNOUT, SignoutTheUser);
  yield takeEvery(types.CLEAR_MESSAGE, ClearTheMessage);
  yield takeEvery(
    types.GET_REALTIME_MESSAGE_AFTER_PAGINATION,
    GetMoreRealtimeMessage,
  );
  yield takeEvery(types.CREATE_REALTIME_DATABASE, CreateTheRealtimeDatabase);
  yield takeEvery(types.SAVE_CONTACT, SaveContactData);
  yield takeEvery(types.SET_PROFILE_INFO, SetProfileInfo);
  yield takeEvery(types.FILTER_CHATSCREEN_DATA, filterChatscreenData);
  yield takeEvery(types.FILTER_CREATENEWSCREEN_DATA, filterCreateNewscreenData);
}
