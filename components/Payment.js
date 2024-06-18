import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderPayment from '../components/HeaderPayment';
import { useRoute } from '@react-navigation/native';

export default function Payment() {
  const route = useRoute();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigation = useNavigation();
  const [pressedButtonIndex, setPressedButtonIndex] = useState(null);
  const { username, childname, avatarSource } = route.params || {};

  useEffect(() => {
    if (route.params?.selectedAddress) {
      setSelectedAddress(route.params.selectedAddress);
    }
  }, [route.params?.selectedAddress]);

  const handleChangeAddress = () => {
    navigation.navigate('SelectAddressScreen', {username, childname, avatarSource});
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderPayment title={'Payment Method'} />
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[globalStyles.title2, { marginBottom: 8 }]}>Shipping to</Text>
          </View>
          <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', gap: 14 }}>
              <Image source={require('../assets/mapImg.png')} />
              <View style={{ flexDirection: 'column', width: '70%' }}>
                <Text style={globalStyles.textDietName}>Home</Text>
                <Text style={globalStyles.smallGreyText}>{selectedAddress || 'Select address, please'}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.changeAddressButton}
              onPress={handleChangeAddress}
            >
              <Text style={globalStyles.smallWhiteText}>Change address</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 26 }}>
            <Text style={[globalStyles.title2]}>Add Payment Method</Text>
          </View>
          <View style={{ marginBottom: 33, flexDirection: 'row', gap: 5, alignItems:'center', alignSelf:'center' }}>
            <TouchableOpacity
              style={[styles.shadowButton, pressedButtonIndex === 0 && styles.pressedButton]}
              onPress={() => setPressedButtonIndex(0)}
            >
              <Image source={require('../assets/mastercardImg.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shadowButton, pressedButtonIndex === 1 && styles.pressedButton]}
              onPress={() => setPressedButtonIndex(1)}
            >
              <Image source={require('../assets/paypalImg.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shadowButton, pressedButtonIndex === 2 && styles.pressedButton]}
              onPress={() => setPressedButtonIndex(2)}
            >
              <Image source={require('../assets/appleImg.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shadowButton, pressedButtonIndex === 3 && styles.pressedButton]}
              onPress={() => setPressedButtonIndex(3)}
            >
              <Image source={require('../assets/googleImg.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 202,  alignSelf:'center' }}>
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
    flex:1,
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: 'white',
    bottom: 0,
    height: '100%',
    paddingLeft: 30,
    paddingHorizontal: 30,
    paddingBottom: 53,
    flex: 1,
  },
  top: {
    paddingTop: 17,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  changeAddressButton: {
    width: 150,
    height: 36,
    backgroundColor: '#7EC845',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  shadowButton: {
    elevation: 10,
    borderRadius: 10,
    overflow: 'hidden', 
    shadowColor: Platform.OS === 'ios' ? 'black' : 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
    shadowRadius: 4,
  },
  pressedButton: {

    shadowColor: Platform.OS === 'ios' ? 'black' : 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center', 
  },
});