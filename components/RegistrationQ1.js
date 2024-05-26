import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function RegistrationQ1() {
  const navigation = useNavigation();

  const handleCrossIconPress = () => {
    navigation.goBack();
  };

  const [isBoyPressed, setIsBoyPressed] = useState(false);
  const [isGirlPressed, setIsGirlPressed] = useState(false);

  const handlePress3 = () => {
    setIsBoyPressed(true);
    setIsGirlPressed(false);
  };

  const handlePress4 = () => {
    setIsBoyPressed(false);
    setIsGirlPressed(true);
  };

  const handlePress5 = () => {
    navigation.navigate('RegistrationQ2');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../assets/back/registrationQ1Img.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <View style={styles.top}>
              <TouchableOpacity style={[globalStyles.buttonBackArrow]} onPress={handleCrossIconPress}>
                <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
              </TouchableOpacity>
            </View>
            <Text style={[globalStyles.bigButtonText1, { paddingBottom: '15%' }]}>Select your baby's gender</Text>
            <View style={styles.buttonsGender}>
              <TouchableHighlight
                style={[globalStyles.buttonGender, { backgroundColor: isBoyPressed ? '#007EB1' : '#5CA6CE' }]}
                onPress={handlePress3}
              >
                <View style={{ alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                  <Image source={require('../assets/icons/boyIcon.png')} style={{ width: 66, height: 66 }} />
                  <Text style={globalStyles.editButtonText}>A boy</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={[globalStyles.buttonGender, { backgroundColor: isGirlPressed ? '#EA6448' : '#FFC4BC' }]}
                onPress={handlePress4}
              >
                <View style={{ alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                  <Image source={require('../assets/icons/girlIcon.png')} style={{ width: 60, height: 79 }} />
                  <Text style={globalStyles.editButtonText}>A girl</Text>
                </View>
              </TouchableHighlight>
            </View>
            <TouchableOpacity style={[globalStyles.buttonNext]} onPress={handlePress5}>
              <Text style={globalStyles.bigButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  top: {
    paddingTop: '10%',
    paddingLeft: 35,
    width: '100%',
    paddingBottom: '10%',
  },
  buttonsGender: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    paddingBottom: '15%',
  },
});

