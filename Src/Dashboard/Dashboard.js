import React, { Component } from 'react'
import { StyleSheet,View, Text, Alert, Button, TextInput, TouchableOpacity,StatusBar,Image ,ImageBackground} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Header from '../Layouts/Header.js';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
class Dashboard extends Component {
render() {
  // const Drawer = createDrawerNavigator();
 return(  

  <View>
 <Header/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Dashboard</Text>
        </View> 
        </View>
        
 );
 }
}




    


export default Dashboard;