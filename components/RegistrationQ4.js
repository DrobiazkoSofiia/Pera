import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView, Alert, FlatList, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import { useRoute } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import * as ImagePicker from 'expo-image-picker'; // Імпортуємо Expo Image Picker
import * as MediaLibrary from 'expo-media-library'; // Імпортуємо Expo Media Library

export default function RegistrationQ4() {
  const navigation = useNavigation();
  const [avatarSource, setAvatarSource] = useState(null);
  const [photos, setPhotos] = useState([]);
  const route = useRoute();
  const { username, childname } = route.params || {};

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied to access media library');
        return;
      }

      const mediaAssets = await MediaLibrary.getAssetsAsync({ mediaType: 'photo', first: 50, sortBy: [[MediaLibrary.SortBy.creationTime, false]] });
      setPhotos(mediaAssets.assets);
    })();
  }, []);

  const handlePress2 = () => {
    navigation.navigate('RegistrationQ3');
  };

  const handlePress5 = () => {
    navigation.navigate('RegistrationQ5', { username, childname });
  };
  const handlePress6 = () => {
    navigation.navigate('RegistrationQ5', { username, childname, avatarSource });
  };

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }
  
    const pickerResult = await ImagePicker.launchCameraAsync({ allowsEditing: true, aspect: [4, 4] });
    if (pickerResult.cancelled === true) {
      return;
    }
  
    const uri = pickerResult.uri;
  
    if (uri) {
      setAvatarSource(uri);
      await MediaLibrary.saveToLibraryAsync(uri);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require('../assets/back/registrationQ4Img.png')}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <View style={styles.top}>
              <TouchableOpacity style={[globalStyles.buttonBackArrow]} onPress={handlePress2}>
                <Image source={require('../assets/icons/arrowIcon.png')} style={{ width: 46, height: 46 }} />
              </TouchableOpacity>
              <ProgressBar step={4} totalSteps={5} />
            </View>
            <Text style={[globalStyles.bigButtonText1, { marginBottom: 24 }]}>Add a photo of your child</Text>
            <View style={{ marginBottom: '10%' }}>
              <TouchableOpacity onPress={handleChoosePhoto}>
                <View style={styles.babyBoy}>
                  {avatarSource === null ? (
                    <Image source={require('../assets/icons/babyboyIcon.png')} style={{ width: 186, height: 186 }} />
                  ) : (
                    <Image source={{ uri: avatarSource }} style={{ width: 256, height: 256, borderRadius: 150 }} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <Text style={[globalStyles.bigButtonText1, { marginBottom: 24 }]}>Photos from device memory:</Text>
            <FlatList
              data={photos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setAvatarSource(item.uri)}>
                  <Image source={{ uri: item.uri }} style={{ width: 100, height: 100, margin: 5, marginBottom: 24 }} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              horizontal={true}
            />
            <TouchableOpacity style={[globalStyles.buttonNext, { marginBottom: 15 }]} onPress={handlePress6}>
              <Text style={globalStyles.bigButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyles.buttonNext, { marginBottom: 71, backgroundColor: '#5CA6CE' }]} onPress={handlePress5}>
              <Text style={globalStyles.bigButtonText}>Skip</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  top: {
    paddingTop: '10%',
    paddingLeft: 35,
    width: '100%',
    paddingBottom: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  babyBoy: {
    width: 256,
    height: 256,
    backgroundColor: 'white',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, 
    shadowColor: Platform.OS === 'ios' ? 'white' : 'white',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
  },
});
