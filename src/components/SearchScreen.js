import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import FruitItem from './FruitItem';
import fruits from '../assets/fruits';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceQuery, setPriceQuery] = useState('');
  const { width } = useWindowDimensions();

  const filteredFruits = fruits.filter(fruit => {
    const matchesName = fruit.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = fruit.price.includes(priceQuery);
    return matchesName && matchesPrice;
  });

  // Calculate the number of columns based on screen width
  const numColumns = Math.floor(width / 200); // Adjust 200 to the desired item width

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
        numColumns={numColumns}
        key={numColumns} // Add this line to force a fresh render when numColumns changes
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 45,
  },
});

export default SearchScreen;