import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
    const navigation = useNavigation();
    const handlePress5 = () => {
        navigation.navigate('Explore');
      };
      const handlePress6 = () => {
        navigation.navigate('Home');
      };
      const handlePress7 = () => {
        navigation.navigate('Cart');
      };
      const handlePress8 = () => {
        navigation.navigate('Payment');
      };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress6}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/homeIcon.png')}/>
            <Text style={styles.text}>Home</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress5}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/loopIcon.png')}/>
            <Text style={styles.text}>Explore</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress7}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/babystollerIcon.png')}/>
            <Text style={styles.text}>Cart</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress8}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/accountIcon.png')}/>
            <Text style={styles.text}>Account</Text>
            </View>
            </TouchableOpacity>
        </View>

    );
}
const styles=StyleSheet.create({
container:{
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    backgroundColor: '#7EC845',
    width: '100%',
    height: 95,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},
icons:{
    width: 'auto',
    height: 41,
    color:'white',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center'
    
},
icon:{
    width: 41,
    height: 41,
},
text: {
    color: 'white',
    marginTop: 5,
  },
});