import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function Intro1() {
  const navigation = useNavigation();
  const handlePress1 = () => {
    navigation.navigate('Intro2');
  };
  const handlePress2 = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/back/intro1Img.png')}
        style={styles.imageBackground}
      >
        <View style={styles.content}>
          <Text style={[globalStyles.bigButtonText1, { paddingTop: 672, marginBottom: 33 }]}>
            Enter your baby’s details
          </Text>

          <View style={[styles.buttonsContainer]}>
            <TouchableOpacity style={globalStyles.skipText} onPress={handlePress2}>
              <Text style={globalStyles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.buttonBackArrow} onPress={handlePress1}>
              <Image source={require('../assets/icons/arrowForwardIcon.png')} style={{ width: 46, height: 46 }} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 213,
    alignItems: 'center',
  },
});
