import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList, Image, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MealCard from '../components/MealCard';
import globalStyles from './GlobalStyles';
import { meals as initialMeals } from './MealData';
import { CartContext } from './CartContext';

const CalendarScreen = () => {
  const navigation = useNavigation();
  const [mealCards, setMealCards] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [days, setDays] = useState([]);
  const [specificMeals, setSpecificMeals] = useState([]);


  const route = useRoute();
  const { username, childname, avatarSource } = route.params || {};
  const { newMeal } = route.params || {};

  useEffect(() => {
    // Оновлюємо specificMeals при зміні mealCards
    setSpecificMeals(mealCards.filter(meal => meal.day === selectedDay));
  }, [selectedDay, mealCards]);

  const handleAddMeal = (newMeal) => {
    // Додаємо новий обід до mealCards
    setMealCards((prevMeals) => [ { ...newMeal, day: selectedDay }, ...prevMeals,]);
    // Оновлюємо specificMeals, щоб відобразити тільки обіди для обраного дня
    setSpecificMeals((prevMeals) => [ { ...newMeal, day: selectedDay }, ...prevMeals,]);
  };
  useEffect(() => {
    const today = new Date();
    const todayDate = today.getDate().toString();
    setSelectedDay(todayDate);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayIndex = today.getDay(); // Get the index of today (0-6, Sun-Sat)
    
    // Generate the days array starting from Sunday
    const generatedDays = dayNames.map((name, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - todayIndex + index); // Adjust the date to match the day name
      return {
        number: date.getDate().toString(),
        name: name,
      };
    });

    setDays(generatedDays);

    // Generate meals dynamically based on the days
    const generatedMeals = generatedDays.flatMap((day, dayIndex) => {
      return initialMeals.slice(0, 6).map((meal, mealIndex) => ({
        ...meal,
        day: day.number, // Assign day number to each meal
        id: `${day.number}-${mealIndex}` // Ensure unique id for each meal
      }));
    });

    setMealCards(generatedMeals);
  }, []);

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
    setMealCards(prevMeals => prevMeals.filter(meal => meal.id !== id));
  };

  const calculateTotalKkal = () => {
    let totalKkal = 0;
    // Пройдіться по першим шести об'єктам mealCards та додайте їхні значення kkal до totalKkal
    for (let i = 0; i < 5 && i < mealCards.length; i++) {
      totalKkal += mealCards[i].kkal;
    }
    return totalKkal;
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
            <TouchableOpacity onPress={() => setSelectedDay(item.number)} style={[styles.day, selectedDay === item.number && styles.selectedDayBut]}>
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
          keyExtractor={(item) => item.number} // Ensure unique keys
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {specificMeals.map((mealCard) => (
          <MealCard
            key={mealCard.id}
            backgroundColor={mealCard.backgroundColor}
            imageSource={mealCard.imageSource}
            title={mealCard.title}
            name={mealCard.name}
            width={mealCard.width}
            height={mealCard.height}
            width1={mealCard.width1}
            height1={mealCard.height1}
            widthImg={mealCard.widthImg}
            heightImg={mealCard.heightImg}
            fontSize1={mealCard.fontSize1}
            widthText={mealCard.widthText}
            heightText={mealCard.heightText}
            onButtonPress={() =>
                navigation.navigate('DescriptMealCard', {
                  mealCard,
                  handleDelete,
                  addMeal: handleAddMeal, username, childname, avatarSource})}
            titleBut={mealCard.titleBut}
            ingridients={mealCard.ingridients}
            smallIngridients={mealCard.smallIngridients}
            kkal={mealCard.kkal}
            time={mealCard.time}
            ageCategory={mealCard.ageCategory}
            ageMonth={mealCard.ageMonth}
            ageCategoryImg={mealCard.ageCategoryImg}
            smallProduct1={mealCard.smallProduct1}
            smallProduct2={mealCard.smallProduct2}
            smallProduct3={mealCard.smallProduct3}
            smallProduct4={mealCard.smallProduct4}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal}
            >
                <View style={styles.centeredView}>
                <View style={[styles.modalView, {height:'auto'}]}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <Text style={[globalStyles.title2, {marginBottom:27}]}>Menu For Next Week</Text>
                        <View  style={{width:360, height:104, marginBottom:27}}>
                        <CalendarScreen style={[styles.day1,]}></CalendarScreen>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row', paddingLeft:'0.5%'}}>
                        {specificMeals.map((mealCard, index) => (
     <MealCard
     key={index}
     backgroundColor={mealCard.backgroundColor}
     imageSource={mealCard.imageSource}
     title={mealCard.title}
     name={mealCard.name}
     width={mealCard.width}
     height={mealCard.height}
     width1={mealCard.width1}
     height1={mealCard.height1}
     widthImg={mealCard.widthImg}
     heightImg={mealCard.heightImg}
     fontSize1={mealCard.fontSize1}
     widthText={mealCard.widthText}
     heightText={mealCard.heightText}
     onButtonPress={() => navigation.navigate('DescriptMealCard', { mealCard, handleDelete, username, childname, avatarSource })}
     titleBut={mealCard.titleBut}
     ingridients={mealCard.ingridients}
     smallIngridients={mealCard.smallIngridients}
     kkal={mealCard.kkal}
     time={mealCard.time}
     ageCategory={mealCard.ageCategory}
     ageMonth={mealCard.ageMonth}
     ageCategoryImg={mealCard.ageCategoryImg}
     smallProduct1={mealCard.smallProduct1}
     smallProduct2={mealCard.smallProduct2}
     smallProduct3={mealCard.smallProduct3}
     smallProduct4={mealCard.smallProduct4}
     navigation={navigation}
     
   />
  ))}

            </View>
                        </ScrollView>
                        <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>{calculateTotalKkal()}kkal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Confirm"  onPress={handleGetMyPlan} />
                        </View>
                       
                        </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal2}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView1}>
                    <View style={{alignSelf:'flex-end', marginBottom:24}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal2(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center', justifyContent:'center',flex:1}}>
          <Image style={{marginBottom:29, width:298, height:232}} source={require('../assets/notRegisteredChildImg.png')}/>
          <Text style={[globalStyles.bigButtonText1, {marginBottom:26,}]}>Your meal plan was added to Cart</Text>
          <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:46}]} onPress={() => setShowConfirmationModal2(false)}>
            <Text style={globalStyles.bigButtonText}>Done</Text>
           </TouchableOpacity>
           </View>
                        
                    </View>
                    </ScrollView>
                </View>
            </Modal>
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
    alignItems:'center',
    justifyContent:'center'
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
    fontWeight:'bold'
  },
  selectedDayBut: {
    backgroundColor: '#7EC845',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent:'center',
    gap: 6,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom:25,
  },
  mealContainer: {
    padding: 10,
    flexDirection:'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  paddingVertical:15,
  alignItems: "center",
  justifyContent: "center", // Add this line to center the content vertically
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
},
modalView: {
  width: 360,
  height: 217, // Adjust the height to accommodate the text
  flexShrink: 0,
  borderRadius: 15,
  backgroundColor: '#FFF',
  elevation: 10,
  margin: 20,
  padding: 10,
  alignItems: "center",
  justifyContent: "center", // Add this line to center the content vertically
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
},
});

export default CalendarScreen;
