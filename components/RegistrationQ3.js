import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import globalStyles from './GlobalStyles';
import TextInputField from './TextInputField';
import {  useRoute } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

export default function RegistrationQ3() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handlePress2 = () => {
    navigation.navigate('RegistrationQ2');
  };
  const route = useRoute();
  const { username, childname } = route.params || {};


  const handlePress5 = () => {
    navigation.navigate('RegistrationQ4',  { username, childname } );
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setText(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={require('../assets/back/registrationQ3Img.png')} style={styles.imageBackground} resizeMode="cover">
          <View style={styles.content}>
            <View style={styles.top}>
              <TouchableOpacity style={globalStyles.buttonBackArrow} onPress={handlePress2}>
                <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
              </TouchableOpacity>
              <ProgressBar step={3} totalSteps={5} />
            </View>
            <Text style={[globalStyles.bigButtonText1, { marginBottom: 24, width:300 }]}>What is your child's date of birth?</Text>
            <TouchableOpacity onPress={showDatePicker} style={{width:430, marginLeft:'20%', paddingBottom: '85%'}}>
              <View pointerEvents="none">
                <TextInputField
                  placeholder="Date of birth"
                  value={text}
                  style={[styles.customInputStyle]}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyles.buttonNext, { marginBottom:'10%' }]} onPress={handlePress5}>
              <Text style={globalStyles.bigButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  top: {
    paddingTop: '10%',
    paddingLeft: 35,
    width: '100%',
    paddingBottom: '10%',
    flexDirection:'row',
    alignItems:'center',
  },
  customInputStyle: {
    width: '80%',
  },
});
