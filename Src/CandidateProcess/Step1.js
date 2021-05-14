import React, { Component ,useEffect,useState} from 'react'
import { StyleSheet,View, Text, Alert, Button, TextInput, TouchableOpacity,StatusBar,Image ,ImageBackground} from 'react-native';
import Header from '../Layouts/Header.js';
class Step1 extends Component {

    constructor(props) {
        super();
    }


    state = {
        data:''
        // Name: '',
        // Gender:'',
        // AadharNumber:'',
        // DOB:''
}



componentDidMount = () => {
    //     // write your code here, it's like componentWillMount
    //     onScreenLoad();
    // }, [])

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          "candId": "21"//this.state.username
        });
  
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
        fetch("https://localhost:44372/users/Step1", requestOptions)
          .then(response => response.json())
          .then(data => 
            
            {

                console.log(data);
            this.setState({ 
                data:data
            //     Name: data.Name,
            // Gender : data.Gender,
            // AadharNumber : data.AadharNumber,
            // DOB:data.DOB
            });
          });
      }
    


  render() {

    return(  
        <View>
        <Header/>    
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>        
            <Text>Candidate Name  {this.state.data.name}</Text>
        </View>
    </View>
    );
    }
}
export default Step1;