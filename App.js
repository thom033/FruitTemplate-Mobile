import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import SearchScreen from './src/components/SearchScreen';
import NotificationsScreen from './src/components/NotificationsScreen';
import AccountScreen from './src/components/AccountScreen'; 
import CartScreen from './src/components/CartScreen';
import Footer from './src/components/Footer';
import AllProductScreen from './src/components/AllProductScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="AllProduct" component={AllProductScreen} />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
  },
});

export default App;