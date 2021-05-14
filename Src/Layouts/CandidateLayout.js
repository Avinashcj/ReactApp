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