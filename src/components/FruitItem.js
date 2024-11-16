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
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>See</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 200,
    height: 260,
    position: 'relative',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#ff6347',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FruitItem;