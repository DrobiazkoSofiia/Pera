import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const MealCard = ({ imageSource, title, name, onButtonPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.mealTitle}>{title}</Text>
        <Text style={styles.mealName}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.detailsButton} onPress={onButtonPress}>
        <Text style={styles.detailsButtonText}>View details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 10,
    width: 250, // Ширина карточки
  },
  image: {
    width: '100%',
    height: 230, // Высота изображения
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  mealName: {
    fontSize: 16,
    color: '#333',
  },
  detailsButton: {
    backgroundColor: '#007EB1',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  detailsButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MealCard;
