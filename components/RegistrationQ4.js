import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import {  useRoute } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

export default function RegistrationQ4() {
  const navigation = useNavigation();

  const handlePress2 = () => {
    navigation.navigate('RegistrationQ3');
  };
  const route = useRoute();
  const { username, childname } = route.params || {};
  const handlePress5 = () => {
    navigation.navigate('RegistrationQ5',  { username, childname } );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../assets/back/registrationQ4Img.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <View style={styles.top}>
              <TouchableOpacity style={[globalStyles.buttonBackArrow]} onPress={handlePress2}>
                <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
              </TouchableOpacity>
              <ProgressBar step={4} totalSteps={5} />
            </View>
            <Text style={[globalStyles.bigButtonText1, { marginBottom: 24 }]}>Add a photo of your child</Text>
            <View style={{ marginBottom: '20%' }}>
              <View style={styles.babyBoy}>
                <Image source={require('../assets/icons/babyboyIcon.png')} style={{ width: 186, height: 186 }} />
              </View>
              <TouchableOpacity
                style={[
                  globalStyles.buttonBackArrow,
                  { width: 44, height: 44, position: 'absolute', bottom: 0, right: -10, elevation: 15 },
                ]}
                onPress={handlePress2}
              >
                <Image source={require('../assets/icons/plusIcon.png')} style={{ width: 36, height: 36 }} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[globalStyles.buttonNext, { marginBottom: 15 }]} onPress={handlePress5}>
              <Text style={globalStyles.bigButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyles.buttonNext, { marginBottom: 71, backgroundColor: '#5CA6CE' }]} onPress={handlePress5}>
              <Text style={globalStyles.bigButtonText}>Skip</Text>
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
    width: '100%',
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
    flexDirection:'row',
    alignItems:'center',
  },
  babyBoy: {
    width: 256,
    height: 256,
    backgroundColor: 'white',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
