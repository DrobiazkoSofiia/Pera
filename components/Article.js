import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import globalStyles from './GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Article({ article }) {
    const navigation = useNavigation();
    const handlePress1 = () => {
        navigation.navigate('ArticlePage');
      };
    return (
        <View style={styles.container}>
            <Image source={article.imageSource} style={styles.image} />
            <View style={styles.blueArticle}>
                <Image source={require('../assets/icons/articleIcon.png')} />
                <Text style={globalStyles.smallWhiteText}>Article</Text>
            </View>
            <View style={styles.name}>
                <Text style={globalStyles.textArticle}>{article.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        width: 297,
        height: 'auto',
        alignItems: 'flex-start',
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: 204, 
        resizeMode: 'cover',
        borderRadius: 10,
    },
    blueArticle:{
    width:100,
    height:27,
    backgroundColor:'#007EB1',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    flexDirection:'row',
    gap:3,
    postion:'absolute',
    bottom:190,
    left:15
    },
    name: {
    position:'absolute',
    bottom: 35,
    left:20   
    }
});
