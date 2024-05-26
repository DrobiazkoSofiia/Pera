import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const TextInputField = ({ placeholder, value, onChangeText, style, icon }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{height:60, alignItems:'center', justifyContent:'center'}}>
      {icon && <Image source={icon} style={styles.icon} />}
      </View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 359,
    height: 60,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: '#92949B',
    fontFamily: 'RadioCanada',
    fontSize: 20,
    marginLeft: 14, 
  },
  icon: {
     
  },
});

export default TextInputField;
