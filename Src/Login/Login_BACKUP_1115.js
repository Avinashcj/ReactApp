import React, { Component } from 'react'
import { View, Text, Alert, Button, TextInput, TouchableOpacity } from 'react-native';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CandidateLayout from '../Layouts/CandidateLayout.js'
class Login extends Component {

  constructor(){
    super()
    this.Login = this.Login.bind(this);
    this.storeData = this.storeData.bind(this);
  }
  state = {
    username: '',
    password: '',
    auth_token: '',
    token: '',
    decodevalue: [],
    FirstName: ''

  }
  Signup = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": this.state.username,
      "password": this.state.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://localhost:44372/users/authenticate", requestOptions)
      .then(response => response.json())
      .then(data => {

        this.setState({ token: data.token });
        var token = data.token;
        var decoded = jwt_decode(token);
        alert(decoded);

      });
  }
  Login = async () => {

    if (this.state.username !== '' & this.state.password != '') {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://localhost:44372/users/authenticate", requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ token: data.token });
          var token = data.token;
          var decoded = jwt_decode(token);
          console.log(decoded.id);
          //this.storeData(this.decoded);
          AsyncStorage.setItem('@storage_Key', decoded.aud)
          const value = AsyncStorage.getItem('@storage_Key')
          this.setState({FirstName:decoded.aud})
          //alert(this.state.FirstName);

        });

    }
    else {
      alert('please enter user name and password');
    }

  }
   
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value.id)
      const value = await AsyncStorage.getItem('@storage_Key')
      alert(value);
    } catch (e) {
      // saving error
    }
  }

  render() {
    //If auth token is not present
    if (this.state.token == '') {
      return (
        <View>
          <TextInput
            placeholder="Enter User name"
            onChangeText={TextInputValue =>
              this.setState({ username: TextInputValue })}
            underlineColorAndroid='transparent'
            style={
              {
                textAlign: 'center',
                width: '90%',
                marginBottom: 7,
                height: 40,
                borderRadius: 5,
                fontSize: 20,
              }
            }
          />
          <TextInput
            placeholder="Enter password"
            onChangeText={TextInputValue =>
              this.setState({ password: TextInputValue })}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            style={
              {
                textAlign: 'center',
                width: '90%',
                marginBottom: 7,
                height: 40,
                borderRadius: 5,
                fontSize: 20,
              }
            }
          />
          <TouchableOpacity onPress={this.Signup.bind(this)}>
            <View style={{
              height: 50, backgroundColor:
                'purple', justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 20,
                color: '#FFFFFF',
              }}>
                Signup</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Login.bind(this)}>
            <View style={{
              height: 50, backgroundColor:
                'purple', justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 20,
                color: '#FFFFFF',
              }}>
                Login </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    /* Checking if the auth token is not empty directly sending the user to Home screen */
    else {
      return (
        // <Home />

        
<<<<<<< HEAD
        <View>
          <Text  >Welcome {this.state.FirstName}</Text>
         
           
              {/* <Text  onPress={alert('clicked on logout')} >
                Logout </Text> */}
          
          
        </View>
=======
        <CandidateLayout FirstName={this.state.FirstName}/>
        // <View>
        //   <Text  >Welcome {this.state.FirstName}</Text>
        // </View>
>>>>>>> de09dbb5124c0dbf9db53d9d650285b799461366
      );
    }
  }
}

export default Login;