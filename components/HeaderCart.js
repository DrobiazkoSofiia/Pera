import React from 'react';
import { StyleSheet, View, Text, Image,} from 'react-native';
import globalStyles from './GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {  useRoute } from '@react-navigation/native';

export default function HeaderCart({ title }) {
  const navigation = useNavigation();
  const handlePress2 = () => {
    navigation.navigate('ChildAccount', { username, childname, avatarSource });
  };
  const route = useRoute();
  const { childname, username, avatarSource } = route.params || {};
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: '10%', width:'auto',alignItems:'flex-start'}}>
        <Text style={globalStyles.textParentProfileSuccess}>{title}</Text>
      </View>
      <TouchableOpacity style={{ alignItems:'flex-end'}} onPress={handlePress2}>
      {avatarSource === null ? (
                    <Image source={require('../assets/icons/babyboyIcon.png')} style={styles.baby} />
                  ) : (
                    <Image source={{ uri: avatarSource }} style={styles.baby} />
                  )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7EC845',
    width: '100%',
    height: 113,
    paddingLeft: '20%',
    paddingRight: '10%',
    paddingTop: 25,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  icon: {
    width: 41,
    height: 41,
    tintColor: 'white',
    marginTop: 7,
  },
  baby: {
    width: 54,
    height: 54,
    borderRadius: 90,
    borderColor: 'white',
    borderWidth: 1,
  },
});
