import React from 'react';
import { StyleSheet, View, Button, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function ParentProfileSuccess() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HomeNotRegistered');
  };
  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back/parentProfileSuccessImg.png')} style={styles.imageBackground}>
        <View style={styles.content}>
       
        <Text style={[globalStyles.textParentProfileSuccess, {marginBottom: 91}]}>Parent profile has been created successfully!</Text>

        <View styel={styles.buttonsContainer}>
            <TouchableOpacity  style={[globalStyles.buttonParentProfileSuccess, {marginBottom:18}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Add a child</Text>
              </TouchableOpacity>
    
            <TouchableOpacity  style={[globalStyles.buttonParentProfileSuccess, {borderColor:'#7EC845', borderWidth:3, backgroundColor:'#007EB1'}]} onPress={handlePress}>
            <Text style={globalStyles.bigButtonText}>Skip</Text>
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
    width:'100%'
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  content: {
    paddingTop:400,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonsContainer:{
    justifyContent: 'center',
    alignItems: 'center',

  },
});
