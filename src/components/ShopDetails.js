import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const ShopDetails = ({ shop }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={shop.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{shop.name}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color={COLORS.warning} />
          <Text style={styles.rating}>{shop.rating}</Text>
          <Text style={styles.reviews}>({shop.reviews} avis)</Text>
        </View>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={16} color={COLORS.primary} />
          <Text style={styles.location}>{shop.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: SIZES.base * 2,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    overflow: 'hidden',
    ...SHADOWS.light,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.base * 2,
  },
  name: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  rating: {
    fontSize: SIZES.font,
    color: COLORS.text,
    marginLeft: SIZES.base / 2,
    marginRight: SIZES.base,
  },
  reviews: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
    marginLeft: SIZES.base / 2,
  },
});

export default ShopDetails;