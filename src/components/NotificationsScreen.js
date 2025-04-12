import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Animated, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    type: 'order',
    title: 'Commande confirmée',
    message: 'Votre commande de fruits a été confirmée et sera livrée demain.',
    time: 'Il y a 5 minutes',
    read: false,
    icon: 'cart',
    color: '#4ECDC4',
    timestamp: new Date().getTime() - 5 * 60 * 1000 // 5 minutes ago
  },
  {
    id: '2',
    type: 'promotion',
    title: 'Promotion spéciale',
    message: 'Profitez de 20% de réduction sur tous les fruits exotiques ce weekend !',
    time: 'Il y a 1 heure',
    read: false,
    icon: 'pricetag',
    color: '#FF6B6B',
    timestamp: new Date().getTime() - 60 * 60 * 1000 // 1 hour ago
  },
  {
    id: '3',
    type: 'delivery',
    title: 'Livraison en cours',
    message: 'Votre livreur est en route avec votre commande.',
    time: 'Il y a 2 heures',
    read: true,
    icon: 'bicycle',
    color: '#FFD166',
    timestamp: new Date().getTime() - 2 * 60 * 60 * 1000 // 2 hours ago
  },
  {
    id: '4',
    type: 'system',
    title: 'Mise à jour de l\'application',
    message: 'De nouvelles fonctionnalités sont disponibles dans votre application.',
    time: 'Il y a 1 jour',
    read: true,
    icon: 'refresh',
    color: '#6A0572',
    timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 // 1 day ago
  },
];

const NotificationsScreen = () => {
  const [notificationsList, setNotificationsList] = useState(notifications);
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'type'
  const [showSortOptions, setShowSortOptions] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const markAsRead = (id) => {
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

    setNotificationsList(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAsUnread = (id) => {
    setNotificationsList(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: false } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    Alert.alert(
      'Supprimer la notification',
      'Êtes-vous sûr de vouloir supprimer cette notification ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: () => {
            setNotificationsList(prevNotifications =>
              prevNotifications.filter(notification => notification.id !== id)
            );
          },
        },
      ]
    );
  };

  const markAllAsRead = () => {
    setNotificationsList(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  const sortNotifications = (notifications) => {
    return [...notifications].sort((a, b) => {
      if (sortBy === 'date') {
        return b.timestamp - a.timestamp;
      } else {
        return a.type.localeCompare(b.type);
      }
    });
  };

  const renderNotificationItem = ({ item }) => (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity
        style={[
          styles.notificationItem,
          !item.read && styles.unreadNotification
        ]}
        onPress={() => markAsRead(item.id)}
      >
        <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
          <Ionicons name={item.icon} size={24} color={item.color} />
        </View>
        <View style={styles.notificationContent}>
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <View style={styles.notificationActions}>
              {!item.read && <View style={styles.unreadBadge} />}
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => markAsUnread(item.id)}
              >
                <Ionicons name="refresh" size={16} color="#7f8c8d" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => deleteNotification(item.id)}
              >
                <Ionicons name="trash" size={16} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity 
            style={styles.sortButton}
            onPress={() => setShowSortOptions(!showSortOptions)}
          >
            <Ionicons name="options" size={24} color="#7f8c8d" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={markAllAsRead}>
            <Text style={styles.clearButtonText}>Tout marquer comme lu</Text>
          </TouchableOpacity>
        </View>
      </View>

      {showSortOptions && (
        <View style={styles.sortOptions}>
          <TouchableOpacity 
            style={[styles.sortOption, sortBy === 'date' && styles.selectedSortOption]}
            onPress={() => {
              setSortBy('date');
              setShowSortOptions(false);
            }}
          >
            <Text style={[styles.sortOptionText, sortBy === 'date' && styles.selectedSortOptionText]}>
              Trier par date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.sortOption, sortBy === 'type' && styles.selectedSortOption]}
            onPress={() => {
              setSortBy('type');
              setShowSortOptions(false);
            }}
          >
            <Text style={[styles.sortOptionText, sortBy === 'type' && styles.selectedSortOptionText]}>
              Trier par type
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={sortNotifications(notificationsList)}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  sortButton: {
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#f1f2f6',
    marginRight: 10,
  },
  clearButton: {
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#f1f2f6',
  },
  clearButtonText: {
    color: '#7f8c8d',
    fontSize: 14,
  },
  sortOptions: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sortOption: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  selectedSortOption: {
    backgroundColor: '#FF6B6B20',
  },
  sortOptionText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  selectedSortOptionText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  notificationsList: {
    padding: 15,
    paddingBottom: 100,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  unreadNotification: {
    backgroundColor: '#f8f9fa',
    borderLeftWidth: 3,
    borderLeftColor: '#FF6B6B',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  notificationActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 5,
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
    marginRight: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#bdc3c7',
  },
});

export default NotificationsScreen;