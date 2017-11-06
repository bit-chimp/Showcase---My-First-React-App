import React, { Component } from 'react';
import {
    Text, View, ScrollView, Image
} from 'react-native';

import ViewScale from './Animations/ViewScale';
import Separator from './Layout/Separator';
import LinkButton from './Generic/LinkButton';
import Article from './Layout/Article';

import styles from '../styles/PageStyles';


export default class AboutScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'About Me',
    };

    render() {
        return (
            <ViewScale duration={500} style={{ backgroundColor: 'lemonchiffon', flex: 1 }}>

                <ScrollView>

                    <View style={styles.pageRail}>

                        <Separator height={5} style={{ marginBottom: 5 }} />

                        <Article style={[styles.pageArticle]}>
                            <Text style={styles.articleHeader}>About Me</Text>
                            <Text style={styles.articleParagraph}>I'm a highly driven individual that can adapt to any situation regardless of the circumstances. Just tell me what needs to be done and I'll be out of your hair until it is.</Text>
                        </Article>

                        <Separator height={3} style={{ marginBottom: 5 }} />

                        <Article style={[styles.pageArticle, { flex: 1 }]}>
                            <Text style={styles.articleHeader}>What have I been doing since our last interview?</Text>
                            <Text style={styles.articleParagraph}>I spent the last week becoming further acquainted with CSS Grid and best practices for HTMl/CSS. And since yesterday have been looking into React Native, which is why I sent this application.</Text>
                        </Article>

                        <Separator height={3} style={{ marginBottom: 5 }} />

                        <Article style={[styles.pageArticle, { flex: 1 }]}>
                            <Text style={styles.articleHeader}>What I like about RightBrain</Text>
                            <Text style={styles.articleParagraph}>The employment advice that was given to me on the day of the interview (The '15 cents' as Roland put it) truly changed my perception toward a job.</Text>
                            <Text style={[styles.articleParagraph, { marginTop: 10 }]}>To be honest I was looking for a job to be able to sustain myself while I continue making games, but after that interview I realised that being a part of a small team such as RightBrain won't make it a mundane task but rather every project is an opportunity for growth for the company.</Text>
                            <Text style={[styles.articleParagraph, { marginTop: 10 }]}>I won't be viewing myself as just an entity in the company but rather a source of growth for it and that in itself gives me the satisfaction to work my *** off.</Text>
                        </Article>

                        <Separator height={3} style={{ marginBottom: 5 }} />

                        <View style={styles.socialContainer}>
                            <LinkButton link="https://www.facebook.com/vanderweelesimon" passedChild={<Image source={require('../img/facebook_icon_small.png')} style={styles.socialButton} />}></LinkButton>
                            <LinkButton link="https://twitter.com/bit_chimp" passedChild={<Image source={require('../img/twitter_icon_small.png')} style={styles.socialButton} />}></LinkButton>
                            <LinkButton link="https://github.com/bit-chimp" passedChild={<Image source={require('../img/github_icon_small.png')} style={[styles.socialButton, { width: 45, height: 45 }]} />}></LinkButton>
                        </View>


                    </View>

                </ScrollView>

            </ViewScale >
        )
    }

}


