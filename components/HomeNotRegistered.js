import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TouchableHighlight, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import HeaderNotRegistered from '../components/HeaderNotRegistered'
import VideoCard from '../components/VideoCard';
import FooterNotRegistered from '../components/FooterNotRegistered';
import ViewButton from '../components/MealCard';
import globalStyles from './GlobalStyles';
import ModalMenu from './ModalMenu';
import {  useRoute } from '@react-navigation/native';
import { videos } from './VideoData';

const DetailsButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.moreButton}>
      <Text style={styles.buttonText}>View details</Text>
    </TouchableOpacity>
  );
}


export default function HomeNotRegistered() {
  const navigation = useNavigation();

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1', { username });
  };
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);
  const route = useRoute();
  const { username } = route.params || {};


  const filteredVideos = videos.filter(video => video.id === 1 || video.id === 2 || video.id === 3);
  return (
    <View style={styles.container}>
      <ScrollView>
      <HeaderNotRegistered />
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[styles.title, {marginBottom:27,}]}>Welcome { username }</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Image style={{marginBottom:29}} source={require('../assets/notRegisteredChildImg.png')}/>
          <Text style={[globalStyles.productIngridients, {marginBottom:27,}]}>You haven't added any children yet</Text>
          <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:71}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Add a child</Text>
           </TouchableOpacity>
           <Text style={[styles.title, {paddingBottom:23,}]}>View an example menu for:</Text>
           <View style={{paddingBottom: 73,}}>
            <ModalMenu/>
           </View>
          </View>
          <View style={{marginBottom:17}}>
          <View>
            <Text style={[styles.title]}>More about Pera</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {filteredVideos.map((video, index) => (
            <TouchableOpacity key={video.id} onPress={() => navigation.navigate('VideoPage', { video })}>
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
                visible={showConfirmationModal2}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end', marginBottom:24}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal2(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center', justifyContent:'center',flex:1}}>
          <Image style={{marginBottom:29, width:298, height:232}} source={require('../assets/notRegisteredChildImg.png')}/>
          <Text style={[globalStyles.bigButtonText1, {marginBottom:26,}]}>To generate a meal plan, please add a child</Text>
          <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:46}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Add a child</Text>
           </TouchableOpacity>
           </View>
                        
                    </View>
                    </ScrollView>
                </View>
            </Modal>
      <View style={styles.footer}>
      <FooterNotRegistered />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView:{

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
    paddingBottom: 73,
  },
  top: {
    paddingTop: 35,
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontFamily: 'Caladea-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    color: 'black',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  babyBoy:{
    width: 39,
    height:39,
    backgroundColor:'white',
    borderRadius: 150,
    justifyContent:'center',
    alignItems: 'center',

  },
  rowAge:{
    flexDirection:'row',
    gap:25,
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
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginBottom: 20,
  },
  videoCard:{
    marginRight: 10,
  },
  footer: {
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align footer to the bottom
    left: 0,
    right: 0,
    alignItems: 'center', // Align items at the center horizontally
  },
  modalView: {
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
  cross:{
    position:'absolute',
    right:25,
    top:18,
    marginBottom:'10%'
  },
  today:{
    width:180,
    height:44,
    backgroundColor: '#7EC845',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
  },
  meal:{
    width: 343,
    height:130,
    backgroundColor:'white',
    borderRadius: 10,
    elevation:7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    paddingTop:8,
    paddingLeft:12,
    flexDirection:'row',
    gap:10,
  },
});
