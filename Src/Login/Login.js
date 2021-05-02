import React, { Component } from 'react'
import { View, Text, Alert, Button, TextInput, TouchableOpacity } from 'react-native';
// import Home from './Home';
  class Login extends Component {
  state = {
    username: '',
    password: '',
    auth_token: '',
    token: ''
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
        alert("You have succesfully signed up");

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
          alert("You have succesfully signed up");

        });

    }
    else {
      alert('please enter user name and password');
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
        <View>
          <Text>Login Successful</Text>
        </View>
      );
    }
  }
}

export default Login;