import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, } from 'react-native';
import globalStyles from './GlobalStyles';
import { useNavigation } from '@react-navigation/native';

export default function VideoCard({ imageSource, title, duration, views }) {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('VideoPage');
      };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
            <Image source={imageSource} style={styles.image} />
            </TouchableOpacity>
           <View style={styles.name}>
                <Text style={styles.title}>{title}</Text>
                <Text style={globalStyles.smallGreyText}>{duration} · {views} views</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        width: 297,
        height: 'auto',
        alignItems: 'flex-start',
        marginRight: 20,
    },
    image: {
        width: 302,
        height: 213, 
        resizeMode: 'cover',
        borderRadius: 10,
    },
name:{
  flex:1,
  flexDirection: 'column',
    width: 236,
    height: 75,
    flexShrink: 0,
    
},
title:{
    color: 'black',
    fontFamily:'RadioCanada',
    fontSize: 20,
    width:319
},



});