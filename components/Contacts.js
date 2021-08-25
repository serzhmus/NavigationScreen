import React from 'react';
import {Button, StyleSheet, Text, View,} from 'react-native';
import { gStyle } from "../styles/style";

export default function Contacts({ navigation }) {

    const loadScene =() => {
        navigation.canGoBack();
    }

    return (
        <View style={gStyle.main}>
            <Text> style={gStyle.title}>Контакты</Text>
            <Button title='Открыть страницу ' onPress={loadScene} />
        </View>
    );
}

const styles = StyleSheet.create({

});

