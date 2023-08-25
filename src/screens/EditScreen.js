import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {saveData, updateData} from '../sqliteServices/Sqlite';
import {useNavigation} from '@react-navigation/native';
const EditScreen = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.name;
  const email = route.params.email;
  const address = route.params.address;
  const id = route.params.id;
  console.log("ID: ", id)
  const [fullName, setFullName] = useState(name);
  const [mail, setMail] = useState(email);
  const [add, setAdd] = useState(address);

  const handleSave = () =>{
    if(fullName==''||mail==''||add==''){
      saveData(fullName, mail, add,navigation)
    }else{
      updateData(fullName, mail, add,id,navigation)
    }
  }
  

  return (
    <View>
      <TextComponenet
        placeholder="Enter name"
        setValue={setFullName}
        value={fullName}
      />
      <TextComponenet
        placeholder="Enter Email"
        setValue={setMail}
        value={mail}
      />
      <TextComponenet
        placeholder="Enter address"
        setValue={setAdd}
        value={add}
      />
      <Button
        title="Save user"
        color={'purple'}
        onPress={() => {
          handleSave()
        }}
      />
    </View>
  );
};

export default EditScreen;

const TextComponenet = ({value, setValue, placeholder}) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={text => setValue(text)}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 10,
  },
});
