import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import globalStyles from './GlobalStyles';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { article, username, childname, avatarSource } = route.params;
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
          <Image source={{ uri: article.Picture }} style={styles.headerImage} />
          <Image source={require('../assets/icons/articlePageImg.png')} style={styles.iconImage} />
          <View style={styles.textContent}>
            <Text style={[globalStyles.title2, styles.title]}>{article.title}</Text>
            <Text style={[globalStyles.smallBlackText, styles.description]}>{article.description}</Text>
            <Text style={[globalStyles.articleLikeText1, styles.likeText]}>Like this article?</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={handleHeartPress1}>
                <Image source={isHeartClicked1 ? require('../assets/icons/likedBlueIcon.png') : require('../assets/icons/heartBlueIcon.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHeartPress}>
                <Image source={isHeartClicked ? require('../assets/icons/dislikedBlueIcon.png') : require('../assets/icons/dislikeBlueIcon.png')} style={styles.icon} />
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
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 328,
    marginBottom: 22,
  },
  iconImage: {
    width: 102,
    height: 73,
    position: 'absolute',
    top: 273,
    left: 19,
  },
  textContent: {
    paddingLeft: 35,
    paddingRight: 35,
  },
  title: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 38,
    width: '100%',
  },
  subtitle: {
    marginBottom: 13,
  },
  paragraph: {
    marginBottom: 22,
    width: '100%',
  },
  likeText: {
    marginBottom: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 58,
    paddingLeft: 10,
  },
  icon: {
    width: 35,
    height: 33,
  },
});
 
