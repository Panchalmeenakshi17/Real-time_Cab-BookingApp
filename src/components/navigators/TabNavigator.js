import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
// import HomeScreen from '../screens/HomeScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import CartScreen from '../screens/CartScreen';
// import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../CustomIcon';
import Otp from '../Otp/Otp';
import SearchPlace from '../SearchPlace';
import Profile from '../Profile/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={SearchPlace}  
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              color={focused ? '#e31fa2ff' : '#9b6f8dff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Profile}  
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={focused ? '#e31fa2ff' : '#9b6f8dff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Otp}      
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={focused ? '#e31fa2ff' : '#9b6f8dff'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="History"
        component={OrderHistoryScreen}  
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={focused ? '#e31fa2ff' : '#9b6f8dff'}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'rgba(12,15,20,0.5)',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
