import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Homepage } from "./src/screens"
import Menu from './src/screens/menu';
import About from './src/screens/about';
//Bottom Tab
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialBottomTabNavigator();


export default function App() {

  const [fontsLoaded, setFontLoad] = useState(false)

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Mont': require('./assets/fonts/Montserrat-SemiBold.ttf')
      }).then(() => {
        setFontLoad(true);
      })
    })();
  }, [])


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Home" component={Homepage} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});