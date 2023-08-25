import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { deleteUser, updateData } from '../sqliteServices/Sqlite';

const UserCard = ({name, email, address, navigation,id}) => {
  return (
    <View style={styles.constainer}>
      <View>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Address: {address}</Text>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity
          onPress={() =>
            { 
              navigation.navigate('EditScreen', {
              name,
              email,
              address,
              id
            })
            
          }
          }>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{deleteUser(id)}} >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#e1e6e5',
    padding: 5,
  },
  touchable: {},
  text: {
    fontSize: 18,
    margin: 5,
  },
  view2: {
    flexDirection: 'row',
    margin: 20,
    gap: 200,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
  },
});
