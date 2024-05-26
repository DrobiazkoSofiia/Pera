import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import HeaderExplore from '../components/HeaderExplore';
import Article from '../components/Article';
import ModalMenu from '../components/ModalMenu';
import globalStyles from './GlobalStyles';

export default function HomeNotRegistered() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderExplore />
        <View style={styles.content}>
          <View style={styles.top}>
            <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Filter by Topic or Milestone</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
              <ModalMenu />
            </View>
          </View>
          <View style={{ marginBottom: 26 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Most popular</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Article 
                imageSource={require('../assets/article1Img.png')}
                title="Christmas menu for child"
              />
              <Article 
                imageSource={require('../assets/article2Img.png')}
                title="Feeding Issues: Baby Spitting Up"
              />
              <Article 
                imageSource={require('../assets/article3Img.png')}
                title="6 Tips for Traveling with Baby"
              />
              <Article 
                imageSource={require('../assets/article4Img.png')}
                title="How Babies Develop Allergies"
              />
            </ScrollView>
          </View>
          <View style={{ marginBottom: 33 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Recipes</Text>
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
                views="15,6k"
              />
              <VideoCard 
                imageSource={require('../assets/video5.png')}
                title="Butternut squash mac & cheese"
                duration="1:02 min."
                views="9,8k"
              />
            </ScrollView>
          </View>
          <View style={{ marginBottom: 26 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Allergies</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Article 
                imageSource={require('../assets/allergiesImg.png')}
                title="What is a Food Allergy?"
              />
              <Article 
                imageSource={require('../assets/article5Img.png')}
                title="Cow`s Milk Allergies in Babies"
              />
              <Article 
                imageSource={require('../assets/article6Img.png')}
                title="How Babies Develop Allergies"
              />
              <Article 
                imageSource={require('../assets/article7Img.png')}
                title="Common Food Allergies"
              />
            </ScrollView>
          </View>
          <View style={{ marginBottom: 17 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Might be interesting</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <VideoCard 
                imageSource={require('../assets/video6.png')}
                title="Banana Oatmeal Waffels"
                duration="1:06 min."
                views="14,8k"
              />
              <VideoCard 
                imageSource={require('../assets/video7.png')}
                title="Butternut squash mac & cheese"
                duration="1:06 min."
                views="14,8k"
              />
              <VideoCard 
                imageSource={require('../assets/video8.png')}
                title="Congratulations"
                duration="1:06 min."
                views="14,8k"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    height: 'auto',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    bottom: 32,
    height: '100%',   
    paddingLeft: 30,
    paddingHorizontal: 30,
    paddingBottom: 53,
  },
  top: {
    paddingTop: 35,
    marginBottom: 20,
  },
  footer: {
    position: 'absolute', 
    bottom: 0, 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  modalView: {
    width: 373,
    height: 'auto',
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 20,
    margin: 20,
    paddingHorizontal: 35,
    paddingVertical: 15,
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
