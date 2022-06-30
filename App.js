
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Home/Main';
import Users from './src/Users/userList';
import Posts from './src/Posts/postList';
import Albums from './src/Album/albums';
import MaterialCommunityIcons from './node_modules/react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home Page" component={Main} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen options={({ route }) => ({ title: route.params.title })} name="UserDetail" component={UserDetail} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="PostDetail" component={PostDetail} />
        </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen options={{ tabBarIcon: () => (<MaterialCommunityIcons name="home" size={40}></MaterialCommunityIcons>), headerShown: false}} name="Home"  component={Main} />
          <Tab.Screen options={{ tabBarIcon: () => (<MaterialCommunityIcons name="account-multiple" size={40}></MaterialCommunityIcons>),headerShown: false}} name="Users" component={Users} />
          <Tab.Screen options={{ tabBarIcon: () => (<MaterialCommunityIcons name="jira" size={40}></MaterialCommunityIcons>),headerShown: false}} name="Posts" component={Posts} />
          <Tab.Screen options={{ tabBarIcon: () => (<MaterialCommunityIcons name="jira" size={40}></MaterialCommunityIcons>),headerShown: false}} name="Albums" component={Albums} />
                
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}



export default App