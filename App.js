import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditScreen from './src/screens/EditScreen';
import UserScreen from './src/screens/UserScreen';
import BackgroundTimer from 'react-native-background-timer';
const Stack = createNativeStackNavigator();

const App = () => {
  //   console.log('starting background timer');
//   BackgroundTimer.start();
//   // start interval loop
//   let i = 0;
//   setInterval(function () {
//      i++;
//      console.log('timer is now at increment ' + i);

//      // manually stop the process after one minute
//      if (i === 20) {
//        BackgroundTimer.stop();
//      }
//    }, 3000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'UserScreen' component={UserScreen}/>
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
