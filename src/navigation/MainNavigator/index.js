import React, {useEffect} from 'react';
import { Box, Spinner } from 'native-base';
import LoadingSpinner from '../../components/LoadingSpinner';
import AuthStack from '../AuthStack';
import AppStack from '../AppStack';
import {useDispatch, useSelector} from 'react-redux';
import {CurrentRenderContext, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import { getUserData } from '../../store/actions/userData';
import auth from '@react-native-firebase/auth';

const MainNavigator = () => {

  const dispatch = useDispatch();
  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );
  const loading = useSelector(state => state.userDataReducer.loading);

  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      if(user){
        dispatch(getUserData(user.phoneNumber))
      }
    })
  },[]);

  return (
    <NavigationContainer>
      {loading ? <LoadingSpinner/> : CurentUserData ? (<AppStack/>) : (<AuthStack/>)}
    </NavigationContainer>
  );
};

export default MainNavigator;
