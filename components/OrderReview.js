import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderPayment from '../components/HeaderPayment';
import { CartContext } from './CartContext';
import { useRoute } from '@react-navigation/native';

export default function OrderReview() {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);
  const route = useRoute();
  const { totalPayment, selectedAddress, username, childname, avatarSource  } = route.params;
  const TodayDateComponent = () => {
    const getTodayDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Січень - 0
      const year = today.getFullYear();
  
      return `${day}.${month}.${year}`;
    };
  
    return (
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{getTodayDate()}</Text>
      </View>
    );
  };

  const handlePress1 = () => {
    navigation.navigate('OrderReviewFinish', { username, childname, avatarSource });
  };
  const handlePress2 = () => {
    navigation.navigate('SelectAddressScreen', { username, childname, avatarSource });
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderPayment title={'Review order'} />
        <View style={styles.content}>
        <Text style={[globalStyles.title2, {paddingLeft:5, marginTop:28, marginBottom:13}]}>Order details</Text>
        <View style={{flexDirection:'row', width:368, height:187, borderWidth:1, borderColor:'#92949B', borderRadius:12, gap:38, marginBottom:17}}>
            <View style={{flexDirection:'column', paddingTop:14, paddingLeft:21}}>
             <View style={{width:160, height:25, backgroundColor:'#7EC845', alignItems:'center', justifyContent:'center', borderRadius:4, marginBottom:4}}>
                <Text style={globalStyles.textArticle}>Menu for Toddler</Text>
             </View>
             <Text style={[globalStyles.smallBlackText, {marginBottom:8}]}>Includes:</Text>
             <ScrollView>
             {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={globalStyles.smallBlackText}>• {item.title} (Count: {item.count})</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
      </ScrollView>
            </View>
            <View style={{width:135, height:46, borderRadius:6, borderWidth:0.2, marginTop:25, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                <Text>for </Text>
                <TodayDateComponent />
            </View>
            
        </View>
        <Text style={[globalStyles.title2, {paddingLeft:5, marginBottom:13}]}>Deliver to</Text>
        <View style={{flexDirection:'row', width:368, height:128, borderWidth:1, borderColor:'#92949B', borderRadius:12, gap:34, marginBottom:21, alignItems:'center'}}>
        <View style={{ flexDirection: 'row', gap: 14, paddingLeft:17}}>
              <Image source={require('../assets/mapImg.png')} />
              <View style={{ flexDirection: 'column', width: 170, height:85 }}>
                <Text style={globalStyles.textDietName}>Home</Text>
                <ScrollView>
                <Text style={globalStyles.smallGreyText}>{ selectedAddress  || "Select address, please"}</Text>
                </ScrollView>
              </View>
            </View>
            <TouchableOpacity onPress={handlePress2}>
            <Image source={require('../assets/icons/editOrderIcon.png')} /> 
            </TouchableOpacity>           
        </View>
        <Text style={[globalStyles.title2, {paddingLeft:5, marginBottom:13}]}>Payment</Text>
        <View style={[styles.card, selectedCard === 'master' && styles.pressedButton]}>
      <Image source={require('../assets/mastercardImg.png')} style={{width:65, height:52, marginLeft:10}}/>
      <View style={{ flexDirection: 'column', width: 170 }}>
        <Text style={globalStyles.textDietName}>MasterCard</Text>
        <Text style={globalStyles.smallBlackText}>**** 2636</Text>
      </View>
      <TouchableOpacity>
      <Image source={require('../assets/icons/editOrderIcon.png')} style={{marginLeft:45}} />
      </TouchableOpacity>
    </View>
    <Text style={[globalStyles.title2, {paddingLeft:5, marginBottom:4}]}>Total</Text>
    <View style={{flexDirection:'row', gap:26, marginBottom:46}}>
    <View style={{flexDirection:'row', width:101, height:53, borderWidth:1, borderColor:'#92949B', borderRadius:12, gap:34, marginBottom:21, alignItems:'center', justifyContent:'center'}}>
               <Text style={globalStyles.bigButtonText1}>€{totalPayment}</Text>    
        </View>     
           
          <TouchableOpacity style={[globalStyles.buttonNext, {width:247}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Place order</Text>
          </TouchableOpacity>
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
    
    height: '100%',
    backgroundColor:'white'
  },
  content: {
    flex:1,
    backgroundColor: 'white',
    alignItems:'flex-start',
    height:'auto',
    paddingLeft:'6%',
    marginBottom:46
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
    marginBottom: 37,
    overflow: 'visible',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  selectedButtonText: {
    color: 'white',
  },
  shadowButton: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});
