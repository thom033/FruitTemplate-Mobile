import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


const Footer = () => {
  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.Action icon="home" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="bell" onPress={() => {}} />
        <Appbar.Action icon="account" onPress={() => {}} />
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