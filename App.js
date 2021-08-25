import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack  from "./navigate";

const fonts = () => Font.loadAsync({
  'p-el': require('./assets/fonts/Poppins-ExtraLight.ttf'),
  'p-t': require('./assets/fonts/Poppins-Thin.ttf')
});

export default function App(){
  const [font, setFont] = useState(false)

  if(font) {
    return (
        <MainStack />
    );
  } else {
    return(
    <AppLoading

        />
    );
  }
}

const styles = StyleSheet.create({

});
