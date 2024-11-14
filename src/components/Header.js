import React from 'react';
import { Text,View, FlatList, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
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

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>App content goes here</Text>
    <FlatList
      data={fruits}
      renderItem={({ item }) => <FruitItem item={item} />}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings Screen</Text>
  </View>
);

const Header = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Header;