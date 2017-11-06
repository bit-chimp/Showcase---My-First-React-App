
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import styles from '../../styles/PageStyles';

export default class Article extends Component {


    render() {
        return (<View style={[styles.pageArticle,this.props.style]}>{this.props.children}</View>)
    }

}
