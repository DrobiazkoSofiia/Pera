import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';
import {  useRoute } from '@react-navigation/native';

export default function ChildAccount() {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.goBack();
  };
  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1', { username, childname, avatarSource });
  };
  const route = useRoute();
  const { childname, avatarSource, username } = route.params || {};
    return (

        <View style={styles.container}>
            
            <ScrollView>
           <View style={styles.content}>

           <View style={styles.topPart}>
           <ImageBackground source={require('../assets/back/childAccountImg.png')} style={styles.imageBackground} >
            <View style={{paddingLeft:30, paddingTop:70, alignItems:'center', justifyContent:'center'}}>
           <TouchableOpacity>
           {avatarSource === null ? (
                    <Image source={require('../assets/icons/babyboyIcon.png')} style={styles.baby} />
                  ) : (
                    <Image source={{ uri: avatarSource }} style={styles.baby} />
                  )}
        </TouchableOpacity>
        <Text style={globalStyles.textParentProfileSuccess}>{ childname }</Text>
        </View>
           </ImageBackground>
            </View>
            <View style={styles.bottomPart}>
                <View style={{alignItems:'flex-end', paddingRight:18, flexDirection:'column', marginBottom:119}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity onPress={handlePress1}>
               <View style={{alignItems:'center', justifyContent:'center', width:40, height:40, backgroundColor:'#7EC845', borderRadius:35}}>
                <Image style={styles.icon} source={require('../assets/icons/plusIcon.png')} />
                </View>
                </TouchableOpacity>
                <Text style={[globalStyles.smallBlackText,{ textAlign:'center', width:95}]}>Add one more child</Text>
               </View>
               </View>
               <View style={{alignItems:'flex-start', paddingLeft:44}}>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>Primary Diet Type</Text>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>Payment methods</Text>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>My menus</Text>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>Support</Text>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>Feedback</Text>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>Log out</Text>
               <Text style={[globalStyles.bigButtonText1,{marginBottom:50}]}>Statisctics</Text>
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
        backgroundColor:'#F5F5F5'
    },
    imageBackground: { 
     justifyContent: 'center',
     height: 274,
     
     
      },
      baby: {
        width: 131,
        height: 131,
        borderRadius: 90,
        borderColor: 'white',
        borderWidth: 1,

      },
      topPart:{
      },
      icon:{
        width:35,
        height:35,
      },

  });
  