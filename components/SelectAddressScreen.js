// SelectAddressScreen.js

import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';





const SelectAddressScreen = () => {
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const navigation = useNavigation();

  const handleConfirmAddress = async () => {
    if (!selectedCoordinate) {
      Alert.alert("No location selected", "Please select a location on the map.");
      return;
    }

    const { latitude, longitude } = selectedCoordinate;
    const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${longitude}&latitude=${latitude}&access_token=pk.eyJ1Ijoic29maTQ3IiwiYSI6ImNsd3pjNW9heDA1OTUya3JhZzl5b20zMDEifQ.O3uyrx5kcjZ3YYnyyIoulQ`;

    console.log('Fetching address for coordinates:', latitude, longitude); // Логування координат

    try {
      const response = await fetch(url, {
       
      });

      console.log('Response status:', response.status); // Логування статусу відповіді

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data); // Логування отриманих даних

      if (data.features.length === 0) {
        Alert.alert("No address found", "Could not find an address for the selected location.");
        return;
      }

      const address = data.features[0];
      const selectedAddress = `${address.properties.full_address}`;
      
      console.log('Selected address:', selectedAddress); // Логування обраної адреси

      navigation.navigate('Payment', { selectedAddress });
    } catch (error) {
      console.error('Error fetching address from Algolia:', error); // Логування помилок
      Alert.alert("Error", "Could not fetch address. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.8503,
          longitude: 4.3517,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => setSelectedCoordinate(e.nativeEvent.coordinate)}
      >
        {selectedCoordinate && (
          <Marker coordinate={selectedCoordinate} />
        )}
      </MapView>
      <Button title="Confirm Address" onPress={handleConfirmAddress} />
    </View>
  );
};

export default SelectAddressScreen;
