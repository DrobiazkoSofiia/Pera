import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function RegistrationQ5() {
  const navigation = useNavigation();
  const [selectedDiet, setSelectedDiet] = useState(null);

  const handlePress = (dietType) => {
    setSelectedDiet(dietType);
  };

  const handleBackPress = () => {
    navigation.navigate('RegistrationQ4');
  };

  const handleNextPress = () => {
    navigation.navigate('ChildProfileSuccess');
  };

  const isDietSelected = () => {
    return selectedDiet !== null;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={require('../assets/back/registrationQ5Img.png')} style={styles.imageBackground} resizeMode="cover">
          <View style={styles.content}>
            <View style={styles.top}>
              <TouchableOpacity style={[globalStyles.buttonBackArrow]} onPress={handleBackPress}>
                <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
              </TouchableOpacity>
            </View>
            <Text style={[globalStyles.bigButtonText1, { marginBottom: 24, textAlign: 'left', width: 354 }]}>
              Which meal plan is right for your child?
            </Text>
            <View style={{ marginBottom: '5%' }}>
              {[
                { type: 'normal', icon: require('../assets/icons/normalDietIcon.png'), label: 'Normal diet', excludes: 'Excludes: Nothing' },
                { type: 'keto', icon: require('../assets/icons/ketoDietIcon.png'), label: 'Keto', excludes: 'Excludes: Grains, Legumes, Starchy Vegetables' },
                { type: 'vegetarian', icon: require('../assets/icons/vegetarianDietIcon.png'), label: 'Vegetarian', excludes: 'Excludes: Red Meat, Poultry, Fish, Shellfish' },
                { type: 'vegan', icon: require('../assets/icons/veganDietIcon.png'), label: 'Vegan', excludes: 'Excludes: Red Meat, Poultry, Fish, Shellfish, Dairy, Eggs, Honey' },
                { type: 'paleo', icon: require('../assets/icons/paleoDietIcon.png'), label: 'Paleo', excludes: 'Excludes: Grains, Legumes, Starchy Vegetables, Soy, Dairy' }
              ].map((diet) => (
                <View key={diet.type} style={styles.dietType}>
                  <TouchableHighlight
                    style={[globalStyles.buttonDiet, { backgroundColor: selectedDiet === diet.type ? '#007EB1' : '#FFF' }]}
                    onPress={() => handlePress(diet.type)}
                  >
                    <View></View>
                  </TouchableHighlight>
                  <Image source={diet.icon} style={{ width: 73, height: 73 }} />
                  <View style={styles.name}>
                    <Text style={globalStyles.textDietName}>{diet.label}</Text>
                    <Text style={globalStyles.smallGreyText}>{diet.excludes}</Text>
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity
              style={[globalStyles.buttonNext, { marginBottom: 57, backgroundColor: isDietSelected() ? '#007EB1' : '#5CA6CE' }]}
              onPress={handleNextPress}
              disabled={!isDietSelected()}
            >
              <Text style={globalStyles.bigButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  top: {
    paddingTop: '10%',
    paddingLeft: 35,
    width: '100%',
    marginBottom: '10%',
  },
  dietType: {
    width: 359,
    height: 93,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    gap: 25,
    marginBottom: '3%',
  },
  name: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
  },
});

