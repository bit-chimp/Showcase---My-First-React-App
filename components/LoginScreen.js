

import React, { Component } from 'react';

import { Animated, View, Text, Button, StyleSheet } from 'react-native';
import App from '../../App';

import SimpleLogin from './Login/SimpleLogin';
import ViewScale from './Animations/ViewScale'

export default class LoginScreen extends Component {

    render() {

        return (
            <ViewScale duration={500} style={style.backgroundContainer}>

                <ViewScale duration={500} style={style.titleContainer} delay={600}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Simon's Porfolio </Text>
                </ViewScale>

                <ViewScale duration={500} style={style.loginContainer} delay={1000}>
                    <SimpleLogin onLogin={this.OnLogin.bind(this)} />
                </ViewScale>

            </ViewScale>
        )
    }


    OnLogin() {
        this.props.onLogin();
    }
}


const style = StyleSheet.create({

    backgroundContainer: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        flex: 1,
    }

});