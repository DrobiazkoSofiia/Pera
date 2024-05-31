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

  const handlePress1 = () => {
    navigation.navigate('PaymentOrder');
  };
  const { cartItems, removeFromCart, updateItemCount } = useContext(CartContext);

  const totalPayment = cartItems.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2);

  return (
    <View style={styles.container}>
        <HeaderCart title={'Cart'} />
        <View style={styles.content}>
          <View style={{ gap: 26, paddingTop: 34, marginBottom: 44, }}>
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
            <View style={{height:'auto', backgroundColor:'white', position:'absolute', bottom:0,}}>
            <View style={styles.totalContainer}>
            <Text style={[globalStyles.productIngridients1, {marginTop:16}]}>Total Payment</Text>
            <Text style={globalStyles.bigButtonText1}>€{totalPayment}</Text>
          </View>
          <TouchableOpacity style={[globalStyles.bigAddButton, { marginBottom: 5, alignSelf: 'center' }]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Proceed to checkout</Text>
          </TouchableOpacity>
          </View>
          
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
    flex: 1,
    height: '100%',
    paddingHorizontal: 30,
    paddingBottom: 53,
    alignItems:'center'
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap:155,
    marginBottom: 14,
    borderTopWidth: 5,
    borderColor: '#92949B',
    borderTopRadius: 2,
    borderStyle: 'dotted',
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
 

});
