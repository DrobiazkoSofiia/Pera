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
  const handlePress3 = () => {
    navigation.navigate('SignUp');
  };
  const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
    <TouchableOpacity onPress={handlePress33} style={[globalStyles.button, style]}>
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const handlePress1 = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back/welcomeImg.png')} style={styles.imageBackground}>
       <View style={{backgroundColor:'white', width:387,height:595, borderRadius:20, paddingTop:31, paddingLeft:19, alignItems:'center', paddingRight:10, elevation:5 }}>
       <Text style={[globalStyles.welcome, {alignSelf:'flex-start', marginBottom:22, paddingLeft:13 }]}>Welcome</Text>
       <TextInputField
        placeholder="Email"
        value={text1}
        onChangeText={setText1}
        style={[styles.customInputStyle, {marginBottom:21 }]}
        icon={require('../assets/icons/emailIcon.png')}
      />
      <TextInputField
        placeholder="Password"
        value={text2}
        onChangeText={setText2}
        style={[styles.customInputStyle, {marginBottom:20 }]}
        icon={require('../assets/icons/passwordIcon.png')}
      />
      <TouchableOpacity style={{marginBottom:32}} onPress={handlePress1} >
    <Text style={{color:'#007EB1', paddingLeft:'50%', paddingRight:24, fontSize:16, fontFamily: 'RadioCanada',}}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginBottom:29, alignItems:'center'}}>
          <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Sign In" />
      </View>
      <Text style={[globalStyles.productIngridients,{marginBottom:27}]}>or sign in with</Text>
      <View style={{marginBottom:10, flexDirection:'row', gap:5}}> 
          <TouchableOpacity onPress={() => console.log('Mastercard pressed')}><Image source={require('../assets/facebookImg.png')}/></TouchableOpacity> 
          <TouchableOpacity onPress={() => console.log('Paypal pressed')}><Image source={require('../assets/google1Img.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Apple pressed')}><Image source={require('../assets/apple1Img.png')}/></TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row', alignItems:'center', gap:5  }}> 
       <Text style={[globalStyles.productIngridients1]}>Don’t have an account?</Text>
       <TouchableOpacity onPress={handlePress3}>
    <Text style={{color:'#007EB1',  fontSize:20, fontFamily: 'RadioCanada'}}>Sign Up</Text>
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
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50, // Adjust as needed
  },
  customInputStyle: {
    width: '90%',
  },
});
