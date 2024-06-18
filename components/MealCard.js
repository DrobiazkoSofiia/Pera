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
        <Text style={styles.detailsButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FAE03C',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 10,
    marginBottom: 60,
    width: 250, 

  },
  image: {
    width: '90%',
    height: 230,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf:'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 200,
    alignSelf:'center',
    width:200,
    height:75,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation:5,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    alignSelf:'center'

  },
  mealName: {
    fontSize: 16,
    color: '#333',
    paddingLeft:14
  },
  detailsButton: {
    backgroundColor: '#7EC845',
    borderRadius: 20,
    marginRight: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
    alignSelf:'flex-end'

  },
  detailsButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MealCard;
