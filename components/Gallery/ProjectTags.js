import React, { Component } from 'react';
import { View, Text, ScrollView, Image,StyleSheet } from 'react-native';
import Separator from '../Layout/Separator'

export default class ProjectTags extends Component {

    render() {
        let tags = this.props.tags.map(
            (tag) =>
            {
                return(
                <View>
                    <Text style={styles.tagHeader}>{tag.Header}></Text>
                    <Separator height={0.5} style={{borderBottomColor:'white', marginTop:3, marginBottom:3}}/>
                    <Text style={styles.tagDescription}>{tag.Tag}></Text>
                </View>
                
            );
            }
        );
        
        return (
                    <View>
                    {tags}
                    </View>
        )
    }
}


const styles = StyleSheet.create({
    tagHeader:{
        fontWeight: '400',

    }, paragraphSeperator:
    {
        marginTop : 5,
        marginBottom:5, 
        borderBottomColor:'white'
    }
});