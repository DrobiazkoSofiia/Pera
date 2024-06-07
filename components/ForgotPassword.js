import React, { useState } from 'react';
import { StyleSheet, View, Button, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import TextInputField from './TextInputField';

export default function ChildProfileSuccess() {
  const navigation = useNavigation();
  const handlePress33 = () => {
    navigation.navigate('Home');
  };
  const handlePress4 = () => {
    navigation.navigate('Welcome');
  };
  const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
    <TouchableOpacity onPress={handlePress33} style={[globalStyles.button, style]}>
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
  const [text1, setText1] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back/welcomeImg.png')} style={styles.imageBackground}>
       <View style={{backgroundColor:'white', width:387,height:601, borderRadius:20, paddingTop:31, paddingLeft:19, alignItems:'center', paddingRight:10, elevation:5,     elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3, }}>
              <TouchableOpacity style={[globalStyles.buttonBackArrow, {alignSelf:'flex-start', marginBottom:24}]} onPress={handlePress4}>
                <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
              </TouchableOpacity>
       
       <Text style={[globalStyles.textForgotPassword, {alignSelf:'flex-start', marginBottom:16, paddingLeft:13 }]}>Enter your email address</Text>
       <Text style={[globalStyles.smallBlackText, {alignSelf:'flex-start', marginBottom:41, paddingLeft:13, width:340}]}>Enter the email associated with your account and we'll send an emai with instructions to reset your password</Text>
       <TextInputField
        placeholder="Email"
        value={text1}
        onChangeText={setText1}
        style={[styles.customInputStyle, {marginBottom:32 }]}
        icon={require('../assets/icons/emailIcon.png')}
      />
      <View style={{ flexDirection: 'row', marginBottom:62, alignItems:'center'}}>
          <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Continue" />
      </View>
      <TouchableOpacity style={{marginBottom:76, alignSelf:'flex-start'}} onPress={handlePress4}>
        <Text style={{color:'#007EB1', paddingLeft:13, paddingRight:24, fontSize:20, fontFamily: 'RadioCanada'}}>Return to sign in</Text>
      </TouchableOpacity>
       </View>
       
      </ImageBackground>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
  },
  customInputStyle: {
    width: '90%',
  },
});
