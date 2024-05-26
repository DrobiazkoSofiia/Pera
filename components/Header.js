import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  const navigation = useNavigation();
  const handlePress1 = () => {
    navigation.navigate('Notification');
  };
  const handlePress2 = () => {
    navigation.navigate('ChildAccount');
  };
  return (
    <View style={styles.container}>
     
      <View style={[styles.profile]}>
        <TouchableOpacity onPress={handlePress1}>
        <Image style={[styles.icon, styles.bellIcon]} source={require('../assets/icons/iconBell.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2}>
          <Image style={styles.baby} source={require('../assets/baby.jpg')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    backgroundColor: '#7EC845',
    width: '100%',
    height: 144,
    paddingLeft:'60%',
    paddingTop: 28,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',   
  },
  icon: {
    width: 41,
    height: 41,
    tintColor: 'white',
    marginTop: 7,
  },
  bellIcon: {
    marginRight: 7, // Adjust margin as needed
  },
  baby: {
    width: 54,
    height: 54,
    borderRadius: 90,
    borderColor: 'white',
    borderWidth: 1,
  }
});
