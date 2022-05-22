import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Home/Main';
import Users from './src/Users/userList';
import Posts from './src/Posts/postList';
import UserDetail from './src/Users/userDetails';
import PostDetail from './src/Posts/postDetails';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home Page" component={Main} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen options={({ route }) => ({ title: route.params.title })} name="UserDetail" component={UserDetail} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="PostDetail" component={PostDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



export default App