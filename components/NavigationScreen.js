import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

import ViewScale from './Animations/ViewScale';

import GalleryScreen from './GalleryScreen';
import { DrawerNavigator } from 'react-navigation';

const navigator = DrawerNavigator({

    Home: {
        screen: MenuScreen,
    },
    Gallery: {
        screen: GalleryScreen,
    }
});

export default class NavigationScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./notif-icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };


    render() {
        return (
            <ViewScale duration={500} style={{ backgroundColor: 'lemonchiffon', flex: 1 }}></ViewScale>
        )
    }
}

