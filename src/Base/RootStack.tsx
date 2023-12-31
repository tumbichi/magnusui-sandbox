import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from '../Home/HomeStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home Stack">
      <Stack.Screen name="Home Stack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
