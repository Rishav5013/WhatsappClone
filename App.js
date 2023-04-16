import store from './src/store';
import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import MainNavigator from './src/navigation/MainNavigator';
import messaging from '@react-native-firebase/messaging';
import ErrorBoundary from './src/components/ErrorBoundry';

const App = () => {
  const setupCloudMessaging = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
    }
  };

  useEffect(() => {
    setupCloudMessaging();
    // It will trigger when app was in background
    messaging().onNotificationOpenedApp(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
    // It will trigger when app was in quit mode
    messaging().getInitialNotification(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
    // If app is in background mode
    messaging().setBackgroundMessageHandler(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
    // If app is in foreground mode
    messaging().onMessage(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <MainNavigator />
        </ErrorBoundary>
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
