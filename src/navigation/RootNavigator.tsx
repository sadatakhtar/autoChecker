import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import DashboardScreen from '../screens/DashboardScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import DefectsScreen from '../screens/DefectsScreen';

type Props = {};

const Stack = createStackNavigator();

const RootNavigator = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search Result"
        component={SearchResultScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Defects"
        component={DefectsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
