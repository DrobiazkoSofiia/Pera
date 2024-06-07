import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import CalendarScreen from '../components/CalendarScreen';
import globalStyles from './GlobalStyles';
import { meals as initialMeals } from './MealData';
import { CartContext } from './CartContext';
import { videos } from './VideoData';


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

export default function Home({ }) {
  const navigation = useNavigation();
  const [mealCards, setMealCards] = useState(initialMeals);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationModal1, setShowConfirmationModal1] = useState(false);
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);

  const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
    <TouchableOpacity onPress={onPress} style={[globalStyles.button, style]}>
       {icon && <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />}
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );


  const route = useRoute();
  const { newMeal } = route.params || {};
  const { username, childname, avatarSource } = route.params || {};
  

  useEffect(() => {
    const { newMeal } = route.params || {};
    if (newMeal) {
      setMealCards(prevMeals => [...prevMeals, newMeal]);
    }
  }, [route.params]);



const calculateTotalKkal = () => {
  let totalKkal = 0;
  
  // Пройдіться по першим шести об'єктам mealCards та додайте їхні значення kkal до totalKkal
  for (let i = 0; i < 5 && i < mealCards.length; i++) {
    totalKkal += mealCards[i].kkal;
  }

  return totalKkal;
};
const { addToCart } = useContext(CartContext);

const specificIds = [1, 2, 3, 4, 5, 6];
const specificMeals = mealCards.filter(meal => specificIds.includes(meal.id));

const handleGetMyPlan = () => {
  addToCart(specificMeals);
  setShowConfirmationModal2(true);
};
const filteredVideos = videos.filter(video => video.id === 1 || video.id === 2 || video.id === 3);


  return (
    <View style={styles.container}>
      <ScrollView>
      <Header />
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[globalStyles.title2, {marginBottom:9}]}>Welcome { username }</Text>
            <Text style={globalStyles.productIngridients1}>Get { childname }'s menu for the day!</Text>
          </View>
          <CalendarScreen style={{marginBottom:33}}></CalendarScreen>
          <View style={styles.more}>
            <DetailsButton />
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
          {filteredVideos.map((video, index) => (
            <TouchableOpacity key={video.id} onPress={() => navigation.navigate('VideoPage', { video, username, childname, avatarSource })}>
            <VideoCard video={video} />
          </TouchableOpacity>          
        ))}
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
modalView1: {
  width: 373,
  height: 'auto',
  flexShrink: 0,
  borderRadius: 15,
  backgroundColor: '#FFF',
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
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
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
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
    paddingHorizontal: '5%',
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
    marginBottom: 47,
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
