import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const FruitItem = ({ item }) => {
  const { addToCart } = useApp();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => addToCart(item)}
    >
      <View style={[styles.imageContainer, { backgroundColor: `${item.color}20` }]}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: SIZES.base * 2,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: SIZES.base * 2,
    ...SHADOWS.light,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: SIZES.base,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  name: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SIZES.base,
  },
  price: {
    fontSize: SIZES.font,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default FruitItem;