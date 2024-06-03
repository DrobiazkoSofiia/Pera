import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';

export default function VideoPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { video } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    navigation.goBack();
  };

  const handleVideoPress = () => {
    setIsPlaying(true);
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
          {isPlaying ? (
            <WebView
              source={{ uri: `https://www.youtube.com/embed/${video.youtubeId}` }}
              style={{ width: '100%', height: 308, borderRadius: 30, marginBottom: 19 }}
            />
          ) : (
            <TouchableOpacity onPress={handleVideoPress}>
              <Image source={video.imageSource} style={{ width: '100%', height: 308, borderRadius: 30, marginBottom: 19 }} />
            </TouchableOpacity>
          )}
          <View style={{ paddingLeft: 35 }}>
            <Text style={[globalStyles.videoTitle, { marginBottom: 6 }]}>{video.title}</Text>
            <Text style={[globalStyles.textVideo, { marginBottom: 18 }]}>{`${video.duration} · ${video.views} views`}</Text>
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
            <Text style={[globalStyles.videoIngridientsTitle, { marginBottom: 12 }]}>Ingredients</Text>
            <Text style={[globalStyles.smallBlackText, { marginBottom: 50, width: 371 }]}>{video.ingridients}</Text>
            <View style={{ alignItems: 'baseline', flexDirection: 'row', marginBottom: '10%' }}>
              <View style={{ width: 110, height: 132, borderRadius: 7, backgroundColor: '#FFC4BC', alignItems: 'center', justifyContent: 'center', marginRight: 117 }}>
                <Image source={video.mealVideoImg} style={{ width: 100, height: 100 }} />
              </View>
              <Text style={[globalStyles.textVideoBut, { color: '#238E88' }]}>Comments?</Text>
            </View>
            <View style={{ paddingTop:'10%' }}>
              <View style={{ width: 354, height: 106, backgroundColor: '#ECECEC', borderRadius: 16, marginBottom: 58 }}>
                <Text style={[globalStyles.productIngridients1, { paddingLeft: 22, paddingTop: 9, paddingBottom: 10 }]}>Comments?</Text>
                <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-start', paddingLeft: 22 }}>
                  <Image source={require('../assets/commentImg.png')} style={{}} />
                  <Text style={[globalStyles.textDietName2, { width: 250 }]}>Thanks for the recipe. This is now my child's favorite dish!</Text>
                </View>
              </View>
            </View>
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
