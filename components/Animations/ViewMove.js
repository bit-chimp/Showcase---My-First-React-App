import React, { Component } from 'react';
import { Button, Text, Animated, View, Easing } from 'react-native';

import PropTypes from 'prop-types';

export default class ViewScale extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentValue: props.startValue ? new Animated.Value(props.startValue) : new Animated.Value(0),
            targetValue: props.targetValue ? new Animated.Value(props.targetValue) : new Animated.Value(0),
            delay: props.delay ? props.delay : 0,
            easing: props.easing ? props.easing : Easing.bounce,
            duration: props.duration ? props.duration : 0
        }

    }


    Show() {
        Animated.spring(
            this.state.currentValue,
            {
                duration: this.props.duration,
                delay: this.props.delay,
                easing: this.props.easing,
                toValue: this.props.targetValue
            }
        ).start();
    }

    componentWillUpdate(nextProps, nextState) {
        this.Show();
    }



    render() {

        return (
            <Animated.View style={[{ position: 'absolute', flex: 1, left: this.state.currentValue, right: 0, bottom: 0, top: 0 }]}>
                {this.props.children}
            </Animated.View>

        )
    }
}

ViewScale.propTypes =
    {
        startValue: PropTypes.number,
        targetValue: PropTypes.number,
        easing: PropTypes.number,
        duation: PropTypes.number,
    }
