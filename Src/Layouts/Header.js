import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import Step1 from '../CandidateProcess/Step1.js';
import Step2 from '../CandidateProcess/Step2.js';
import {Step3} from '../CandidateProcess/Step3.js';
import {Step4} from '../CandidateProcess/Step4.js';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Dashboard from '../Dashboard/Dashboard';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function LoadDashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Dashboard/>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (

    <View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator   drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Candidate Process" component={Step1} /> 
      <Drawer.Screen name="Logout" component={Step2} /> 

      {/* <Drawer.Screen name="SubItem1" component={SubItem1Screen} />
          <Drawer.Screen name="SubItem2" component={SubItem2Screen} /> */}

      {/* <Drawer.Screen name="Step 1" component={Step1} />  */}
      {/* <Drawer.Screen name="Step 2" component={Step2} /> 
      <Drawer.Screen name="Step 3" component={Step3} /> 
      <Drawer.Screen name="Step 4" component={Step4} />  */}


    </Drawer.Navigator>
  );
}

export default function Header() {
    return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
    );
}

// export default Header;



// // The Header creates links that can be used to navigate
// // between routes.
// const Header = () => (
// //   <header>
// //     <nav>
// //       <ul>
// //         <li><Link to='/'>Dashboard</Link></li>
// //         <li><Link to='/CandidateProcess'>Candidate Process</Link></li>
// //         <li><Link to='/Help'>Help / FAQ</Link></li>
// //       </ul>
// //     </nav>
// //   </header>

// <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer> 
// )

// export default Header;
