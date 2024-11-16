import React, { useState, useRef } from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
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

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(fruits);
  const numColumns = 2; // Define the number of columns
  const scrollViewRef = useRef(null);

  return (
    <ScrollView horizontal ref={scrollViewRef}>
      <View style={styles.container}>
        <Text style={styles.title}>All Product</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FruitItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
          ListEmptyComponent={<Text>No items in the cart</Text>}
          numColumns={numColumns}
          key={numColumns} // Add this line to force a fresh render when numColumns changes
        /> 
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    flatList: {
        justifyContent: 'space-between',
        paddingBottom: 100, // Adjust this value based on the height of your footer
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#343a40',
        textAlign: 'center',
        marginBottom: 20,
    },
    scrollToTopButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#343a40',
        borderRadius: 50,
        padding: 10,
        marginBottom: 50,
    },
});

export default CartScreen;