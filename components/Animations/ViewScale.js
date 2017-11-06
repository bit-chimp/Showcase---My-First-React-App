import React, { Component } from 'react';
import { Button, Text, Animated, View, Easing } from 'react-native';

import PropTypes from 'prop-types';

export default class ViewScale extends Component {

    constructor(props) {
        super(props);

        this.state = {
            delay: this.props.delay ? this.props.delay : 0,
            scaleValue: this.props.startValue ? this.props.startValue : new Animated.Value(0),
            easing: this.props.easing ? this.props.easing : Easing.bounce,
            duration: this.props.duration ? this.props.duration : 0 
        }
    }


    Show() {
        Animated.timing(
            this.state.scaleValue,
            {
                duration: this.props.duration,
                delay: this.props.delay,
                easing: this.props.easing,
                toValue: 1
            }
        ).start();
    }

    componentDidMount() {
        this.Show();
    }

    render() {

        return (

            <Animated.View style={[this.props.style, { opacity: this.state.scaleValue }]}>
                {this.props.children}
            </Animated.View>
        )
    }
}

ViewScale.propTypes =
    {
        startValue: PropTypes.instanceOf(Animated.Value),
        easing: PropTypes.number,
        duation: PropTypes.number,
    }
