import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Footer from '../components/Footer';
import globalStyles from './GlobalStyles';
import HeaderNewMeal from '../components/HeaderNewMeal';
import TextInputField from '../components/TextInputField';
import Slider from '@react-native-community/slider';

export default function NewMeal() {
  const navigation = useNavigation();
  const route = useRoute();
  const { addMeal, username, childname, avatarSource } = route.params;

  const [mealName, setMealName] = useState('');
  const [kkalName, setKkalName] = useState('');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const addNewMeal = () => {
    const newMeal = {
      id: Date.now().toString(),
      name: mealName,
      imageSource: require('../assets/icons/newMealIcon.png'),
      backgroundColor: '#FAE03C',
      title: "Your Meal",
      width: 297,
      height: 297,
      width1: 236,
      height1: 75,
      widthImg: 219,
      heightImg: 212,
      fontSize1: 16,
      widthText: 150,
      heightText: 17,
      titleBut: "View",
      ageCategoryImg: require('../assets/icons/babyboyIcon.png'),
      kkal: kkalName,
      price: "0",
    };
    addMeal(newMeal);
    navigation.navigate('Home', {newMeal, username, childname, avatarSource })
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderNewMeal />
        <View style={styles.content}>
          <Image source={require('../assets/foodImg.png')} style={{ marginTop: 27 , width:359, height:203}} />
          <View style={styles.top}>
            <Text style={[styles.title, { marginBottom: 8 }]}>Name of the dish</Text>
          </View>
          <TextInputField
            placeholder="Name"
            value={mealName}
            onChangeText={setMealName}
            style={[styles.customInputStyle, { marginBottom: 32 }]}
          />
          <View style={{ marginBottom: 14 }}>
            <Text style={[styles.title]}>Approximate number of calories (optional)</Text>
          </View>
          <TextInputField
            placeholder="kkal"
            value={kkalName}
            onChangeText={setKkalName}
            style={[styles.customInputStyle, { marginBottom: 32 }]}
          />
          <View style={{marginBottom:41}}>
          <Text style={globalStyles.title2}>Meat</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value1}
            onValueChange={(val) => setValue1(val)}
            minimumTrackTintColor="#FFC4BC"
            maximumTrackTintColor="#8E8E93"
            thumbTintColor="#F88272"
          />
           <Text style={globalStyles.title2}>Vegetables</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value2}
            onValueChange={(val) => setValue2(val)}
            minimumTrackTintColor="#7EC845"
            maximumTrackTintColor="#8E8E93"
            thumbTintColor="#439A00"
          />
           <Text style={globalStyles.title2}>Cereals</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value3}
            onValueChange={(val) => setValue3(val)}
            minimumTrackTintColor="#FAE03C"
            maximumTrackTintColor="#8E8E93"
            thumbTintColor="#FFC700"
          />
           <Text style={globalStyles.title2}>Fruits</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value4}
            onValueChange={(val) => setValue4(val)}
            minimumTrackTintColor="#C4BAE6"
            maximumTrackTintColor="#8E8E93"
            thumbTintColor="#9077E2"
          />
          </View>
          <View style={{flexDirection:'row', marginBottom:41}}>
           <TouchableOpacity
        style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
        onPress={() =>setChecked(!isChecked)}
      >
        {isChecked && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
      <Text style={globalStyles.smallBlackText}>Save the dish for later</Text>
      </View>
      <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:55, alignSelf:'center', marginRight:'7%'}]} onPress={addNewMeal}>
            <Text style={globalStyles.bigButtonText}>Add a meal</Text>
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
    height: 'auto',
  },
  content: {
    backgroundColor: 'white',
    bottom: 0,
    height: '100%',
    paddingLeft: '7%',
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
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  modalView: {
    width: 373,
    height: 'auto',
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    margin: 20,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 10,
  },
});

