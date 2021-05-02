import React, { Component } from 'react'
import { View, Text, Alert, Button, TextInput, TouchableOpacity } from 'react-native';
// import { View, Text, Alert, Button, TextInput, TouchableOpacity,Header } from 'react-native';
//import { Link } from "react-router-dom";
// import { Button, Icon, Menu } from "antd";
import logo from '../../assets/tnsdc-logo1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
   class CandidateLayout extends Component {


    

render() {

  
const value = AsyncStorage.getItem('@storage_Key');
return (


        // <Header className="app-header">
          <div className="app-header__logo-search-section">
            <div className="app-header__logo">

            <img src={logo} alt="App logo" />
<View>
            <Text  >Welcome {this.props.FirstName}</Text> 
            {/* <Text>{value}</Text> */}
            </View>
             {/* <Link to="/">
                <img src={logo} alt="App logo" />
              </Link>  */}
            </div>
          </div>
        // </Header>
    
);
  }
  }
  export default CandidateLayout;