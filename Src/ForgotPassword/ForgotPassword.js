import React, { Component } from 'react'
import { StyleSheet,View, Text, Alert, Button, TextInput, TouchableOpacity,StatusBar,Image ,ImageBackground} from 'react-native';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CandidateLayout from '../Layouts/CandidateLayout.js'


import { BrowserRouter } from 'react-router-dom';

class ForgotPassword extends Component {

 
  
  


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
          AsyncStorage.setItem('@storage_Key', decoded.aud)
          const value = AsyncStorage.getItem('@storage_Key')
          this.setState({FirstName:decoded.aud})
          this.username = this.state.FirstName;
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
    }
  }

  render() {
    window.name =this.username;
    //If auth token is not present
    if (this.state.token == '') {
      return (

        <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image style={styles.bakcgroundImage} source={require('../../assets/login-bg.jpg')} />
                </View>

        <View style={styles.container}>

          <ImageBackground  source={require("../../assets/login-bg.jpg")}></ImageBackground>
        <Image style={{
                // position:'initial',
                width:"228px",
                height:"100px"
              }}

           source={require("../../assets/tnsdc-logo-Admin.png")} />
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            // placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}



            placeholder="Enter User name"
                onChangeText={TextInputValue =>
                   this.setState({ username: TextInputValue })}


          />
        </View>
   
     
   
      

<TouchableOpacity  style={styles.loginBtn} onPress={this.Login.bind(this)}>
             <View>
               <Text style={styles.loginText}>
                 Submit </Text>
            </View>
         </TouchableOpacity> 
     

      









        
         </View>

         </View>
        
        
      );
    }
    /* Checking if the auth token is not empty directly sending the user to Home screen */
    else {
      return (

        <CandidateLayout FirstName={this.state.FirstName}/>
      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
 
  image: {
    marginBottom: 0,
    
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
// },
backgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}, 
bakcgroundImage: {
    flex: 1, 
    width: null, 
    height: null
},
loginButton: {
    marginBottom: 40
}
});


export default ForgotPassword;