import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import TextInputField from './TextInputField';

export default function ChildProfileSuccess() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!username.trim() || !email.trim() || !phoneNumber.trim() || !password.trim() || !isChecked) {
      Alert.alert('Please fill all the fields and accept terms and conditions');
      return;
    }

    try {
      const response = await fetch('https://kutsenko.be/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email: email,
          phone_number: phoneNumber,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('User registered successfully', `User ID: ${data.id}`);
        navigation.navigate('ParentProfileSuccess', { username });
      } else {
        const errorText = await response.text(); // Получите текст ответа для диагностики
        Alert.alert('Error', errorText || 'An error occurred');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const CustomButton = ({ title, onPress, style, textStyle }) => (
    <TouchableOpacity onPress={handleSignUp} style={[globalStyles.button, style]}>
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back/welcomeImg.png')} style={styles.imageBackground}>
        <View style={styles.innerContainer}>
          <Image source={require('../assets/profileImg.png')} style={styles.profileImage} />

          <TextInputField
            placeholder="Your name"
            value={username}
            onChangeText={setUsername}
            style={[styles.customInputStyle, { marginBottom: 21 }]}
            icon={require('../assets/icons/profileIcon.png')}
          />

          <TextInputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={[styles.customInputStyle, { marginBottom: 21 }]}
            icon={require('../assets/icons/emailIcon.png')}
          />

          <TextInputField
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[styles.customInputStyle, { marginBottom: 21 }]}
            icon={require('../assets/icons/phoneIcon.png')}
          />

          <TextInputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[styles.customInputStyle, { marginBottom: 21 }]}
            icon={require('../assets/icons/passwordIcon.png')}
          />

          <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => setChecked(!isChecked)}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
                onPress={() => setChecked(!isChecked)}
              >
                {isChecked && <Text style={styles.checkmark}>✔</Text>}
              </TouchableOpacity>
              <Text style={globalStyles.smallBlackText}>I accept all terms and conditions</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <CustomButton
              style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, { backgroundColor: '#007EB1' }]}
              textStyle={globalStyles.bigButtonText}
              title="Sign Up"
              onPress={handleSignUp}
            />
          </View>

          <Text style={[globalStyles.productIngridients, { marginBottom: 10 }]}>Or create an account using </Text>

          <View style={styles.socialIconsContainer}>
            <TouchableOpacity onPress={() => console.log('Facebook pressed')}>
              <Image source={require('../assets/facebookImg.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Google pressed')}>
              <Image source={require('../assets/google1Img.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Apple pressed')}>
              <Image source={require('../assets/apple1Img.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
  innerContainer: {
    backgroundColor: 'white',
    width: 387,
    height: 700,
    borderRadius: 20,
    paddingLeft: 10,
    alignItems: 'center',
    paddingRight: 10,
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? 'white' : 'white',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
  },
  profileImage: {
    bottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#ECECEC',
  },
  checkedCheckbox: {
    backgroundColor: '#007EB1',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  customInputStyle: {
    width: '90%',
  },
  socialIconsContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: 5,
  },
});

