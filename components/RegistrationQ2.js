import React, { useState } from 'react';
import { StyleSheet, View, Button, ImageBackground, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import TextInputField from './TextInputField';

export default function RegistrationQ2() {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const handlePress2 = () => {
    navigation.navigate('RegistrationQ1');
  };
  const handlePress5 = () => {
    navigation.navigate('RegistrationQ3');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={require('../assets/back/registrationQ2Img.png')} style={styles.imageBackground} resizeMode="cover">
        <View style={styles.content}>
          <View style={styles.top}>
        <TouchableOpacity  style={[globalStyles.buttonBackArrow]} onPress={handlePress2}>
        <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
        </TouchableOpacity>
        </View>
        <Text style={[globalStyles.bigButtonText1, {marginBottom: 24}]}>What is your child's name?</Text>
        <TextInputField
        placeholder="Name"
        value={text}
        onChangeText={setText}
        style={[styles.customInputStyle, {marginBottom:'95%'}]}
      />
        <TouchableOpacity  style={[globalStyles.buttonNext, {marginBottom:71}]} onPress={handlePress5}>
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
    width:'100%'
  },
  imageBackground: {
    width: '100%', // Set the width to fill the container
    height: '100%',
  },
  content: {
    width: '100%',
    alignItems: 'center'
  },
  top:{
    paddingTop:'10%',
    paddingLeft:35,
    width:'100%',
    marginBottom: '10%',
  },
  customInputStyle: {
    width: '80%', // Customize input field width if needed
  },
});
