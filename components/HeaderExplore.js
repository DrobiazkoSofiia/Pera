import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import globalStyles from './GlobalStyles';
import TextInputField from './TextInputField';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  useRoute } from '@react-navigation/native';

export default function HeaderExplore() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const handlePress2 = () => {
      navigation.navigate('ChildAccount', { username, childname, avatarSource });
    };
    const route = useRoute();
    const { childname, username, avatarSource } = route.params || {};
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', gap:173, alignItems: 'center', marginBottom:14}}>
      <Text style={globalStyles.textParentProfileSuccess}>Discover</Text>
      <View style={styles.profile}>
        <TouchableOpacity onPress={handlePress2}>
        {avatarSource === null ? (
                    <Image source={require('../assets/icons/babyboyIcon.png')} style={styles.baby} />
                  ) : (
                    <Image source={{ uri: avatarSource }} style={styles.baby} />
                  )}
        </TouchableOpacity>
      </View>
      </View>
      <View style={{ marginBottom:15}}>
      <TextInputField
        placeholder="Search..."
        value={text}
        onChangeText={setText}
        style={[styles.customInputStyle, {backgroundColor:'white', borderRadius:15}]}
        textStyle={{color:'#92949B'}}
      />
      <View style={{width:44, height:44, backgroundColor:'#7EC845', borderRadius:12, position:'absolute', bottom:18, alignItems:'center', justifyContent:'center', left:301}}>
            <Image source={require('../assets/icons/loopIcon.png')} style={{width:36, height:36}}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7EC845',
    width: '100%',
    height: 225,
    paddingLeft: 26,
    paddingRight: 28,
    paddingTop:25
    
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',   
  },
  icon: {
    width: 41,
    height: 41,
    tintColor: 'white',
    marginTop: 7,
  },
  bellIcon: {
    marginRight: 7, // Adjust margin as needed
  },
  baby: {
    width: 64,
    height: 64,
    borderRadius: 90,
    borderColor: 'white',
    borderWidth: 1,
  }
});
