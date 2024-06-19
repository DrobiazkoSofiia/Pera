import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealCard from '../components/MealCard';
import globalStyles from './GlobalStyles';
import { CartContext } from './CartContext';

const CalendarScreen = () => {
  const navigation = useNavigation();
  const [mealCards, setMealCards] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [days, setDays] = useState([]);
  const [specificMeals, setSpecificMeals] = useState([]);

  useEffect(() => {
    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIds = { Sun: 17, Mon: 16, Tue: 15, Wed: 19, Thu: 14, Fri: 18, Sat: 13 };
    const generatedDays = dayNames.map((name, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - today.getDay() + index);
      return {
        number: date.getDate().toString(),
        name: name,
        id: dayIds[name],
      };
    });

    setDays(generatedDays);
    setSelectedDay(generatedDays[0]); // Устанавливаем первый день недели как выбранный по умолчанию
  }, []);

  useEffect(() => {
    if (selectedDay) {
      fetchMealsForDay(selectedDay.id);
    }
  }, [selectedDay]);

  const fetchMealsForDay = async (id) => {
    try {
      const response = await fetch(`https://kutsenko.be/api/v1/menus/${id}`);
      const data = await response.json();
      console.log('Fetched data:', data);
      setSpecificMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const { addToCart } = useContext(CartContext);

  const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
    <TouchableOpacity onPress={onPress} style={[globalStyles.button, style]}>
      {icon && <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />}
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  const handleGetMyPlan = () => {
    addToCart(specificMeals);
    setShowConfirmationModal2(true);
  };

  const handleDelete = (id) => {
    setSpecificMeals(prevMeals => prevMeals.filter(meal => meal.id !== id));
  };

  const calculateTotalKkal = () => {
    return specificMeals.reduce((total, meal) => total + meal.kkal, 0);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ marginRight: 29 }}>
          <Image source={require('../assets/icons/arrowCalendarIcon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowConfirmationModal(true)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
          <Image source={require('../assets/icons/calendarIcon.png')} />
          <Text style={globalStyles.articleLikeText1}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 29 }}>
          <Image source={require('../assets/icons/arrowCalendarIcon1.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        <FlatList
          data={days}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedDay(item)} style={[styles.day, selectedDay.number === item.number && styles.selectedDayBut]}>
              <View style={styles.dayContainer}>
                <Text style={[styles.dayName]}>
                  {item.name}
                </Text>
                <Text style={[styles.dayNumber]}>
                  {item.number}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.number}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {specificMeals.map((mealCard, index) => (
          <MealCard
            key={mealCard.id}
            imageSource={{ uri: mealCard.main_picture }}
            title={mealCard.meal_category}
            name={mealCard.name}
            onButtonPress={() =>
              navigation.navigate('DescriptMealCard', {
                mealId: mealCard.id, // Передаем mealId вместо mealCard
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    width: 45,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 18,
    shadowOpacity: '10%',
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  day1: {
    width: 36,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 18,
    shadowOpacity: '10%',
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayName: {
    fontSize: 12,
    color: 'black',
  },
  dayNumber: {
    fontSize: 16,
    color: 'black',
    padding: 2,
    fontWeight: 'bold',
  },
  selectedDayBut: {
    backgroundColor: '#7EC845',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 25,
  },
  mealContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView1: {
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
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalView: {
    width: 360,
    height: 217,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 10,
    margin: 20,
    padding: 10,
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

export default CalendarScreen;
