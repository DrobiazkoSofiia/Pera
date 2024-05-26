import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderCart from './HeaderCart';




export default function Cart() {
  const navigation = useNavigation();
  const ViewButton1 = ({ title }) => {
    const navigation = useNavigation();
  
    const handlePress1 = () => {
      navigation.navigate('NewMeal');
    };
    
  
    return (
      <TouchableOpacity onPress={handlePress1} style={styles.button1}>
        <Text style={styles.buttonText1}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <HeaderCart title='Notifications'/>
        <View style={styles.content}>
          <View style={{flexDirection:'row', paddingTop:26, paddingBottom:21, width:274, gap:5}}>
            <Text style={[globalStyles.productIngridients1]}>You have</Text>
            <Text style={[globalStyles.productIngridients1, {color:'#007EB1'}]}>3 notifications</Text>
            <Text style={[globalStyles.productIngridients1]}>today</Text>
          </View>
            <Text style={[globalStyles.title2, {paddingBottom:21}]}>Today</Text>
          <View style={{flexDirection:'row', gap:8, borderBottomWidth:1, borderColor:'#D5D5D8', height:101, marginBottom:15 }}>
          <Image source={require('../assets/notif1.png')}  />
          <View style={{flexDirection:'column', gap: 14, paddingTop:10}}>
          <Text style={globalStyles.textDietName2}>Next week's meal plan is ready!</Text>
          <Text style={globalStyles.smallGreyText}>09:20AM</Text>
          <ViewButton1 title="View"/>
          </View>
          </View>
          <View style={{flexDirection:'row', gap:8, borderBottomWidth:1, borderColor:'#D5D5D8', height:101, marginBottom:15 }}>
          <Image source={require('../assets/notif2.png')}  />
          <View style={{flexDirection:'column', gap: 14, paddingTop:10}}>
          <Text style={globalStyles.textDietName2}>Next week's meal plan is ready!</Text>
          <Text style={globalStyles.smallGreyText}>09:20AM</Text>
          <ViewButton1 title="View"/>
          </View>
          </View>
          <View style={{flexDirection:'row', gap:8, borderBottomWidth:1, borderColor:'#D5D5D8', height:101, marginBottom:15 }}>
          <Image source={require('../assets/notif3.png')}  />
          <View style={{flexDirection:'column', gap: 14, paddingTop:10}}>
          <Text style={globalStyles.textDietName2}>Next week's meal plan is ready!</Text>
          <Text style={globalStyles.smallGreyText}>09:20AM</Text>
          <ViewButton1 title="View"/>
          </View>
          </View>
          <Text style={[globalStyles.title2, {paddingBottom:21}]}>This week</Text>
          <View style={{flexDirection:'row', gap:8, borderBottomWidth:1, borderColor:'#D5D5D8', height:101, marginBottom:15 }}>
          <Image source={require('../assets/notif4.png')}  />
          <View style={{flexDirection:'column', gap: 14, paddingTop:10}}>
          <Text style={globalStyles.textDietName2}>Next week's meal plan is ready!</Text>
          <Text style={globalStyles.smallGreyText}>09:20AM</Text>
          <ViewButton1 title="View"/>
          </View>
          </View>
          <View style={{flexDirection:'row', gap:8, borderBottomWidth:1, borderColor:'#D5D5D8', height:101, marginBottom:15 }}>
          <Image source={require('../assets/notif5.png')}  />
          <View style={{flexDirection:'column', gap: 14, paddingTop:10}}>
          <Text style={globalStyles.textDietName2}>Next week's meal plan is ready!</Text>
          <Text style={globalStyles.smallGreyText}>09:20AM</Text>
          <ViewButton1 title="View"/>
          </View>
          </View>
          <View style={{flexDirection:'row', gap:8, borderBottomWidth:1, borderColor:'#D5D5D8', height:101, marginBottom:30 }}>
          <Image source={require('../assets/notif6.png')}  />
          <View style={{flexDirection:'column', gap: 14, paddingTop:10}}>
          <Text style={globalStyles.textDietName2}>Next week's meal plan is ready!</Text>
          <Text style={globalStyles.smallGreyText}>09:20AM</Text>
          <ViewButton1 title="View"/>
          </View>
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
  button1:{
    alignSelf:'flex-end',
    width: 75,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: '#007EB1',
    bottom:34,
    
    },
    buttonText1:{
       color: 'white',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 16,
    },
  container: {
    height: 'auto',
  },
  content: {
    backgroundColor: 'white',
    bottom: 0,
    height: '100%',
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

