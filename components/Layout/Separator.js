
import React, { Component } from 'react';
import { View } from 'react-native';


export default class Separator extends Component {


    render() {
        return (<View style={[{ flexShrink: 1, height: this.props.height, borderBottomWidth: this.props.height, borderBottomColor: 'black' }, this.props.style]}></View>)
    }

}
