
import React, { Component } from 'react';
import { View } from 'react-native';


export default class Display extends Component {
    

    render() {
        if (this.props.show) {
            return (<View>{this.props.children}</View>)
        } else {
            return (<View></View>);
            
        }
    }

}
