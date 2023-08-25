import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { createTable, readData } from '../sqliteServices/Sqlite';

const UserScreen = ({navigation}) => {
  const [data,setData] = useState([])
 
const useData =async () =>{
 try {
  const value =  await readData();
  setData(value)
 } catch (error) {
  console.log("error, ", error)
 }
}


  useEffect(()=>{
    createTable()
   useData()
  },[])
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item})=> (
          <UserCard
            address={item.user_address}
            name={item.user_name}
            email={item.user_email}
            navigation={navigation}
            id={item.user_id}
          />
        )}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('EditScreen', {
              name:'',
              email:'',
              address:'',
              id:0
            })} ><Text style= {styles.text}>Add new user</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    text:{
fontSize:20, padding: 10,
backgroundColor:'purple',
width: '40%',
borderRadius: 10,
marginTop: '120%',
marginLeft: '50%',
textAlign: 'center'
    }
})

export default UserScreen;
