import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Text, useWindowDimensions } from 'react-native';
import FruitItem from './FruitItem';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo

const fruits = [
    { id: '1', name: 'Orange', price: '$11', image: require('./../assets/icon.png') },
    { id: '2', name: 'Grape', price: '$12', image: require('./../assets/icon.png') },
    { id: '3', name: 'Banana', price: '$13', image: require('./../assets/icon.png') },
    { id: '4', name: 'Apple', price: '$14', image: require('./../assets/icon.png') },
    { id: '5', name: 'Mango', price: '$15', image: require('./../assets/icon.png') },
    { id: '6', name: 'Pineapple', price: '$16', image: require('./../assets/icon.png') },
    { id: '7', name: 'Strawberry', price: '$17', image: require('./../assets/icon.png') },
    { id: '8', name: 'Watermelon', price: '$18', image: require('./../assets/icon.png') },
    { id: '9', name: 'Cherry', price: '$19', image: require('./../assets/icon.png') },
    { id: '10', name: 'Kiwi', price: '$20', image: require('./../assets/icon.png') },
];

const AllProductScreen = () => {
  const [cartItems, setCartItems] = useState(fruits);
  const { width } = useWindowDimensions();
  const numColumns = Math.floor(width / 200);

  const renderHeader = () => (
    <Text style={styles.title}>All Product</Text>
  );

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FruitItem item={item} />}
      numColumns={numColumns}
      key={numColumns}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    paddingBottom: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default AllProductScreen;