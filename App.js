import React, { useEffect } from 'react'
import { Alert, Button, StyleSheet, Text, View} from 'react-native'
import BackgroundTimer from 'react-native-background-timer'
import PushNotificationIOS from '@react-native-community/push-notification-ios';



const App = ()=>{

  console.log('starting background timer');
  BackgroundTimer.start();
  // start interval loop
  let i = 0;
  setInterval(function () {
     i++;
     console.log('timer is now at increment ' + i);
    
     // manually stop the process after one minute
     if (i === 20) {
       BackgroundTimer.stop();
     }
   }, 3000);
  return(
    <View>
      <View style = {styles.text} ><Button
          title="Read results from AsyncStorage"
          onPress={async () => {
           
          }}
        /></View>
      </View>
  )
}
export default App;

const styles = StyleSheet.create({
  text:{
    fontSize:50,
    marginTop:50
  }
})
