import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderPayment from '../components/HeaderPayment';

export default function Payment() {
  const navigation = useNavigation();

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };
  
  const [pressedButtonIndex, setPressedButtonIndex] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderPayment title={'Payment Method'}/>
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[styles.title, { marginBottom: 8 }]}>Shipping to</Text>
          </View>
          <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', gap: 14 }}>
              <Image source={require('../assets/mapImg.png')} />
              <View style={{ flexDirection: 'column', width: 170 }}>
                <Text style={globalStyles.textDietName}>Home</Text>
                <Text style={globalStyles.smallGreyText}>2860 Mechelen, Lange Zandstraat 2, Belgium</Text>
              </View>
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
          <View style={{ marginBottom: 33, flexDirection: 'row', gap: 5 }}>
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
  footer: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center', 
  },
  shadowButton: {
    elevation: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'white', 
  },
  pressedButton: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
});
