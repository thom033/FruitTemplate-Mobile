import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FruitItem from './FruitItem';
import ShopDetails from './ShopDetails';

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

const shops = [
  { id: '1', name: 'Shop 1', description: 'Shop 1 description', address: 'Shop 1 address', image: require('./../assets/icon.png') },
  { id: '2', name: 'Shop 2', description: 'Shop 2 description', address: 'Shop 2 address', image: require('./../assets/icon.png') },
  { id: '3', name: 'Shop 3', description: 'Shop 3 description', address: 'Shop 3 address', image: require('./../assets/icon.png') },
  { id: '4', name: 'Shop 4', description: 'Shop 4 description', address: 'Shop 4 address', image: require('./../assets/icon.png') },
  { id: '5', name: 'Shop 5', description: 'Shop 5 description', address: 'Shop 5 address', image: require('./../assets/icon.png') },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={fruits}
        renderItem={({ item }) => <FruitItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllProduct')}>
        <Text style={styles.buttonText}>Voir tout les produits</Text>
      </TouchableOpacity>

      <Text style={styles.littleText}>Nearby Shop</Text>
      <FlatList
        data={shops}
        renderItem={({ item }) => <ShopDetails shop={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 80, // Adjust this value based on the height of the Footer
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 20,
  },
  flatList: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  littleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
    marginTop: 20,
  },
});

export default HomeScreen;