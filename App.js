import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text,View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const App = () => {
 
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header />
          <Footer />
        </View>
      </SafeAreaProvider>
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;