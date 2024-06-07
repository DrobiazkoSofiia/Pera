import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import globalStyles from './GlobalStyles';

export default function CartMeal({ name, imageSource, size, price, removeFromCart, updateItemCount, item }) {
  const [count, setCount] = useState(item.count);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateItemCount(item, newCount);
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateItemCount(item, newCount);
    }
  };

  const handleRemove = () => {
    removeFromCart(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={{ flexDirection: 'row', gap: 17, width: 382, paddingLeft: 2, marginBottom: 22,  }}>
          <View style={{ width: 100, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',  ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      }}), borderRadius: 20 }}>
            <Image source={imageSource} style={{ width: 76, height: 76 }} />
          </View>
          <View style={{ flexDirection: 'column', paddingTop: 10, gap: 6 }}>
            <Text style={[globalStyles.textDietName2, {width:110}]}>{name}</Text>
            <Text style={globalStyles.smallGreyText}>Size: {size}</Text>
            <Text style={globalStyles.textDietName2}>£{price}</Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 34, position: 'absolute', left: '68%', bottom: 3 }}>
            <View style={{ alignSelf: 'flex-end' }}>
              <TouchableOpacity onPress={handleRemove}>
                <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.container12}>
              <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text style={styles.buttonText2}>-</Text>
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={increment} style={styles.button2}>
                <Text style={styles.buttonText2}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container12: {
    flexDirection: 'row',
    alignItems: 'center',
    height:31,
    width:91,
    borderWidth:1,
    borderRadius:20,
  },
  button: {
    height:30,
    width:30,
    borderRightWidth:1,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2CDD1',
   
  },
  button2: {
    height:30,
    width:30,
    borderLeftWidth:1,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2CDD1',
   
  },
  buttonText2: {
    color: '#007EB1',
    fontSize: 20,
  },
  count: {
    fontSize: 15,
    marginHorizontal: 10,
  },
 container: {
    height: 'auto',
  },
 
  title: {
    color: 'black',
    fontFamily: 'Caladea-Bold',
    fontSize: 24,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  

 
});
