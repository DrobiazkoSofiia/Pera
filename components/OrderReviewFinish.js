import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderOrderReviewFinish from '../components/HeaderOrderReviewFinish';
import { CartContext } from './CartContext';
import { useRoute } from '@react-navigation/native';

export default function OrderReview() {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
  
    const day = String(tomorrow.getDate()).padStart(2, '0');
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Січень - 0
    const year = tomorrow.getFullYear();
  
    return `${day}.${month}.${year}`;
  };
  
  const tomorrowDate = getTomorrowDate();

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderOrderReviewFinish />
        <View style={styles.content}>
        <Text style={[globalStyles.title3, {marginTop:23, marginBottom:34, alignSelf:'center'}]}>Proccessing</Text>
        <View style={{flexDirection:'row', width:368, height:61, borderWidth:1, borderColor:'#92949B', borderRadius:12, gap:38, marginBottom:56, alignItems:'center'}}>
            <Text style={[globalStyles.productIngridients1, {paddingLeft:32}]}>Order number</Text>
            <View style={{width:81, height:61, backgroundColor:'#7EC845', borderRadius:11, justifyContent:'center', marginLeft:'25%'}}>
            <Text style={globalStyles.editButtonText}>G235</Text>
            </View>
        </View>
        <View style={{flexDirection:'row', gap:127, marginBottom:75}}>
        <Text style={[globalStyles.productIngridients1, {paddingTop:2}]}>Delivery time:</Text>
        <Text style={[globalStyles.smallBlackText, {width:110}]}>{tomorrowDate}     at 12.00-15.00</Text>
        </View>
      
        <Text style={[globalStyles.title2, {paddingLeft:5, marginBottom:13}]}>Order tracking</Text>
        <View style={{flexDirection:'row', gap:25, marginBottom:57}}>
        <Image source={require('../assets/progressImg.png')}/>
        <View style={{flexDirection:'column', paddingTop:29}}>
        <Text style={[globalStyles.articleLikeText1, {marginBottom:49}]}>Order proceed</Text>
        <Text style={[globalStyles.articleLikeText1, {marginBottom:49, color:'#92949B'}]}>Preparing</Text>
        <Text style={[globalStyles.articleLikeText1, {marginBottom:4, color:'#92949B'}]}>Order is ready!</Text>
        </View>
        <Image source={require('../assets/icons/tickOrderIcon.png')} style={{paddingLeft:60, marginTop:15}}/>
        </View>
          <TouchableOpacity style={[globalStyles.buttonNext, {marginRight:'5%', marginBottom:60, alignSelf:'center'}]}>
            <Text style={globalStyles.bigButtonText}>Finish</Text>
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
    flex:1,
    backgroundColor: 'white',
    alignItems:'flex-start',
    height:'100%',
    paddingLeft:'6%',
    marginBottom:60
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
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
});
