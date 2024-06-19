import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';

export default function VideoPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { videoId } = route.params;
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isHeartClicked1, setIsHeartClicked1] = useState(false);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const response = await axios.get(`https://kutsenko.be/api/v1/videos/${videoId}`);
      setVideo(response.data);
    } catch (error) {
      console.error('Error fetching video data', error);
    }
  };

  const handlePress = () => {
    navigation.goBack();
  };

  const handleVideoPress = () => {
    setIsPlaying(true);
  };

  const handleHeartPress = () => {
    setIsHeartClicked(!isHeartClicked);
    setIsHeartClicked(true);
    setIsHeartClicked1(false);
  };

  const handleHeartPress1 = () => {
    setIsHeartClicked1(!isHeartClicked1);
    setIsHeartClicked1(true);
    setIsHeartClicked(false);
  };

  if (!video) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {isPlaying ? (
            <WebView
              source={{ uri: video.url }}
              style={{ width: '100%', height: 308, borderRadius: 30, marginBottom: 19 }}
            />
          ) : (
            <TouchableOpacity onPress={handleVideoPress}>
              <Image source={{ uri: video.cover_picture }} style={{ width: '100%', height: 308, borderRadius: 30, marginBottom: 19 }} />
            </TouchableOpacity>
          )}
          <View style={{ paddingLeft: 35 }}>
            <Text style={[globalStyles.videoTitle, { marginBottom: 6 }]}>{video.title}</Text>
            <Text style={[globalStyles.textVideo, { marginBottom: 18 }]}>{`${video.duration} · ${video.likes_amount} likes`}</Text>
            <View style={{ flexDirection: 'row', gap: 16, marginBottom: 58 }}>
              <TouchableOpacity onPress={handleHeartPress1}>
                <Image source={isHeartClicked1 ? require('../assets/icons/likedBlueIcon.png') : require('../assets/icons/heartBlueIcon.png')} style={{ width: 35, height: 33 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHeartPress}>
                <Image source={isHeartClicked ? require('../assets/icons/dislikedBlueIcon.png') : require('../assets/icons/dislikeBlueIcon.png')} style={{ width: 35, height: 33, marginRight: 180 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ width: 80, height: 40, backgroundColor: '#007EB1', alignItems: 'center', justifyContent: 'center', borderRadius: 32 }}>
                  <Text style={[globalStyles.textVideoBut]}>Share</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={[globalStyles.videoIngridientsTitle, { marginBottom: 12 }]}>Description</Text>
            <Text style={[globalStyles.smallBlackText, { marginBottom: 50, width: 371 }]}>{video.description}</Text>


          </View>
        </View>
      </ScrollView>
      <Footer style={{ width: '100%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'white',
  },
});
