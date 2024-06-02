import React, { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import globalStyles from './GlobalStyles';

export default function HeaderPayment({title}) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', gap:173, alignItems: 'center', marginBottom:14}}>
      <Text style={globalStyles.textParentProfileSuccess}>{title}</Text>
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
