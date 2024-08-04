import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import RootNavigator from './RootNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colours } from '../../assets/SharedStyles';

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

const TabNavigator = ({}: TabNavigatorProps) => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
  
            return <Ionicons name={iconName || ''} size={size} color={color} />;
          },
        tabBarActiveTintColor: colours.$yellow,
        tabBarLabelStyle: {
          fontSize: 16,
          
        },
        tabBarStyle: {
          backgroundColor: colours.$black,
          borderTopWidth: 0,
          height: 60,
          paddingVertical: 10,
        
        },
    })}>  
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false}}/>
        <Tab.Screen name="Search" component={DashboardScreen} options={{ headerShown: false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})