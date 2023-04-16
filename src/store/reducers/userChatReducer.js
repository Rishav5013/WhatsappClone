import {types} from '../actions/types';

const initialState = {
  messageChat: null,
  realtimeMsg: null,
  lastVisible: null,
  loading: false,
  message2: null,
  lastVisible: null,
  chatList: [],
  error: {},
  chatDataLength: null,
};

const userChatReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_REALTIME_MESSAGE':
      return {
        ...state,
        loading: true,
      };

    case 'GET_REALTIME_MESSAGE_SUCCESS':
      return {
        ...state,
        realtimeMsg: payload,
        loading: false,
      };
    case 'GET_REALTIME_MESSAGE_FAILURE':
      return {
        ...state,
        messageChat: {},
        loading: false,
      };

    case 'UPDATE_MESSAGE_SUCCESS':
      return {
        ...state,
        loading: false,
      };
      
    case 'CLEAR_MESSAGE_SUCCESS':
      return {
        initialState,
      };

    case 'GET_REALTIME_MESSAGE_AFTER_PAGINATION':
      return {
        ...state,
        loading: true,
      };

    case 'GET_REALTIME_MESSAGE_AFTER_PAGINATION_SUCCESS':
      return {
        ...state,
        chatList: [...state.chatList, ...payload.list2],
        lastVisible: payload.lastVisible2,
        loading: false,
      };
    case 'GET_REALTIME_MESSAGE_AFTER_PAGINATION_FAILURE':
      return {
        ...state,
        messageChat2: {},
        loading: false,
      };

    default:
      return state;
  }
};

export default userChatReducer;
