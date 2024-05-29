import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import HeaderCart from './HeaderCart';
import CartMeal from './CartMeal';
import globalStyles from './GlobalStyles';
import { CartContext } from './CartContext';

export default function Cart() {
  const navigation = useNavigation();
  const { cartItems, removeFromCart, updateItemCount } = useContext(CartContext);

  const totalPayment = cartItems.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2);

  return (
    <View style={styles.container}>
        <HeaderCart title={'Cart'} />
        <View style={styles.content}>
          <View style={{ gap: 26, paddingTop: 34, marginBottom: 44 }}>
            <FlatList
              data={cartItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <CartMeal
                  name={item.name}
                  imageSource={item.imageSource}
                  size={item.size}
                  price={item.price}
                  removeFromCart={removeFromCart}
                  updateItemCount={updateItemCount}
                  item={item}
                />
              )}
            />
          </View>
          <View style={styles.totalContainer}>
            <Text style={[globalStyles.productIngridients1, {marginTop:16}]}>Total Payment</Text>
            <Text style={globalStyles.bigButtonText1}>€{totalPayment}</Text>
          </View>
          <TouchableOpacity style={[globalStyles.bigAddButton, { marginBottom: 55, alignSelf: 'center' }]}>
            <Text style={globalStyles.bigButtonText}>Proceed to checkout</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'white',
    bottom: 0,
    height: '100%',
    paddingHorizontal: 30,
    paddingBottom: 53,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap:155,
    marginBottom: 44,
    borderTopWidth: 5,
    borderColor: '#92949B',
    borderTopRadius: 2,
    borderStyle: 'dotted',
  },
  top: {
    paddingTop: 17,
    marginBottom: 8,
  },
  title: {
    color: 'black',
    fontFamily: 'Caladea-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  slider: {
    width: 341,
    height: 35,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 30,
    backgroundColor: '#007EB1',
    width: 168,
    height: 45,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  more: {
    alignItems: 'flex-end',
    paddingRight: 18,
    marginBottom: 20,
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
  label: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  modalView: {
    width: 373,
    height: 'auto',
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 20,
    margin: 20,
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center', // Add this line to center the content vertically
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cross: {
    position: 'absolute',
    right: 25,
    top: 18,
    marginBottom: '10%',
  },
  today: {
    width: 180,
    height: 44,
    backgroundColor: '#7EC845',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meal: {
    width: 343,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 7,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 10,
  },
});
