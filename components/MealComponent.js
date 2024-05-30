import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {meals as initialMeals } from './MealData';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

const MealComponent = ({ mealCard }) => {
  const navigation = useNavigation();
  const [mealCards, setMealCards] = useState(initialMeals);
  const route = useRoute();
  const handlePress12 = () => {
    navigation.navigate('DescriptMealCard', {mealCard});
  };
  return (
    <View key={mealCard.id} style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>{mealCard.title}</Text>
                                <View>
                                <Image source={mealCard.imageSource} style={{width:67, height:89, borderRadius:10}}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>{mealCard.name}</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>{mealCard.time} minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>{mealCard.kkal} kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
  );
};
const styles = StyleSheet.create({
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
  

export default MealComponent;
