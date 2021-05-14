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
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View>
            <Text  >Welcome</Text>
            <Button onPress={AsyncStorage.clear()}>
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
