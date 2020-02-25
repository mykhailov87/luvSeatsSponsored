// Modules
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider, initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Header from './src/components/Header/Header';
// Engine
import NavigationService from './src/engine/services/navigation';
// Screens
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PostScreen from './src/screens/PostScreen/PostScreen';
// Store
import { store } from './src/engine/init/store';

const {
  home: homeScreen,
  post: postScreen,
} = NavigationService.screens;

const Stack = createStackNavigator();

function App() {
  const [homeScreenOptions] = useState({ header: Header, title: 'Charities' });
  const [postScreenOptions] = useState({});

  return (
    <Provider store={store}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <NavigationContainer ref={NavigationService.navigationRef}>
          <Stack.Navigator headerMode="float" initialRouteName={homeScreen}>
            <Stack.Screen component={HomeScreen} name={homeScreen} options={homeScreenOptions} />
            <Stack.Screen component={PostScreen} name={postScreen} options={postScreenOptions} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
