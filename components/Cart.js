import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import HeaderNewMeal from '../components/HeaderNewMeal';
import TextInputField from '../components/TextInputField';
import Slider from '@react-native-community/slider';
import HeaderCart from './HeaderCart';
import CartMeal from './CartMeal';
import globalStyles from './GlobalStyles';


export default function Cart() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderCart title={'Cart'}/>
        <View style={styles.content}>
          <View style={{gap:26, paddingTop:34, marginBottom:44}}>
          <CartMeal/>
          <CartMeal/>
          <CartMeal/>
          <CartMeal/>
          <CartMeal/>  
          </View> 
          <View style={styles.totalContainer}>
            <Text style={globalStyles.productIngridients1}>Total Payment</Text>
            <Text style={globalStyles.bigButtonText1}>€24.77</Text>
          </View>     
      <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:55, alignSelf:'center'}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Proceed to checkout</Text>
           </TouchableOpacity>
          
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  
  },
  content: {
    backgroundColor: 'white',
    bottom: 0,
    height: '100%',
    paddingHorizontal: 30,
    paddingBottom: 53,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems:'center',
    marginBottom: 44,
    
  },
  top: {
    paddingTop: 17,
    marginBottom: 8,
  },
  title: {
    color: 'black',
    fontFamily: 'Caladea-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  slider: {
    width: 341,
    height: 35,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 30,
    backgroundColor: '#007EB1',
    width: 168,
    height: 45,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  more: {
    alignItems: 'flex-end',
    paddingRight: 18,
    marginBottom: 20,
  },
  checkbox: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor:'#ECECEC'
  },
  checkedCheckbox: {
    backgroundColor: '#007EB1',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align footer to the bottom
    left: 0,
    right: 0,
    alignItems: 'center', // Align items at the center horizontally
  },
  modalView: {
    width: 373,
    height: 'auto',
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 20,
    margin: 20,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center', // Add this line to center the content vertically
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cross: {
    position: 'absolute',
    right: 25,
    top: 18,
    marginBottom: '10%',
  },
  today: {
    width: 180,
    height: 44,
    backgroundColor: '#7EC845',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meal: {
    width: 343,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 7,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 10,
  },
});

