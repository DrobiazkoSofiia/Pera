import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import ViewButton from '../components/MealCard';
import globalStyles from './GlobalStyles';
import {meals as initialMeals } from './MealData';
import {  useRoute } from '@react-navigation/native';





const MoreButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.moreButton}>
      <Text style={styles.buttonText}>More info</Text>
    </TouchableOpacity>
  );
}

const DetailsButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.moreButton}>
      <Text style={styles.buttonText}>View details</Text>
    </TouchableOpacity>
  );
}

export default function Home() {
  const [mealCards, setMealCards] = useState(initialMeals);
  const navigation = useNavigation();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationModal1, setShowConfirmationModal1] = useState(false);
  const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
    <TouchableOpacity onPress={handlePress33} style={[globalStyles.button, style]}>
       {icon && <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />}
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
  const handlePress33 = () => {
    navigation.navigate('Cart');
  };

  const handleDelete = (id) => {
    setMealCards(mealCards.filter(meal => meal.id !== id));
    setShowConfirmationModal1(true);
    setShowConfirmationModal(false);
  };
  const route = useRoute();
  const { newMeal } = route.params || {};
  
useEffect(() => {
  if (newMeal) {
    setMealCards([...mealCards, newMeal]);
  }
}, [newMeal]);



  return (
    <View style={styles.container}>
      <ScrollView>
      <Header />
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[globalStyles.title2, {marginBottom:9}]}>Welcome Ana</Text>
            <Text style={globalStyles.productIngridients1}>Get Denis's menu for the day!</Text>
          </View>
          <View style={styles.calendar}>
            <TouchableOpacity onPress={() => setShowConfirmationModal(true)}>
            <Image source={require('../assets/calendar.png')} />
            </TouchableOpacity>
          </View>
          <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection:'row'}}>
  {mealCards.map((mealCard, index) => (
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
      onButtonPress={() => navigation.navigate('DescriptMealCard', { mealCard, handleDelete })}
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
          </View>
          <View>
            <Text style={[globalStyles.title2, {marginBottom:34}]}>Analysis of the diet</Text>
          </View>
          <View>
            <Image style={styles.analysis} source={require('../assets/analysis.png')} />
          </View>
          <View style={styles.more}>
            <DetailsButton />
          </View>
          <View style={{marginBottom:17}}>
          <View>
            <Text style={[globalStyles.title2, {marginBottom:31}]}>Recipes</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <VideoCard 
              imageSource={require('../assets/video.png')}
              title="Carrot Cake Muffins"
              duration="1:06 min."
              views="14,8k"
            />
         <VideoCard 
              imageSource={require('../assets/video4.png')}
              title="Banana Oatmeal Waffels"
              duration="0:48 min."
              views="15,6k"/>
         <VideoCard 
              imageSource={require('../assets/video5.png')}
              title="Butternut squash mac & cheese"
              duration="1:02 min."
              views="9,8k"/>
             
          </ScrollView>
          </View>
        </View>
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
                        <Text style={[globalStyles.title2]}>Menu For Next Week</Text>
                        
                        <Image style={{width:280, height:104, marginTop:23,  marginBottom:23}} source={require('../assets/calendar.png')} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row'}}>
  {mealCards.map((mealCard, index) => (
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
     onButtonPress={() => navigation.navigate('DescriptMealCard', { mealCard, handleDelete })}
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
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Confirm"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                       
                        </View>
                </View>
            </Modal>
            

      <View style={styles.footer}>
      <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
 container: {
    height: 'auto',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius:39,
    borderTopRightRadius:39,
    bottom: 32,
    height:'100%',   
    paddingLeft: 30,
    paddingHorizontal: 30,
    paddingBottom: 106, // Adjust this value according to your footer height
  },
  top: {
    paddingTop: 35,
    marginBottom: 20,
  },
  calendar: {
    width: 351,
    height: 131,
    marginBottom: 20,
  },
  mealCard: {
    marginRight: 10, // Add margin between MealCard elements
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
  analysis: {
    width: 369,
    height: 261,
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  videoCard:{
    marginRight: 10,
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
