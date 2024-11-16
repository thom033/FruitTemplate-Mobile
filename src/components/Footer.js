import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate('Search')} />
        <Appbar.Action icon="bell" onPress={() => navigation.navigate('Notifications')} />
        <Appbar.Action icon="cart" onPress={() => navigation.navigate('Cart')} /> {/* Added cart icon */}
        <Appbar.Action icon="account" onPress={() => navigation.navigate('Account')} />
      </Appbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  appbar: {
    justifyContent: 'space-around',
  },
});

export default Footer;