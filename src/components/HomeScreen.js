import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FruitItem from './FruitItem';
import ShopDetails from './ShopDetails';
import fruits from '../assets/fruits';
import shops from '../assets/shops';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderFruitsSection = () => (
    <View>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={fruits}
        renderItem={({ item }) => <FruitItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );

  const renderButton = () => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllProduct')}>
      <Text style={styles.buttonText}>Voir tout les produits</Text>
    </TouchableOpacity>
  );

  const renderShopsSection = () => (
    <View>
      <Text style={styles.littleText}>Nearby Shop</Text>
      <FlatList
        data={shops}
        renderItem={({ item }) => <ShopDetails shop={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );

  const sections = [
    { id: 'fruits', render: renderFruitsSection },
    { id: 'button', render: renderButton },
    { id: 'shops', render: renderShopsSection },
  ];

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => item.render()}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingBottom: 80,
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