import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Home</Text>
      <Button title='Profile' onPress={()=> navigation.navigate('Profile',{id:1,name:"Monu-Chauhan"}) }/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
       container:{
        height:'100%',
        widht:'100%',
        justifyContent:'center',
        alignItems:'center',

       }
})