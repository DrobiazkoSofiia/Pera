import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TouchableHighlight, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ViewButton from '../components/MealCard';
import globalStyles from './GlobalStyles';


export default function CartMeal() {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    };
  };
  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };
  const [showConfirmationModal1, setShowConfirmationModal1] = useState(false);
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);

    const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
        <TouchableOpacity onPress={onPress} style={[globalStyles.button, style]}>
           {icon && <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />}
          <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
      );
      

  return (
    <View style={styles.container}>
                <View style={styles.centeredView}>
                  <View style={{flexDirection:'row', gap:17}}>
                    <View style={{width:100, height:100, backgroundColor:'white', alignItems:'center', justifyContent:'center', elevation:10, borderRadius:20}}>
                    <Image source={require('../assets/productImage.png')} style={{width:76, height:76}}/>
                    </View>
                    <View style={{flexDirection:'column', paddingTop:10, gap:6}}>
                      <Text style={globalStyles.textDietName2}>Organic Morning Bowl</Text>
                      <Text style={globalStyles.smallGreyText}>Size: 1 bowl(128g)</Text>
                      <Text style={globalStyles.textDietName2}>€2.63</Text>
                    </View>
                    <View style={{flexDirection:'column', gap:34}}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal1(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 40, height: 40}} />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.container12}>
                        <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText2}>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={increment} style={styles.button2}>
        <Text style={styles.buttonText2}>+</Text>
      </TouchableOpacity>
      </View>
                    </View>
                    </View>
                  </View>
           </View>
       
    
  );
}

const styles = StyleSheet.create({
  container12: {
    flexDirection: 'row',
    alignItems: 'center',
    height:31,
    width:91,
    borderWidth:1,
    borderRadius:20,
  },
  button: {
    height:30,
    width:30,
    borderRightWidth:1,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2CDD1',
   
  },
  button2: {
    height:30,
    width:30,
    borderLeftWidth:1,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2CDD1',
   
  },
  buttonText2: {
    color: '#007EB1',
    fontSize: 20,
  },
  count: {
    fontSize: 20,
    marginHorizontal: 10,
  },
 container: {
    height: 'auto',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius:39,
    borderTopRightRadius:39,
    bottom: 32,
    height:'100%',   
    paddingLeft: 30,
    paddingHorizontal: 30,
    paddingBottom: 73,
  },
  top: {
    paddingTop: 35,
    marginBottom: 20,
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
    elevation: 4,
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
