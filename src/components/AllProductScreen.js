import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Text, useWindowDimensions, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import FruitItem from './FruitItem';
import { Ionicons } from '@expo/vector-icons';

const fruits = [
    { id: '1', name: 'Orange', price: '$11', image: require('./../assets/icon.png'), color: '#FFA500' },
    { id: '2', name: 'Grape', price: '$12', image: require('./../assets/icon.png'), color: '#6A0DAD' },
    { id: '3', name: 'Banana', price: '$13', image: require('./../assets/icon.png'), color: '#FFD700' },
    { id: '4', name: 'Apple', price: '$14', image: require('./../assets/icon.png'), color: '#FF0000' },
    { id: '5', name: 'Mango', price: '$15', image: require('./../assets/icon.png'), color: '#FFA500' },
    { id: '6', name: 'Pineapple', price: '$16', image: require('./../assets/icon.png'), color: '#FFD700' },
    { id: '7', name: 'Strawberry', price: '$17', image: require('./../assets/icon.png'), color: '#FF0000' },
    { id: '8', name: 'Watermelon', price: '$18', image: require('./../assets/icon.png'), color: '#FF0000' },
    { id: '9', name: 'Cherry', price: '$19', image: require('./../assets/icon.png'), color: '#FF0000' },
    { id: '10', name: 'Kiwi', price: '$20', image: require('./../assets/icon.png'), color: '#00FF00' },
];

const AllProductScreen = () => {
  const [cartItems, setCartItems] = useState(fruits);
  const { width } = useWindowDimensions();
  const numColumns = Math.floor(width / 180);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Nos Fruits Frais</Text>
      <Text style={styles.subtitle}>Découvrez notre sélection de fruits de saison</Text>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#666" />
          <Text style={styles.searchText}>Rechercher un fruit...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FruitItem item={item} />}
        numColumns={numColumns}
        key={numColumns}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    marginHorizontal: 10,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    padding: 15,
    borderRadius: 15,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  listContainer: {
    padding: 10,
    paddingBottom: 100,
  },
});

export default AllProductScreen;