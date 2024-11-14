import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assurez-vous d'avoir installé @expo/vector-icons

const FruitItem = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!item) {
    return <Text>No item data available</Text>;
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color="red"
        style={styles.icon}
        onPress={toggleFavorite}
      />
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <View style={[styles.buttonContainer, { alignItems: 'center' }]}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 200,
    height: 250,
    position: 'relative',
    alignItems: 'center', // Center content horizontally
  },
  imageContainer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: '80%',
    height: 60,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
});

export default FruitItem;