import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import App from '../../App';

import ViewScale from './Animations/ViewScale'
import Article from './Layout/Article';
import ProjectArticle from './Gallery/ProjectArticle';
import styles from '../styles/PageStyles'
import Separator from './Layout/Separator';


export default class GalleryScreen extends Component {

    static navigationOptions = {
        tabBarLabel: 'Gallery',
    };

    constructor() {
        super();

        this.state = { projectData: [] };

        this.LoadProjectData();
    }



    render() {
        if (this.state.projectData.length > 0) {
            let projects = this.state.projectData.map((data) => {
                return (
                    <View key={data.key} style={{ flex: 1 }}>
                        <ProjectArticle projectData={data} style={{ flex: 1, padding: 10 }} />
                        <Separator height={3} style={{ borderBottomColor:'snow', marginTop: 5, marginBottom: 20 }} />
                    </View>
                );
            })

            return (
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ backgroundColor: 'powderblue', flex: 0 }}>
                        {projects}
                    </ScrollView >
                </View>
            )

        } else {
            return (<View></View>)
        }


    }



    LoadProjectData() {
        fetch("http://188.226.129.131/myapp/data/my_projects_data.json").
            then((response) => response.json()).
            then(this.OnReceivedProjectData).
            catch((error) => { console.log("Error on server " + error) });
    }


    OnReceivedProjectData = (json) => {
        this.setState({ projectData: json.projects });
    }


}
