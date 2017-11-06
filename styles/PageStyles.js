
import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        //Main 
        pageRail: {
            flex: .8,
            margin: 'auto',
        },

        //Social
        socialContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 20
        },
        socialButton: {
            width: 50,
            height: 50
        },

        //Articles 
        pageArticle: {
            flex: 1,
            padding: 10,
            margin: 5,
            backgroundColor: 'ivory',
            borderRadius:5,
        },
        pageArticleDark:{

        },
        articleHeader: {
            flexShrink: 1,
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            fontWeight: 'bold',
            color: 'orange',
            fontSize: 20,
            marginBottom: 10,
        },
        articleParagraph: {
            flexShrink: 1,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontSize: 15,
        },
        //Headline
        headlineContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headlineText:
        {
            fontSize: 25,
            color: 'white',
            fontFamily: "sans-serif",
        }
    }
)