import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function ChildProfileSuccess() {
  const navigation = useNavigation();
  const handlePress1 = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={require('../assets/back/childProfileSuccessImg.png')} style={styles.imageBackground}>
          <Text style={[globalStyles.textParentProfileSuccess, styles.successText]}>
            Child profile has been created successfully!
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={globalStyles.buttonParentProfileSuccess} onPress={handlePress1}>
              <Text style={globalStyles.bigButtonText}>Done</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    position: 'absolute',
    top: 55,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center', 
  },
});
