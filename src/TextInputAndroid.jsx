/************************** TextInput(handling the input) ***********************/ 
import { StyleSheet, Text, View ,Button,TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const TextInputAndroid = () => {
  let [task,setTask]=useState(['Study at mid night']);
  let [inputText,setInputText]=useState('');

  let handleTask=(event)=>{
       setTask([...task,inputText]);
       setInputText('')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:30,fontWeight:500,color:'red'}}>Task-List</Text>
       <TextInput style={styles.input} 
        placeholder='Enter your task' value={inputText} onChangeText={(text)=>setInputText(text)} ></TextInput>
       <Button title='SubmitTask' onPress={handleTask} style={{fontSize:20,fontWeight:400,paddingVertical:20}}></Button>

       <View>
        {task.map((ele)=>{
          return <Text style={{fontSize:20,fontWeight:500,color:'blue'}}>{`-> ${ele}`}</Text>
        })}
       </View>
    </SafeAreaView>
  )
}

export default TextInputAndroid;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    gap:20
  },
  input:{
    borderWidth:2,
    width:'60%',
    paddingVertical:10,
    borderColor:'black',
    fontSize:20,
    fontWeight:400
  }
})
