import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import HeaderExplore from '../components/HeaderExplore';
import Article from '../components/Article';
import ModalMenu from '../components/ModalMenu';
import globalStyles from './GlobalStyles';

const API_BASE_URL = 'https://kutsenko.be/api/v1';

export default function HomeNotRegistered() {
  const navigation = useNavigation();
  const [recipesVideos, setRecipesVideos] = useState([]);
  const [interestingVideos, setInterestingVideos] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [allergiesArticles, setAllergiesArticles] = useState([]);
  const route = useRoute();
  const { username, childname, avatarSource } = route.params || {};

  useEffect(() => {
    fetchVideos();
    fetchArticles();
  }, []);

  const fetchVideos = async () => {
    try {
      const recipesResponse = await axios.get(`${API_BASE_URL}/videos`, {
        params: { ids: '15,16,17,18' },
      });
      const interestingResponse = await axios.get(`${API_BASE_URL}/videos`, {
        params: { ids: '23,24,25,19' },
      });
      setRecipesVideos(recipesResponse.data);
      setInterestingVideos(interestingResponse.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const fetchArticles = async () => {
    try {
      const popularResponse = await axios.get(`${API_BASE_URL}/articles`, {
        params: { ids: '12,13,14,15' },
      });
      const allergiesResponse = await axios.get(`${API_BASE_URL}/articles`, {
        params: { ids: '16,17,18,19' },
      });
      setPopularArticles(popularResponse.data);
      setAllergiesArticles(allergiesResponse.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

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
              {popularArticles.map((article) => (
                <TouchableOpacity key={article.id} onPress={() => navigation.navigate('ArticlePage', { article, username, childname, avatarSource })}>
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
              {recipesVideos.map((video) => (
                <TouchableOpacity key={video.id} onPress={() => navigation.navigate('VideoPage', { video, username, childname, avatarSource })}>
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
              {allergiesArticles.map((article) => (
                <TouchableOpacity key={article.id} onPress={() => navigation.navigate('ArticlePage', { article, username, childname, avatarSource })}>
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
              {interestingVideos.map((video) => (
                <TouchableOpacity key={video.id} onPress={() => navigation.navigate('VideoPage', { video, username, childname, avatarSource })}>
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
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
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
});



