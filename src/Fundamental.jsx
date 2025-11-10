import { StyleSheet, Text, View ,Image, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native'

const Fundamental = () => {
  return (
    <SafeAreaView style={{height:'100%', width:'100%',backgroundColor:"black",gap:20,padding:10}} >

      <Text style={[styles.TextColor,{fontSize:20,fontWeight:500}]}>App</Text>
      <Text style={[styles.TextColor,{fontSize:20,fontWeight:500}]}>App</Text>

      <Image style={{height:200,width:400,marginTop:10}}
       source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"}}/>

       <Button title='Click' onPress={()=>Alert.alert("button is presed!!")} ></Button>

       <TouchableOpacity style={{padding:10,backgroundColor:"green",alignItems:'center'}} onPress={()=>Alert.alert("button is presed!!")}><Text style={{fontSize:20,fontWeight:400}}>Press to show</Text></TouchableOpacity>

        <TouchableHighlight
        style={{padding:10,backgroundColor:"yellow",alignItems:'center'}}
         onPress={() => Alert.alert("button is clicked!!")}
         >
        <Text style={{fontSize:20,fontWeight:400}}>Pls Click to Enter</Text>
       </TouchableHighlight>

       <Pressable
       style={styles.BtnDesign}
       onPress={()=>Alert.alert("Clicked!!")}
       > <Text style={{fontSize:18,fontWeight:'500'}}>Clicked it!!</Text>
       </Pressable>

    </SafeAreaView>
  );
}

export default Fundamental;

const styles = StyleSheet.create({
  TextColor:{
    color:'white'
  },
 BtnDesign:{
  borderWidth: 4,
  borderColor: 'red',
  borderRadius: 15,
  backgroundColor:'pink',
  paddingVertical:8,
  alignItems:'center'
}

})