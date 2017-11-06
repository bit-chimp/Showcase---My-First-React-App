import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import ProjectTags from './ProjectTags';
import Separator from '../Layout/Separator';
import Article from '../Layout/Article';
import PageStyles from '../../styles/PageStyles'

export default class ProjectArticle extends Component {

    static TagHeaders = ["Title", "Description", "Platforms", "Technology"];

    constructor(props) {
        super();
 

        this.IterateImage =  this.IterateImage.bind(this);
        this.ChangeImage =  this.ChangeImage.bind(this);
        this.SetInterval =  this.SetInterval.bind(this);

        let tagObjects = this.GetTags(props); //Header, Tag

        this.state = { imageID: 0, tags: tagObjects};
    
    }

    componentDidMount()
    {
        this.SetInterval(7000);        
    }


    GetTags = (props) => {

        var tagsBefore = props.projectData.tags.split(",");
        var tagsAfter = [];
        
        for (var i = 0; i < tagsBefore.length; i++) {
            var tagObj = {};
            tagObj.Header = ProjectArticle.TagHeaders[i];
            tagObj.Tag = tagsBefore[i];
            tagsAfter.push(tagObj);
        }
        

        return tagsAfter;
    }


    ChangeImage() {

        let currentID = this.state.imageID + 1;


        if (currentID < 0 || currentID >= this.props.projectData.imagePaths.length) {
            currentID = 0;
        }

        this.setState({ imageID: currentID });
    }


    IterateImage() {
        this.ChangeImage();

        clearInterval(this.state.intervalID);
        this.SetInterval(7000);
    }

    SetInterval(time)
    {
        intervalID = setInterval(this.ChangeImage, time);
        this.setState({intervalID : intervalID });
    }




    render() {

        return (

            <View style={{ height: 400 }}>

                <TouchableWithoutFeedback onPress={this.IterateImage}>
                    <View style={{ flex: 2 }}>
                        <Image source={{ uri: this.props.projectData.imagePaths[this.state.imageID] }} style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain', margin: 20 }} />
                    </View>
                </TouchableWithoutFeedback>

                <ScrollView horizontal={true} snapToAlignment={'center'} decelerationRate={0} snapToInterval={Dimensions.get('window').width}>

                    <Article style={[styles.projectArticle]}>

                    <View style={{height:30, flexDirection:'row'}}>
                        <Text style={styles.projectArticleHeader}>{this.state.tags[0].Tag}</Text>
                        <View style={styles.projectArticleSide}>
                            <Text style={{color:'snow',fontSize:14}}>{this.state.tags[2].Tag}</Text>
                        </View>
                    </View>

                <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                        <Separator height={0.5} style={[{flex:1},styles.paragraphSeperator]} />
                        <Text style={[{flex:3},styles.projectArticleDescription]}>{this.state.tags[1].Tag}</Text>
                        <Separator height={0.5} style={[{flex:1},styles.paragraphSeperator]} />
                        </View>

                    </Article>

                </ScrollView >

            </View>
        )
    }
}

const styles = StyleSheet.create({
    projectArticle: {
        padding: 5,
        width: Dimensions.get('window').width - 20,
        flex: 1,
        backgroundColor: '#767a82'
    },
    projectArticleHeader:
    {
        flex:1,
        color: 'white',
        fontWeight: "500",
        fontSize: 18,
        justifyContent:'flex-start',
        marginLeft:5,
        marginTop:5
    },
     projectArticleDescription:
    {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'snow',
        paddingLeft: 15,
        paddingRight: 15
    }, 
    paragraphSeperator:
    {
        marginTop : 5,
        marginBottom:5, 
        borderBottomColor:'white'
    },
    projectArticleSide:
    {
        flex:1,
        alignItems: 'flex-end',
        marginRight:5,
        marginTop:5
    }
});

