
//************************************* FlatList into the react-native  ********** */

import {View,StyleSheet,Text,Image, FlatList} from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const FlatListAndroid=()=>{


  return(
 <SafeAreaView style={styles.container}>

   <Text>hello every one!!</Text>

   <FlatList
   data={users}
   renderItem={({item})=>(

    <View style={styles.card}>
    <Image style={{height:80,width:80,borderWidth:1,borderRadius:50}}
    source={{uri:'https://shorturl.at/fCALI'}} />
    <Text>{item.name}</Text>
    <Text>email</Text>
   </View> 
  
   ) }
   ItemSeparatorComponent={<View style={{height:10}}/>}
   keyExtractor={(item)=>item.id}
   numColumns={2}
   columnWrapperStyle={{gap:10}}
  //  horizontal
    
   >

   </FlatList>

   

  </SafeAreaView>
  );
}

export default  FlatListAndroid;

const styles=StyleSheet.create({
   container:{
     height:'100%',
     width:'100%',
     backgroundColor:'#dadada',
    paddingVertical:10,
    paddingHorizontal:15
   },
   card:{
     height:150,
     width:120,
     borderRadius:15,
     backgroundColor:'white',
     alignItems:'center',
     justifyContent:'center',
    //  marginLeft:10
   }
});

  const users = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Rohit Singh",
    email: "rohit.singh@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 7,
    name: "Manish Yadav",
    email: "manish.yadav@example.com",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 8,
    name: "Riya Soni",
    email: "riya.soni@example.com",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 9,
    name: "Karan Mehta",
    email: "karan.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 10,
    name: "Anjali Rao",
    email: "anjali.rao@example.com",
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 11,
    name: "Deepak Chauhan",
    email: "deepak.chauhan@example.com",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 12,
    name: "Swati Mishra",
    email: "swati.mishra@example.com",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 13,
    name: "Vikram Jha",
    email: "vikram.jha@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 14,
    name: "Divya Sharma",
    email: "divya.sharma@example.com",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 15,
    name: "Harsh Raj",
    email: "harsh.raj@example.com",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 16,
    name: "Shreya Singh",
    email: "shreya.singh@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 17,
    name: "Akash Verma",
    email: "akash.verma@example.com",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: 18,
    name: "Kajal Jain",
    email: "kajal.jain@example.com",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    id: 19,
    name: "Saurabh Gill",
    email: "saurabh.gill@example.com",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    id: 20,
    name: "Pooja Chauhan",
    email: "pooja.chauhan@example.com",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  }
];
