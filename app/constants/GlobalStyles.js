import React, {Component} from "react";
import { StyleSheet, Platform, StatusBar } from 'react-native';

const globalStyles = StyleSheet.create({
    primaryText: {
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    navBarView: {
        height: Platform.OS === 'ios'? 64 : 54,
        backgroundColor: "#f8f9f9",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#b2b2b2',
        borderBottomWidth: 1
    },
});

export const highlightColor = '#bcbcbc';

export default globalStyles;