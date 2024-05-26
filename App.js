import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import ParentProfileSuccess from './components/ParentProfileSuccess';
import RegistrationQ1 from './components/RegistrationQ1';
import RegistrationQ2 from './components/RegistrationQ2';
import RegistrationQ3 from './components/RegistrationQ3';
import RegistrationQ4 from './components/RegistrationQ4';
import RegistrationQ5 from './components/RegistrationQ5';
import ChildProfileSuccess from './components/ChildProfileSuccess';
import Home from './components/Home';
import HomeNotRegistered from './components/HomeNotRegistered';
import DescriptMealCard from './components/DescriptMealCard';
import Explore from './components/Explore';
import Payment from './components/Payment';
import NewMeal from './components/NewMeal';
import Cart from './components/Cart';
import Notification from './components/Notification';
import Welcome from './components/Welcome';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Intro4 from './components/Intro4';
import ChildAccount from './components/ChildAccount';
import VideoPage from './components/VideoPage';
import ArticlePage from './components/ArticlePage';
import ModalCalendar from './components/ModalCalendar';
import 'react-native-gesture-handler';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';



const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Caladea-Bold': require('./assets/fonts/Caladea-Bold.ttf'),
        'RadioCanada': require('./assets/fonts/RadioCanada.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // Повертаємо null, доки шрифти не завантажаться
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro1" >
      <Stack.Screen name="Intro1" component={Intro1} />
      <Stack.Screen name="Intro2" component={Intro2} />
      <Stack.Screen name="Intro3" component={Intro3} />
      <Stack.Screen name="Intro4" component={Intro4} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ParentProfileSuccess" component={ParentProfileSuccess} />
        <Stack.Screen name="RegistrationQ1" component={RegistrationQ1} />
        <Stack.Screen name="RegistrationQ2" component={RegistrationQ2} />
        <Stack.Screen name="RegistrationQ3" component={RegistrationQ3} />
        <Stack.Screen name="RegistrationQ4" component={RegistrationQ4} />
        <Stack.Screen name="RegistrationQ5" component={RegistrationQ5} />
        <Stack.Screen name="ChildProfileSuccess" component={ChildProfileSuccess} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeNotRegistered" component={HomeNotRegistered} />
        <Stack.Screen name="DescriptMealCard" component={DescriptMealCard} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="NewMeal" component={NewMeal} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="ChildAccount" component={ChildAccount} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
        <Stack.Screen name="ArticlePage" component={ArticlePage} />
        <Stack.Screen name="ModalCalendar" component={ModalCalendar} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
