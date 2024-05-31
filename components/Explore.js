import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation,  useRoute  } from '@react-navigation/native'; // Import useNavigation hook
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import HeaderExplore from '../components/HeaderExplore';
import Article from '../components/Article';
import ModalMenu from '../components/ModalMenu';
import globalStyles from './GlobalStyles';
import { videos } from './VideoData';
import { articles } from './ArticleData';


export default function HomeNotRegistered() {
  const navigation = useNavigation();
  const filteredVideos = videos.filter(video => video.id === 1 || video.id === 2 || video.id === 3);
  const filteredVideos1 = videos.filter(video => video.id === 4 || video.id === 5 || video.id === 6);
  const filteredArticles = articles.filter(article => article.id === 1 || article.id === 2 || article.id === 3 || article.id === 4);
  const filteredArticles1 = articles.filter(article => article.id === 5 || article.id === 6 || article.id === 7 || article.id === 8);

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
            {filteredArticles.map((article, index) => (
            <TouchableOpacity key={article.id} onPress={() => navigation.navigate('ArticlePage', { article })}>
            <Article article={article} />
          </TouchableOpacity>          
        ))}
            </ScrollView>
          </View>
          <View style={{ marginBottom: 33 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Recipes</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filteredVideos.map((video, index) => (
            <TouchableOpacity key={video.id} onPress={() => navigation.navigate('VideoPage', { video })}>
            <VideoCard video={video} />
          </TouchableOpacity>          
        ))}
            </ScrollView>
          </View>
          <View style={{ marginBottom: 26 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Allergies</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filteredArticles1.map((article, index) => (
            <TouchableOpacity key={article.id} onPress={() => navigation.navigate('ArticlePage', { article })}>
            <Article article={article} />
          </TouchableOpacity>          
        ))}
            </ScrollView>
          </View>
          <View style={{ marginBottom: 17 }}>
            <View>
              <Text style={[globalStyles.title2, { marginBottom: 20 }]}>Might be interesting</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filteredVideos1.map((video, index) => (
            <TouchableOpacity key={video.id} onPress={() => navigation.navigate('VideoPage', { video })}>
            <VideoCard video={video} />
          </TouchableOpacity>          
        ))}
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
