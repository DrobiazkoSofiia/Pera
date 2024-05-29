import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function MealCard({
  imageSource,
  title,
  name,
  backgroundColor,
  width,
  height,
  width1,
  height1,
  heightImg,
  widthImg,
  fontSize1,
  widthText,
  heightText,
  onButtonPress,
  titleBut, 
  meal,
  ingridients,
  smallIngridients,
  kkal,
  time,
  ageCategory,
  ageMonth,
  ageCategoryImg,
  smallProduct1,
  smallProduct2,
  smallProduct3,
  smallProduct4,

}) {
 
  const [buttonText, setButtonText] = useState(titleBut);

  const handleButtonPress = () => {
    setButtonText('✔');
    if (onButtonPress) {
      onButtonPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: width, height: height, backgroundColor: backgroundColor, alignItems: 'center', borderRadius: 20, justifyContent: 'center' }}>
        <Image source={imageSource} style={[styles.image, { width: widthImg, height: heightImg }]} resizeMode="contain" />
      </View>
      <View style={[styles.name, { width: width1, height: height1 }]}>
        <Text style={[styles.title]}>{title}</Text>
        <View style={styles.row2}>
          <Text style={[globalStyles.smallBlackText, { fontSize: fontSize1, width: widthText, height: heightText }]}>{name}</Text>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingRight: 8,
    flexShrink: 0,
    alignItems: 'center'
  },
  name: {
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    bottom: 27,
    width: 236,
    height: 75,
    flexShrink: 0,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  button: {
    alignSelf: 'flex-end',
    flex: 1,
    width: 89,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: '#7EC845',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 16,
  },
  row2: {
    flex: 2,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 2,
  },
  image: {
   
  }
});
