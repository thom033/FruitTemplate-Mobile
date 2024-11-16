import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ShopDetails = ({ shop }) => {
  if (!shop) {
    return <Text>No shop data available</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={shop.image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{shop.name}</Text>
        <Text style={styles.description}>{shop.description}</Text>
        <Text style={styles.address}>{shop.address}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Visit Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
    height: 150,
    alignItems: 'center',
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '60%',
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  address: {
    fontSize: 14,
    marginTop: 5,
    color: 'gray',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
});

export default ShopDetails;