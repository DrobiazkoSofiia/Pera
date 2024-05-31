import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderPayment from '../components/HeaderPayment';

export default function PaymentOrder() {
  const navigation = useNavigation();

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderPayment />
        <View style={styles.content}>
          <View style={styles.top}>
          <TouchableOpacity
          style={[styles.buttonPayment, selectedButton === 'card' && styles.selectedButton]}
          onPress={() => setSelectedButton('card')}
        >
          <Image source={require('../assets/icons/cardIcon.png')} style={{ marginTop: 13 }} />
          <Text style={[globalStyles.smallGreyText, { marginTop: 7 }, selectedButton === 'card' && styles.selectedButtonText]}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonPayment, selectedButton === 'cash' && styles.selectedButton]}
          onPress={() => setSelectedButton('cash')}
        >
          <Image source={require('../assets/icons/cashIcon.png')} />
          <Text style={[globalStyles.smallGreyText, selectedButton === 'cash' && styles.selectedButtonText]}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonPayment, selectedButton === 'paypal' && styles.selectedButton]}
          onPress={() => setSelectedButton('paypal')}
        >
          <Image source={require('../assets/icons/paypalIcon.png')} />
          <Text style={[globalStyles.smallGreyText, selectedButton === 'paypal' && styles.selectedButtonText]}>Paypal</Text>
        </TouchableOpacity>
          </View>
          <View style={[ selectedCard === 'master' && styles.pressedButton]}>
            <View style={[styles.card, ]}>
              <Image source={require('../assets/mastercardImg.png')} style={{width:65, height:52, marginLeft:10}}/>
              <View style={{ flexDirection: 'column', width: 170 }}>
                <Text style={globalStyles.textDietName}>MasterCard</Text>
                <Text style={globalStyles.smallBlackText}>**** 2636</Text>
              </View>
              <TouchableOpacity style={[styles.buttonCard, selectedCard === 'master' && styles.selectedButton,]}
                onPress={() => setSelectedCard('master')}>

                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems:'center', gap: 14, width:363, height:71, borderRadius:8, borderWidth:1, borderColor:'#A3A3A3', marginBottom:19 }}>
              <Image source={require('../assets/visaImg.png')} style={{width:65, height:52, marginLeft:10}}/>
              <View style={{ flexDirection: 'column', width: 170 }}>
                <Text style={globalStyles.textDietName}>Visa</Text>
                <Text style={globalStyles.smallBlackText}>**** 3256</Text>
              </View>
              <TouchableOpacity style={[styles.buttonCard, selectedCard === 'visa' && styles.selectedButton,]}
                onPress={() => setSelectedCard('visa')}>

                </TouchableOpacity>
            </View>
            <View style={{ width: 150, height: 36, backgroundColor: '#7EC845', borderRadius: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end' }}>
              <TouchableOpacity>
                <Text style={globalStyles.smallWhiteText}>Change address</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 26 }}>
            <Text style={[styles.title]}>Add Payment Method</Text>
          </View>
         
           
          <View style={{ marginBottom: 202 }}>
            <Image source={require('../assets/cardImg.png')} />
          </View>
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
    alignItems:'center',
  },
  top: {
    paddingTop: 45,
    marginBottom: 42,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:36,
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center', 
  },
  buttonPayment:{
    width:93,
    height:93,
    borderRadius:90,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#E7E7E7',
    justifyContent:'center',
    alignItems:'center'

  },
  card:{
    flexDirection: 'row',
     alignItems:'center',
      gap: 14,
       width:363,
       height:71,
        borderRadius:8,
         borderWidth:1,
          borderColor:'#A3A3A3',
           marginBottom:19,
           elevation:10,
           shadowColor:'white'
  },
  buttonCard:{
    backgroundColor:'#D8D8D8',
    width:17,
    height:17,
    borderRadius:90, 
    marginLeft:50
  },
  selectedButton: {
    backgroundColor: '#7EC845',
    borderRadius: 90,
    padding: 10,
  },
  selectedButtonText: {
    color: 'white',
  },
  shadowButton: {
    elevation: 2,
    borderRadius: 2,
    overflow: 'hidden',
    shadowColor: 'white', 
  },
  pressedButton: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});
