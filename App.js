import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { AppProvider } from './src/context/AppContext';
import { COLORS } from './src/constants/theme';

// Import des écrans
import HomeScreen from './src/components/HomeScreen';
import SearchScreen from './src/components/SearchScreen';
import CartScreen from './src/components/CartScreen';
import NotificationsScreen from './src/components/NotificationsScreen';
import AccountScreen from './src/components/AccountScreen';
import AllProductScreen from './src/components/AllProductScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AllProduct" component={AllProductScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Accueil') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Recherche') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Panier') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications' : 'notifications-outline';
              } else if (route.name === 'Compte') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.textLight,
            tabBarStyle: {
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: 60,
              paddingBottom: 10,
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Accueil" component={HomeStack} />
          <Tab.Screen name="Recherche" component={SearchScreen} />
          <Tab.Screen name="Panier" component={CartScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Compte" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}