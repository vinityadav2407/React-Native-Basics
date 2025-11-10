// ***************************  ScrollView into the React-native          ********* */

import {View,Image,StyleSheet,Text} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const ScrollViewAndroid=()=>{
  return(
    <ScrollView 
    contentContainerStyle={{gap:10}}
    vertical
    style={styles.container}>

      <View style={[styles.box,{backgroundColor:'red'}]}>
        <Text style={styles.text} >Boxt1</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'green'}]}>
        <Text style={styles.text} >Boxt2</Text>
      </View>

      <View style={[ styles.box,{backgroundColor:'yellow'}]}>
        <Text style={styles.text} >Boxt3</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'pink'}]}>
        <Text style={styles.text} >Boxt4</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'red'}]}>
        <Text style={styles.text} >Boxt1</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'green'}]}>
        <Text style={styles.text} >Boxt2</Text>
      </View>

      <View style={[ styles.box,{backgroundColor:'yellow'}]}>
        <Text style={styles.text}>Boxt3</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'pink'}]}>
        <Text style={styles.text} >Boxt4</Text>
      </View>

          <View style={[styles.box,{backgroundColor:'red'}]}>
        <Text style={styles.text} >Boxt1</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'green'}]}>
        <Text style={styles.text} >Boxt2</Text>
      </View>

      <View style={[ styles.box,{backgroundColor:'yellow'}]}>
        <Text style={styles.text} >Boxt3</Text>
      </View>

      <View style={[styles.box,{backgroundColor:'pink'}]}>
        <Text style={styles.text} >Boxt4</Text>
      </View>  

    </ScrollView>
  );
}

export default ScrollViewAndroid;

const styles=StyleSheet.create({
  container:{
    backgroundColor:'black',
    // gap:10,>>>>> this is not working is ScrollView
    paddingTop:50,
  },
  box:{
    height:100,
    width:100,
    borderRadius:50,
    alignSelf:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:20,
    fontWeight:500,
    alignSelf:'center',
  }

})