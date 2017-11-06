
import React, { Component } from 'react';
import { View, TouchableHighlight, Linking, Text, Image } from 'react-native';


export default class LinkButton extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <View>
                <TouchableHighlight onPress={this.OnClick.bind(this)}>
                    {this.props.passedChild}
                </TouchableHighlight >
            </View>
        )

    }


    OnClick() {
        Linking.openURL(this.props.link);
    }

}
