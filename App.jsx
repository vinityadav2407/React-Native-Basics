import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fundamental from './src/Fundamental.jsx';
import ThemeBasedStyle from './src/ThemeBasedStyle';
import ScrollViewAndroid from './src/ScrollViewAndroid.jsx';
import FlatListAndroid from './src/FlatListAndroid.jsx';
import TextInputAndroid from './src/TextInputAndroid.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home.jsx';
import Profile from './src/screens/Profile.jsx';
import Search from './src/screens/Search.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor:'black',
      tabBarLabelStyle:{
        fontSize:12
      },
      tabBarStyle:{
        height:80,
      }
    }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
       tabBarActiveTintColor:'red',
       tabBarIcon:({size,color})=>(
       <IconAntDesign name="home" size={size} color="red" />
      ) 
      }}
      />
      <Tab.Screen name="Profile"
       component={Profile}
        options={{
       tabBarIcon:({size,color})=>(
       <IconFeather name="user" size={size} color={color} />
      ) }}
       />
       <Tab.Screen name="Search" 
       component={Search}
      options={{
       tabBarIcon:({size,color})=>(
       <IconFontAwesome  name="search" size={size} color={color} />
      ) }}
          
        />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackNevigator() {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerStyle:{backgroundColor:'yellow'}
    }}
    >
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown:true,title:'Home Screen',headerStyle:{backgroundColor:'red'}}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  appText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'red',
    alignSelf: 'center',
  },
});
