import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import LoginScreen from './screens/loginScreen';
import RegistrationScreen from './screens/registrationScreen';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import WelcomeScreen from './screens/welcomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {observer} from 'mobx-react';
import store from './store/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const {userID, startLoading} = store;

  useEffect(() => {
    if (!startLoading) {
      SplashScreen.hide();
    }
  }, [startLoading]);

  useEffect(() => {
    setTimeout(() => setWelcome(false), 2000);
  }, []);

  if (userID) {
    if (welcome) {
      return <WelcomeScreen />;
    }
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            labelStyle: {
              textTransform: 'uppercase',
            },
          }}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-settings' : 'ios-settings-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(App);
