import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderPayment from '../components/HeaderPayment';
import { useRoute } from '@react-navigation/native';

export default function PaymentOrder() {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalPayment, selectedAddress,  username, childname, avatarSource   } = route.params;

  const handlePress1 = () => {
    navigation.navigate('OrderReview',  { totalPayment, selectedAddress,  username, childname, avatarSource  });
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderPayment title={'Payment Method'}/>
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
          <View style={{marginBottom:36}}>
          <View style={[styles.card, selectedCard === 'master' && styles.pressedButton]}>
      <Image source={require('../assets/mastercardImg.png')} style={{width:65, height:52, marginLeft:10}}/>
      <View style={{ flexDirection: 'column', width: 170 }}>
        <Text style={globalStyles.textDietName}>MasterCard</Text>
        <Text style={globalStyles.smallBlackText}>**** 2636</Text>
      </View>
      <TouchableOpacity style={[styles.buttonCard, selectedCard === 'master' && styles.selectedButton]}
        onPress={() => setSelectedCard('master')}>
      </TouchableOpacity>
    </View>

    <View style={[styles.card, selectedCard === 'visa' && styles.pressedButton]}>
      <Image source={require('../assets/visaImg.png')} style={{width:65, height:52, marginLeft:10}}/>
      <View style={{ flexDirection: 'column', width: 170 }}>
        <Text style={globalStyles.textDietName}>Visa</Text>
        <Text style={globalStyles.smallBlackText}>**** 3256</Text>
      </View>
      <TouchableOpacity style={[styles.buttonCard, selectedCard === 'visa' && styles.selectedButton]}
        onPress={() => setSelectedCard('visa')}>
      </TouchableOpacity>
    </View>
    </View>
            <View style={{ width:362, height:58, backgroundColor: '#D9D9D9', borderRadius:11, alignItems: 'flex-start', justifyContent: 'center', marginBottom:'10%' }}>
              <TouchableOpacity style={{paddingLeft:29}}>
                <Text style={globalStyles.productIngridients1}>+     Add new card</Text>
              </TouchableOpacity>
            </View>       
           
          <TouchableOpacity style={[globalStyles.buttonNext, {marginBottom:15}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Next</Text>
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
    height: '100%',
    backgroundColor:'white'
  },
  content: {
    backgroundColor: 'white',
    alignItems:'center',
    height:'100%',
    
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    width: 363,
    height: 71,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginBottom: 19,
    overflow: 'visible',
    elevation: 10, 
    shadowColor: Platform.OS === 'ios' ? 'white' : 'white',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    backgroundColor: 'white',
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
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, 
    shadowColor: Platform.OS === 'ios' ? 'white' : 'white',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
  },
  selectedButtonText: {
    color: 'white',
  },
  shadowButton: {
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? 'white' : 'white',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
    borderRadius: 2,
    overflow: 'hidden',
    shadowColor: 'white', 
  },
  pressedButton: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? 'white' : 'white',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
  },
});
