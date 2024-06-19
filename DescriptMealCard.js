import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';
import { CartContext } from './CartContext';

export default function DescriptMealCard() {
  const [mealCard, setMealCard] = useState(null);
  const route = useRoute();
  const { mealId } = route.params;
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://kutsenko.be/api/v1/meals/${mealId}`);
        const data = await response.json();
        setMealCard(data);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (!mealCard) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const handleCrossIconPress = () => {
    navigation.goBack();
  };

  const handleHeartPress = () => {
    // Логика для обработки нажатия на иконку сердца
  };

  const onAddToCart = () => {
    addToCart(mealCard);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.topPart}>
            <ImageBackground source={require('../assets/MealBackImg.png')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.topContent}>
                <View style={styles.top}>
                  <TouchableOpacity onPress={handleCrossIconPress}>
                    <Image source={require('../assets/icons/arrowIcon.png')} style={{ marginRight: 42 }} />
                  </TouchableOpacity>
                  <View style={globalStyles.categoryName}>
                    <Text style={globalStyles.title}>{mealCard.meal_category}</Text>
                  </View>
                  <TouchableOpacity onPress={handleHeartPress}>
                    <Image source={require('../assets/icons/heartIcon.png')} style={{ marginLeft: 42 }} />
                  </TouchableOpacity>
                </View>
                <Text style={globalStyles.naming}>{mealCard.name}</Text>
                <Image source={{ uri: mealCard.main_picture }} style={styles.mealImage} />
                <Text style={globalStyles.productIngridients}>{mealCard.description}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.bottomPart}>
            <View style={styles.row1}>
              <View style={styles.descript}>
                <View style={styles.icons}>
                  <Image source={require('../assets/icons/kkalIcon.png')} style={{ width: 16, height: 22 }} />
                </View>
                <Text style={styles.kkal}>{mealCard.calories} kkal</Text>
              </View>
              <View style={styles.descript}>
                <View style={styles.icons}>
                  <Image source={require('../assets/icons/timeIcon.png')} style={{ width: 26, height: 26 }} />
                </View>
                <Text style={styles.kkal}>{mealCard.preparation_time} min</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.descript}>
                <View style={styles.age}>
                  <Image source={require('../assets/icons/heartIcon.png')} style={{ width: 60, height: 59 }} />
                </View>
                <View style={styles.ageCategory}>
                  <Text style={globalStyles.smallBlackName}>{mealCard.child_type}</Text>
                </View>
              </View>
              <View style={styles.descript}>
                <Image source={require('../assets/icons/certificate1Icon.png')} style={{ width: 53, height: 40 }} />
                <Image source={require('../assets/icons/certificate2Icon.png')} style={{ width: 43, height: 43 }} />
              </View>
            </View>
            <View style={styles.row3}>
              <View style={{ paddingLeft: 10 }}>
                <Text style={globalStyles.title2}>Ingredients</Text>
              </View>
              <View style={{ paddingHorizontal: 10, paddingLeft: 10, paddingRight: 10 }}>
                <Text style={globalStyles.smallBlackText}>{mealCard.ingredients}</Text>
              </View>
            </View>
            <View style={styles.row4}>
              <Image source={{ uri: mealCard.additional_pic1 }} style={{ width: 75, height: 75 }} />
              <Image source={{ uri: mealCard.additional_pic2 }} style={{ width: 75, height: 75 }} />
              <Image source={{ uri: mealCard.additional_pic3 }} style={{ width: 75, height: 75 }} />
              <Image source={{ uri: mealCard.additional_pic4 }} style={{ width: 75, height: 75 }} />
            </View>
            <View style={styles.row5}>
              <TouchableOpacity onPress={onAddToCart}>
                <View style={globalStyles.bigBlueButton}>
                  <View style={globalStyles.buttonContent}>
                    <Image source={require('../assets/icons/babystollerIcon.png')} style={{ width: 39, height: 39 }} />
                    <Text style={globalStyles.bigButtonText}>Add to cart</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.row6}>
              <TouchableOpacity onPress={() => setShowConfirmationModal(true)} style={[globalStyles.editButton, { backgroundColor: '#EA6448' }]}>
                <View style={globalStyles.editButtonContent}>
                  <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />
                  <Text style={globalStyles.bigButtonText}>Delete</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Footer style={{ width: '100%' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    width: '100%',
    flexShrink: 0,
    justifyContent: 'center',
    position: 'relative',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  topPart: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderColor: '#D5D5D8',
    width: '100%',
    marginBottom: 16,
  },
  topContent: {
    marginTop: 60,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  bottomPart: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    width: 308,
    gap: 80,
  },
  descript: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: 'auto',
  },
  icons: {
    width: 38,
    height: 38,
    borderRadius: 40,
    backgroundColor: '#7EC845',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kkal: {
    color: '#7EC845',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 19,
    width: 380,
    gap: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  age: {
    width: 89,
    height: 89,
    flexShrink: 0,
    backgroundColor: 'white',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageCategory: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  row3: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 63,
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },
  row5: {
    marginBottom: 17,
  },
  row6: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 35,
    gap: 20,
    alignItems: 'center',
  },
  mealImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 360,
    height: 217,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    margin: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
