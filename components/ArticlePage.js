import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';

export default function VideoPage() {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.goBack();
  };
  const [isHeartClicked, setIsHeartClicked] = useState(false);
    const handleHeartPress = () => {
      setIsHeartClicked(!isHeartClicked);
      setIsHeartClicked(true);
      setIsHeartClicked1(false);
    };
    const [isHeartClicked1, setIsHeartClicked1] = useState(false);
    const handleHeartPress1 = () => {
        setIsHeartClicked1(!isHeartClicked1);
        setIsHeartClicked1(true);
        setIsHeartClicked(false);
      };
    return (

        <View style={styles.container}>
            
            <ScrollView>
           <View style={styles.content}>
           <Image source={require('../assets/article1Img.png')} style={{width:'100%', height:328, marginBottom:22}}/>
           <Image source={require('../assets/icons/articlePageImg.png')} style={{width:102, height:73, position:'absolute',top:273, left:19,}}/>
           <View style={{paddingLeft:35}}>
           <Text style={[globalStyles.title2,{marginBottom:5}]}>Christmas menu for children</Text>
           <Text style={[globalStyles.smallBlackText,{marginBottom:38, width:352}]}>Сhristmas party season is on its way, and with so much to think about we want to make sure you have everything you need for your baby and toddler Christmas recipes.</Text>
           <Text style={[globalStyles.textDietName2, {marginBottom:13}]}>1. Carrot Cake Muffins</Text>
           <Text style={[globalStyles.smallBlackText, {marginBottom:22, width:351}]}>For baby carrot muffins are just brilliant! They can be made well ahead of time and the best part is that they freeze. </Text>
           <View style={{alignItems:'center', flexDirection:'row', marginBottom:22, gap:15}}>
           <Image source={require('../assets/articlePage1Img.png')} style={{width:170, height:206, borderRadius:10,}}/>
           <View style={{width:170, height:206, borderRadius:10, backgroundColor:'#FFC4BC', alignItems:'center', justifyContent:'center'}}>
           <Image source={require('../assets/mealVideoImg.png')} style={{width:155, height:155,}}/>
           </View>
           </View>
           <View style={{flexDirection:'row', gap:5, marginBottom:31}}>
           <Text style={[globalStyles.productIngridients1]}>You can watch recepi</Text>
           <Text style={[globalStyles.productIngridients1, {color:'#007EB1'}]}>here</Text>
          </View>
          <Text style={[globalStyles.textDietName2, {marginBottom:13}]}>2. Christmas menu for children</Text>
           <Text style={[globalStyles.smallBlackText, {marginBottom:22, width:351}]}>For baby led weaning muffins are just brilliant! They can be made well ahead of time and the best part is that they freeze. </Text>
           <View style={{alignItems:'center', flexDirection:'row', marginBottom:22, gap:15}}>
           <Image source={require('../assets/articlePage2Img.png')} style={{width:170, height:206, borderRadius:10,}}/>
           <View style={{width:170, height:206, borderRadius:10, backgroundColor:'#FFA64F', alignItems:'center', justifyContent:'center'}}>
           <Image source={require('../assets/productMeal2Img.png')} style={{width:124, height:152,}}/>
           </View>
           </View>
           <View style={{flexDirection:'row', gap:5, marginBottom:31}}>
           <Text style={[globalStyles.productIngridients1]}>You can watch recepi</Text>
           <Text style={[globalStyles.productIngridients1, {color:'#007EB1'}]}>here</Text>
          </View>
          <Text style={[globalStyles.textDietName2, {marginBottom:13}]}>3. Christmas menu for children</Text>
           <Text style={[globalStyles.smallBlackText, {marginBottom:22, width:351}]}>For baby led weaning muffins are just brilliant! They can be made well ahead of time and the best part is that they freeze. So make lots, freeze and the night before you (or Santa Claus) wants to eat them you can remove from the freezer to defrost.</Text>
           <View style={{alignItems:'center', flexDirection:'row', marginBottom:22, gap:15}}>
           <Image source={require('../assets/video4.png')} style={{width:170, height:206, borderRadius:10,}}/>
           <View style={{width:170, height:206, borderRadius:10, backgroundColor:'#D5EBF4', alignItems:'center', justifyContent:'center'}}>
           <Image source={require('../assets/articlePage3Img.png')} style={{width:84, height:174,}}/>
           </View>
           </View>
           <View style={{flexDirection:'row', gap:5, marginBottom:31}}>
           <Text style={[globalStyles.productIngridients1]}>You can watch recepi</Text>
           <Text style={[globalStyles.productIngridients1, {color:'#007EB1'}]}>here</Text>
           </View>
           <Text style={[globalStyles.articleLikeText1, {marginBottom:25}]}>Like this article?</Text>
           <View style={{flexDirection:'row', gap:16, marginBottom:58, paddingLeft:10}}>
            <TouchableOpacity onPress={handleHeartPress1}>
            <Image source={isHeartClicked1 ? require('../assets/icons/likedBlueIcon.png') : require('../assets/icons/heartBlueIcon.png')} style={{width:35, height:33,}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHeartPress}>
            <Image source={isHeartClicked ? require('../assets/icons/dislikedBlueIcon.png') : require('../assets/icons/dislikeBlueIcon.png')} style={{width:35, height:33, marginRight:180}}/>
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
        flex: 1,
        backgroundColor:'white'
    },
    

  });
  