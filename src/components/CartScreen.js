import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Animated, Alert, TextInput, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { COLORS, SIZES, SHADOWS, STYLES } from '../constants/theme';
import { PROMO_CODES } from '../constants/data';

const CartScreen = () => {
  const { cart, updateQuantity, removeFromCart } = useApp();
  const [promoCode, setPromoCode] = useState('');
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [discount, setDiscount] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      Alert.alert(
        'Supprimer l\'article',
        'Voulez-vous supprimer cet article du panier ?',
        [
          {
            text: 'Annuler',
            style: 'cancel',
          },
          {
            text: 'Supprimer',
            onPress: () => removeFromCart(id),
          },
        ]
      );
      return;
    }

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    updateQuantity(id, newQuantity);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (subtotal * discount / 100);
  };

  const applyPromoCode = () => {
    const promo = PROMO_CODES.find(code => code.code === promoCode);
    if (promo) {
      setDiscount(promo.discount);
      setShowPromoInput(false);
    } else {
      Alert.alert('Code promo invalide', 'Le code promo entré n\'est pas valide.');
    }
  };

  const renderCartItem = ({ item }) => (
    <Animated.View style={[styles.cartItem, { opacity: fadeAnim }]}>
      <View style={[styles.itemImageContainer, { backgroundColor: `${item.color}20` }]}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price} €</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
          >
            <Ionicons name="remove" size={20} color={COLORS.textLight} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
          >
            <Ionicons name="add" size={20} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleQuantityChange(item.id, 0)}
      >
        <Ionicons name="trash" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={STYLES.header}>
        <Text style={STYLES.headerTitle}>Mon Panier</Text>
        <TouchableOpacity 
          style={styles.promoButton}
          onPress={() => setShowPromoInput(!showPromoInput)}
        >
          <Ionicons name="pricetag" size={24} color={COLORS.textLight} />
        </TouchableOpacity>
      </View>

      {showPromoInput && (
        <View style={styles.promoContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Entrez votre code promo"
            value={promoCode}
            onChangeText={setPromoCode}
          />
          <TouchableOpacity 
            style={styles.applyButton}
            onPress={applyPromoCode}
          >
            <Text style={styles.applyButtonText}>Appliquer</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cartList}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        {discount > 0 && (
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>Remise: {discount}%</Text>
            <Text style={styles.discountAmount}>
              -{(calculateSubtotal() * discount / 100).toFixed(2)} €
            </Text>
          </View>
        )}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>{calculateTotal().toFixed(2)} €</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={STYLES.buttonText}>Passer la commande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...STYLES,
  container: {
    ...STYLES.container,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
  promoButton: {
    padding: SIZES.base,
    borderRadius: 15,
    backgroundColor: COLORS.gray,
  },
  promoContainer: {
    flexDirection: 'row',
    padding: SIZES.base * 2,
    backgroundColor: COLORS.white,
    margin: SIZES.base * 2,
    borderRadius: 15,
    ...SHADOWS.light,
  },
  promoInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: SIZES.base * 2,
    marginRight: SIZES.base,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.base * 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  applyButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  cartList: {
    padding: SIZES.base * 2,
    paddingBottom: 150,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: SIZES.base * 2,
    marginBottom: SIZES.base * 2,
    ...SHADOWS.light,
  },
  itemImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.base * 2,
  },
  itemImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  itemPrice: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
    marginBottom: SIZES.base,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: SIZES.base,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  deleteButton: {
    padding: SIZES.base,
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    padding: SIZES.base * 2,
    paddingBottom: SIZES.base * 4,
    ...SHADOWS.medium,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base,
    backgroundColor: `${COLORS.success}10`,
    borderRadius: 8,
    marginHorizontal: SIZES.base,
  },
  discountText: {
    fontSize: SIZES.medium,
    color: COLORS.success,
    fontWeight: '600',
  },
  discountAmount: {
    fontSize: SIZES.medium,
    color: COLORS.success,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.base * 2,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base * 2,
    marginHorizontal: SIZES.base,
  },
  totalText: {
    fontSize: SIZES.large,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  button: {
    ...STYLES.button,
    marginTop: SIZES.base * 2,
    marginHorizontal: SIZES.base,
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.base * 2,
    borderRadius: 8,
  },
});

export default CartScreen;