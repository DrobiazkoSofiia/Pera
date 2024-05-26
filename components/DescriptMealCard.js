import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';
import MealCard from './MealCard';

export default function DescriptMealCard() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationModal1, setShowConfirmationModal1] = useState(false);
  const navigation = useNavigation()
  const handleCrossIconPress = () => {
    navigation.goBack();
  };
  const handlePress = () => {
    navigation.goBack();
  };

  const handlePress1 = () => {
    navigation.navigate('DescriptMealCard');
  };

  const handlePress2 = () => {
    navigation.navigate('NewMeal');
  };

    const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
      <TouchableOpacity onPress={onPress} style={[globalStyles.button, style]}>
         {icon && <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />}
        <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const handleHeartPress = () => {
      setIsHeartClicked(!isHeartClicked);
    };
    return (

        <View style={styles.container}>
            <ScrollView>
           <View style={styles.content}>
           <View style={styles.topPart}>
           <ImageBackground source={require('../assets/MealBackImg.png')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.topContent}>

           <View style={styles.top}>
           <TouchableOpacity onPress={ handleCrossIconPress }>
            <Image source={require('../assets/icons/arrowIcon.png')} style={{marginRight:42}}/>
            </TouchableOpacity>
            <View style={globalStyles.categoryName}>
            <Text style={globalStyles.title}>Breakfast</Text>
            </View>
            <TouchableOpacity onPress={handleHeartPress}>
                    <Image source={isHeartClicked ? require('../assets/icons/heartClickedIcon.png') : require('../assets/icons/heartIcon.png')} style={{ marginLeft: 42 }} />
                  </TouchableOpacity>
           </View>
            <Text style={globalStyles.naming}>Organic Morning bowl</Text>
            <Image source={require('../assets/productImage.png')}/>
            <Text style={globalStyles.productIngridients}>Oats, red quinoa & farro with tropical fruits</Text>

            </View>
            </ImageBackground>
            </View>
            <View style={styles.bottomPart}>
                <View style={styles.row1}>
                <View style={styles.descript}>
                <View style={styles.icons}>
                <Image source={require('../assets/icons/kkalIcon.png')} style={{width:16, height:22,}} />
                </View>
                <Text style={styles.kkal}>278 kkal</Text>
                </View>
            
                <View style={styles.descript}>
                <View style={styles.icons}>
                <Image source={require('../assets/icons/timeIcon.png')} style={{width:26, height:26,}} />
                </View>
                <Text style={styles.kkal}>10 min</Text>
                </View>
                </View>
                <View style={styles.row2}>
                <View style={styles.descript}>
                <View style={styles.age}>
                <Image source={require('../assets/icons/crawlerIcon.png')} style={{width:60, height:59,}} />
                </View>
                <View style={styles.ageCategory}>
                <Text style={globalStyles.smallBlackName}>Crawler</Text>
                <Text style={globalStyles.smallGreyText}>8-12 months</Text>
                </View>
                </View>
                <View style={styles.descript}>
                <Image source={require('../assets/icons/certificate1Icon.png')} style={{width:53, height:40,}} />
                <Image source={require('../assets/icons/certificate2Icon.png')} style={{width:43, height:43,}} />
                </View>
                </View>
                <View style={styles.row3}>
                <View style={{paddingLeft:10,}}>
                <Text style={globalStyles.title2}>Ingredients</Text>
                </View>
                <View style={{paddingHorizontal:10,paddingLeft:10, paddingRight:10}}>
                <Text style={globalStyles.smallBlackText}>Organic whole grain oats (contains wheat) and organic red quinoa and organic farro (wheat) cooked in water, organic banana puree, water, organic tapioca starch, organic dried mango, organic dried pineapple, organic lemon juice concentrate, natural vanilla flavor, deoiled sunflower lecithin (for texture), iron (ferrous sulfate).</Text>
                </View>
                </View>
                <View style={styles.row4}>
                <Image source={require('../assets/smallProduct1.png')} style={{width:75, height:75,}} />
                <Image source={require('../assets/smallProduct2.png')} style={{width:75, height:75,}} />
                <Image source={require('../assets/smallProduct3.png')} style={{width:75, height:75,}} />
                <Image source={require('../assets/smallProduct4.png')} style={{width:75, height:75,}} />
                </View>
                <View style={styles.row5}>
                <View style={globalStyles.bigBlueButton}>
                <View style={globalStyles.buttonContent}>
                <Image source={require('../assets/icons/babystollerIcon.png')} style={{width:39, height:39,}} /> 
                <Text style={globalStyles.bigButtonText}>Add to cart</Text>
                </View>
                </View>
                </View>
                <View style={styles.row6}>
        
                <TouchableOpacity
                                onPress={() => setShowConfirmationModal(true)}
                                style={[globalStyles.editButton, { backgroundColor: '#EA6448' }]}
                            >
                                <View style={globalStyles.editButtonContent}>
                                    <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />
                                    <Text style={globalStyles.bigButtonText}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                </View>
                </View>
            </View>
            </ScrollView>

            {showConfirmationModal && (
                <View style={styles.overlay} />
            )}

            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={[globalStyles.bigButtonText, {color:'black'}]}>Are you sure to delete this item?</Text>
                        <View style={{ flexDirection: 'row', marginTop: 27, gap:7 }}>
                            <CustomButton style={[globalStyles.modalButton, {backgroundColor:'white', borderColor:'#007EB1', borderWidth:1}]} textStyle={[globalStyles.editButtonText, {color: 'black'}]} title="Cancel" onPress={() => setShowConfirmationModal(false)} />
                            <CustomButton style={[globalStyles.modalButton, globalStyles.editButtonContent]} textStyle={globalStyles.editButtonText} icon={require('../assets/icons/deleteIcon.png')} title="Delete" onPress={() =>[ setShowConfirmationModal1(true), setShowConfirmationModal(false)]} />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal1}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {height:'auto'}]}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal1(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <Image source={require('../assets/removedImg.png')}/>
                      <Text style={[globalStyles.bigButtonText, {color:'black'}]}>Meal has been removed</Text>
                    </View>

                    <View style={[styles.modalView, {height:346, paddingBottom:16}]}>
                      <View>
                    <Text style={[globalStyles.productIngridients, {marginBottom:16}]}>Other breakfast you might like</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <MealCard
              backgroundColor='#FAE03C'
              imageSource={require('../assets/productImage.png')}
              title="Morning Bowl"
              name="Oats, barley with banana
              and berries"
              width={186}
              height={186}
              width1={166}
              height1={92}
              widthImg={146}
              heightImg={146}
              fontSize1={13}
              onPress={handlePress}
              widthText={150}
              onButtonPress={handlePress1}
              titleBut="Add"
             />
             <MealCard
              backgroundColor='#FFC4BC'
              imageSource={require('../assets/productImage.png')}
              title="Oatmeal"
              name="Banana Strawberry Cereal"
              width={186}
              height={186}
              width1={166}
              height1={92}
              widthImg={146}
              heightImg={146}
              fontSize1={13}
              onPress={handlePress}
              widthText={150}
              titleBut="Add"
             />
            <MealCard
              backgroundColor='#C4BAE6'
              imageSource={require('../assets/productImage.png')}
              title="Oatmeal"
              name="Whole Wheat  Blueberry Cereal"
              width={186}
              height={186}
              width1={166}
              height1={92}
              widthImg={146}
              heightImg={146}
              fontSize1={13}
              onPress={handlePress}
              widthText={150}
              titleBut="Add"
             />
             <MealCard
              backgroundColor='#FFBF00'
              imageSource={require('../assets/icons/plusIcon.png')}
              title="Your Meal"
              name="Add your own meal"
              width={186}
              height={186}
              width1={166}
              height1={92}
              widthImg={146}
              heightImg={146}
              fontSize1={13}
              onPress={handlePress}
              widthText={150}
              heightText={35}
              onButtonPress={handlePress2}
              titleBut="Add"
            />
         </ScrollView>
        </View>
      </View>

     </Modal>
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
        position:'relative',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
    topPart: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      borderBottomWidth: 1, 
      borderColor: '#D5D5D8',
      width: '100%',
      marginBottom:16,
    },
    topContent:{
        marginTop:60,
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
      width: 'auto'
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
    row2:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 19,
        width: 380,
        gap: 57,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    age:{
        width: 89,
        height: 89,
        flexShrink: 0,
        backgroundColor:'white',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageCategory: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    row3:{
        marginLeft: 30,
        marginRight:30,
        marginBottom: 63,
    },
    row4:{
        flex:1,
        flexDirection: 'row',
        marginBottom:40,
    },
    row5:{
        marginBottom: 17,
    },
    row6:{
        flex: 1,
      flexDirection: 'row',
      marginBottom: 35,
      gap: 20,
      alignItems: 'center',

    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
  },
  modalView: {
    width: 360,
    height: 217,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 10,
    margin: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
      
  });
  