import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import Display from '../Generic/Display';

const timer = null;

export default class SimpleLogin extends React.Component {


    constructor() {
        super();
        this.state = {
            username: 'Username',
            password: 'Password',
            loginData: {
                errorText: "",
                displayError: false
            }
        };

        //Bindings (Can also use ES6 fat arrows)
        this._DisplayTextNotification.bind(this);
        this.AttemptLogin.bind(this);
        this.OnPHPFail.bind(this);
    }



    render() {


        return (
            <View style={style.loginContainer}>

                <TextInput style={style.loginInput} value={this.state.username} onChangeText={this._onChangeUsername.bind(this)} defaultValue='Username' selectTextOnFocus={true} />
                <TextInput style={style.loginInput} value={this.state.password} onChangeText={this._onChangePassword.bind(this)} defaultValue='Password' secureTextEntry={true} selectTextOnFocus={true} />

                <Display show={this.state.loginData.displayError}>
                    <Text ref="notificationText" style={[style.loginInput, { color: 'red' }]}> {this.state.loginData.errorText}</Text>
                </Display>

                <View style={style.buttonContainer}>
                    <View style={style.button}>
                        <Button title="Create Account" onPress={this._onCreateAccountClicked.bind(this)} />
                    </View>

                    <View style={style.button}>
                        <Button title="Login" color='#bada55' onPress={this._onLoginClicked.bind(this)} />
                    </View>
                </View>

            </View>
        )
    }


    _onCreateAccountClicked() {

        var that = this;

        this.HasAccount(this.state.username, this.state.password,
            function (hasAccount) {
                if (hasAccount == false) {

                    that._DisplayTextNotification("Creating Account..", DebugEnum.Warning);
                    that.CreateAccount(that.state.username, that.state.password);

                } else {
                    that._DisplayTextNotification("User already exists!", DebugEnum.Warning);
                }
            }, this.OnPHPFail
        );
    }


    _DisplayTextNotification(text, logLevel) {
        var that = this;

        let displayBool = (text != "");
        this.setState({ loginData: { errorText: text, displayError: true } });

        if (timer != null) {
            clearInterval(timer);
        }
        timer = setTimeout(this.HideError.bind(this), 3000);
    }

    HideError() {
        this.setState({ loginData: { errorText: "", displayError: false } });
    }

    _onLoginClicked() {

        var that = this;

        this.HasAccount(this.state.username, this.state.password,
            function (hasAccount) {

                that._DisplayTextNotification("Logging in..", DebugEnum.Warning);
                that.AttemptLogin(that.state.username, that.state.password);
            }, this.OnPHPFail
        );
    }


    AttemptLogin(username, password) {
        fetch("http://188.226.129.131/myapp/php/accountLogin.php?username=" + username + "&password=" + password, {
            method: 'get'
        })
            .then((response) => response.text())
            .then(this.OnLoginSuccess.bind(this))
            .catch(this.OnPHPFail);
    }


    CreateAccount(username, password) {
        fetch("http://188.226.129.131/myapp/php/accountCreation.php?username=" + username + "&password=" + password, {
            method: 'post'
        })
            .then((response) => response.text())
            .then(() => { this._DisplayTextNotification("Account Created! Press login to... well login", DebugEnum.Warning); })
            .catch(this.OnPHPFail);
    }

    OnLoginSuccess(result) {
        if (result == true) {
            this._DisplayTextNotification("Logged in!", DebugEnum.Warning);
            clearTimeout(timer);
            this.props.onLogin();
        } else {
            this._DisplayTextNotification("Wrong user or pass?", DebugEnum.Warning);
        }
    }

    OnPHPFail(error) {
        console.log("PHP Failed. " + error);
    }


    HasAccount(username, password, OnSuccess, OnFailed) {


        fetch("http://188.226.129.131/myapp/php/verifyAccountExists.php?username=" + username, {
            method: 'get'
        })
            .then((response) => response.json())
            .then(OnSuccess)
            .catch(OnFailed);
    }




    _onChangeUsername(text) {
        this.setState({ username: text });
    }

    _onChangePassword(text) {
        this.setState({ password: text });
    }
}

var DebugEnum = Object.freeze({ Warning: 0, Error: 1 });


const style = StyleSheet.create({
    loginContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginInput: {
        width: 200,
    },
    buttonContainer:
    {
        flex: 1,
        marginTop: 15,
        flexDirection: 'row'
    },
    button:
    {
        margin: 5,
    }

});

