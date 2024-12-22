import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { color } from '../../styles/Theme';
import Constants from '../../styles/Constants';

const Login = () => {
    const navigation = useNavigation();

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View></View>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({

})

export default Login;