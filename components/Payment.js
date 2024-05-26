import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderPayment from '../components/HeaderPayment';


export default function Payment() {
  const navigation = useNavigation();

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderPayment />
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[styles.title, {marginBottom:8}]}>Shipping to</Text>
          </View>
          <View style={{alignItems: 'flex-start', justifyContent:'center', marginBottom:24,}}>
            <View style={{flexDirection:'row', gap:14}}>
            <Image source={require('../assets/mapImg.png')}/>
            <View style={{flexDirection:'column', width:170}}>
                <Text style={globalStyles.textDietName}>Home</Text>
                <Text style={globalStyles.smallGreyText}>2860 Mechelen, Lange 
                    Zandstraat 2, Belgium</Text>
            </View>
            </View>
            <View style={{width:150, height:36, backgroundColor:'#7EC845', borderRadius:30, alignItems:'center', justifyContent:'center', alignSelf:'flex-end'}}>
              <TouchableOpacity>
                <Text style={globalStyles.smallWhiteText}>Change address</Text>
              </TouchableOpacity>
            </View>
            </View>
          <View style={{marginBottom:26}}>
            <Text style={[styles.title]}>Add Payment Method</Text>
          </View>
          <View style={{marginBottom:33, flexDirection:'row', gap:5}}> 
          <TouchableOpacity onPress={() => console.log('Mastercard pressed')}><Image source={require('../assets/mastercardImg.png')}/></TouchableOpacity> 
          <TouchableOpacity onPress={() => console.log('Paypal pressed')}><Image source={require('../assets/paypalImg.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Apple pressed')}><Image source={require('../assets/appleImg.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Google pressed')}><Image source={require('../assets/googleImg.png')}/></TouchableOpacity>
          </View>
          <View style={{marginBottom:202}}>
          <Image source={require('../assets/cardImg.png')}/>
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
    bottom: 0,
    height:'100%',   
    paddingLeft: 30,
    paddingHorizontal: 30,
    paddingBottom: 53,
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
  subtitle: {
    color: 'black',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  babyBoy:{
    width: 39,
    height:39,
    backgroundColor:'white',
    borderRadius: 150,
    justifyContent:'center',
    alignItems: 'center',

  },
  rowAge:{
    flexDirection:'row',
    gap:25,
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
  analysis: {
    width: 369,
    height: 261,
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  videoCard:{
    marginRight: 10,
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
    paddingVertical:15,
    alignItems: "center",
    justifyContent: "center", // Add this line to center the content vertically
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cross:{
    position:'absolute',
    right:25,
    top:18,
    marginBottom:'10%'
  },
  today:{
    width:180,
    height:44,
    backgroundColor: '#7EC845',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
  },
  meal:{
    width: 343,
    height:130,
    backgroundColor:'white',
    borderRadius: 10,
    elevation:7,
    paddingTop:8,
    paddingLeft:12,
    flexDirection:'row',
    gap:10,
  },
});
