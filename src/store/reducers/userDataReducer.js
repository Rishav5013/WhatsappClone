import {types} from '../actions/types';

const initialState = {
  CurentUserData: null,
  ChatIDData: [],
  User2Data: null,
  ContactListUserData: [],
  CreateChatroomData: null,
  loading: false,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_DATA':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_DATA_SUCCESS':
      return {
        ...state,
        CurentUserData: action.payload,
        loading: false,
      };
    case 'GET_USER_DATA_FAILURE':
      return {
        ...state,
        CurentUserData: {},
        loading: false,
      };

    //------------------------//
    case 'GET_CHATID_SUCCESS':
      return {
        ...state,
        ChatIDData: action.payload,
        loading: false,
      };

    case 'GET_CONTACTLISTUSER_DATA_SUCCESS':
      return {
        ...state,
        ContactListUserData: action.payload,
        loading: false,
      };

    case 'CREATE_CHATROOM_SUCCESS':
      return {
        ...state,
        CurentUserData: {
          ...state.CurentUserData,
          chatId: [...state.CurentUserData.chatId, action.payload],
        },
        loading: false,
      };

    //-------
    case 'SET_CHATROOM_SUCCESS':
      return {
        ...state,
        loading: false,
      };

    case 'GET_USER2_DATA_SUCCESS':
      return {
        ...state,
        User2Data: action.payload,
        loading: false,
      };

    case 'UPDATE_DOCID_IN_USER1_SUCCESS':
      return {
        ...state,
        CurentUserData: {
          ...state.CurentUserData,
          chatId: [...state.CurentUserData.chatId, action.payload],
        },
        loading: false,
      };

    case 'UPDATE_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        CurentUserData: {...state.CurentUserData, ...action.payload},
      };

    case 'USER_SIGNOUT_SUCCESS':
      return {
        initialState,
      };

    case 'SAVE_CONTACT_SUCESS':
      return {
        ...state,
        CurentUserData: {
          ...state.CurentUserData,
          ContactList: [
            ...state.CurentUserData.ContactList,
            {...action.payload},
          ],
        },
      };

    case 'SET_PROFILE_INFO_SUCESS':
      return {
        ...state,
        loading: false,
        CurentUserData: {...state.CurentUserData, ...action.payload},
      };

    case 'FILTER_CHATSCREEN_DATA_SUCESS':
      return {
        ...state,
        ChatIDData: action.payload,
        loading: false,
      };

    case 'FILTER_CREATENEWSCREEN_DATA_SUCESS':
      return {
        ...state,
        ContactListUserData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userDataReducer;
