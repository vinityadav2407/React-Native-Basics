import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
    let {id,name}=route.params;
      return (
    <View style={[styles.container,{gap:10}]}>
      <Text style={{fontSize:20}}>Profile</Text>
      <Text style={styles.textStyle}>id :{id}</Text>
      <Text style={styles.textStyle}>name :{name}</Text>
        <Button title='Search' onPress={()=> navigation.navigate('Search') }/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
      container:{
        height:'100%',
        widht:'100%',
        justifyContent:'center',
        alignItems:'center',

       },
       textStyle:{
        fontSize:20,
        fontWeight:'500',
        color:'red'
       }
})
