import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import globalStyles from './GlobalStyles';

export default function HeaderOrderReviewFinish() {
  return (
    <ImageBackground source={require('../assets/back/headerOrderReviewFinishImg.png')} style={styles.imageBackground} >
            <View style={{ alignItems:'center', justifyContent:'center'}}>

        <Text style={[globalStyles.textParentProfileSuccess, {width:270}]}>Thank you for the order!</Text>
        </View>
           </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7EC845',
    width: '100%',
    height:113,
    paddingLeft: 26,
    paddingRight: 28,
    paddingTop:25,
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    
  },
 
  imageBackground: { 
    justifyContent: 'center',
    height: 186,
},
});
