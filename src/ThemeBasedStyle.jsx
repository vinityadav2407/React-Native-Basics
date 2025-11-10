// *********Theame-Based-Styleing******************* */

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';

const ThemeBasedStyle = () => {
  const theme = useColorScheme();
  console.log(theme);
  const bgColor=theme==='light'?'light':'black';
  const textColor=theme=='light'?'black':'white';
  return (
    <SafeAreaView style={[styles.container,{backgroundColor:bgColor}]}>
      <Text style={styles.AppText}>App</Text>
      <Image
        style={{ height: 200 }}
        source={{
          uri: 'https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg',
        }}
      />

      <Pressable
        style={styles.BtnStyle}
        onPress={() => Alert.alert('button was clicked!!')}
      >
        <Text style={styles.BtnText}>Clicke it!!</Text>
      </Pressable>

      <Text style={[styles.genText,{color:textColor}]}>Hellow bhaiyo kaise ho !!</Text>

    </SafeAreaView>
  );
};

export default ThemeBasedStyle;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
    // backgroundColor:'black',
    height:'100%'
  },
  BtnStyle: {
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: 'red',
    borderColor: 'black',
    paddingVertical: 10,
    alignItems: 'center',
  },

  AppText: {
     color: 'red',
     fontSize: 30
     },
  BtnText:{ 
      fontSize: 20, 
      fontWeight: 500 
    },
    genText:{
      fontSize: 20, 
      fontWeight: 500 
    }
});
