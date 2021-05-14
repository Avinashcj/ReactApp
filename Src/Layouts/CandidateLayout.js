import React, { Component } from 'react'
import { View, Text, Alert, Button, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/tnsdc-logo1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalUserName} from '../Constants/Constants.js';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Layouts/Header.js'
import Main from '../Layouts/Main.js'


class CandidateLayout extends Component {
render() 
{
return (


  <App1></App1>
//           <div className="app-header__logo-search-section">
//             <div className="app-header__logo">

//             <img src={logo} alt="App logo" />
// <View>
//             <Text  >Welcome {this.props.FirstName}</Text>  

           

//                    <BrowserRouter>
//   <App1 />
//    </BrowserRouter>

//             </View>
            
//             </div>
//           </div>
       



    
        
);

function App1() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}



  }
  }
  export default CandidateLayout;
import * as React from 'react';
import { Text, View ,Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  const value =  AsyncStorage.getItem('@storage_Key')
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View>
            <Text  >Welcome</Text>
          
             <Button onPress={alert(value)}>
              <Text>Clear Async Storage</Text>
            </Button>
    </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Logout" component={SettingsScreen}  />
    </Tab.Navigator>
  );
}

export default function CandidateLayout() {
  return (
    <NavigationContainer>
      <MyTabs  />
    </NavigationContainer>
  );
}
=======
>>>>>>> 37c4e1e2f3c41d535b41f839d3ee3e228005c8f3
