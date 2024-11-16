// src/components/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import FruitItem from './FruitItem';

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

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceQuery, setPriceQuery] = useState('');

  const filteredFruits = fruits.filter(fruit => {
    const matchesName = fruit.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = fruit.price.includes(priceQuery);
    return matchesName && matchesPrice;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Fruits</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Search by price..."
        value={priceQuery}
        onChangeText={setPriceQuery}
      />
      <FlatList
        data={filteredFruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FruitItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  list: {
    paddingBottom: 20,
  },
});

export default SearchScreen;