import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Auth';
import Signup from '../../screens/User';

const Stack = createStackNavigator();

const UserScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default UserScreen;