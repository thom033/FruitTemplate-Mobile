import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu, IconButton } from 'react-native-paper';

const NotificationItem = ({ id, title, description, read, onPress, onDelete, onMarkAsRead, onMarkAsUnread }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={[styles.notificationItem, read && styles.readNotification]}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationDescription}>{description}</Text>
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="dots-vertical"
            size={20}
            onPress={openMenu}
          />
        }
      >
        <Menu.Item onPress={() => { onDelete(id); closeMenu(); }} title="Supprimer" />
        <Menu.Item onPress={() => { onMarkAsRead(id); closeMenu(); }} title="Marquer comme lu" />
        <Menu.Item onPress={() => { onMarkAsUnread(id); closeMenu(); }} title="Marquer comme non lu" />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  readNotification: {
    backgroundColor: '#e0e0e0',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default NotificationItem;