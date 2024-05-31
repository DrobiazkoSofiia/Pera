import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import globalStyles from './GlobalStyles';
import TextInputField from './TextInputField';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function HeaderPayment() {
  const navigation = useNavigation();

  const handleCrossIconPress = () => {
    navigation.goBack();
    navigation.navigate('DescriptMealCard', { showConfirmationModal1: true, mealCard });
  };
  const route = useRoute();
  const { mealCard, handleDelete } = route.params;
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', gap:50, alignItems: 'center', marginBottom:14}}>
      <Text style={globalStyles.textParentProfileSuccess}>Adding a New Meal</Text>
      <View style={{alignSelf:'flex-end'}}>
      <TouchableHighlight onPress={ handleCrossIconPress}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 64, height: 64}} />
                      </TouchableHighlight>
                        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#7EC845',
    width: '100%',
    height:113,
    paddingLeft: 26,
    paddingRight: 28,
    paddingTop:25,
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    
  },
 
  icon: {
    width: 41,
    height: 41,
    tintColor: 'white',
    marginTop: 7,
  },
});
