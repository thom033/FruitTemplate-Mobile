// Données des fruits
export const FRUITS = [
  {
    id: '1',
    name: 'Orange',
    price: 11,
    image: require('../assets/images/orange.png'),
    color: '#FFA500',
    category: 'agrumes',
  },
  {
    id: '2',
    name: 'Grape',
    price: 12,
    image: require('../assets/images/grape.png'),
    color: '#800080',
    category: 'fruits',
  },
  {
    id: '3',
    name: 'Banana',
    price: 13,
    image: require('../assets/images/banana.png'),
    color: '#FFD700',
    category: 'fruits',
  },
  {
    id: '4',
    name: 'Apple',
    price: 14,
    image: require('../assets/images/apple.png'),
    color: '#FF0000',
    category: 'fruits',
  },
  {
    id: '5',
    name: 'Mango',
    price: 15,
    image: require('../assets/images/mango.png'),
    color: '#FFA500',
    category: 'fruits',
  },
  {
    id: '6',
    name: 'Pineapple',
    price: 16,
    image: require('../assets/images/pineapple.png'),
    color: '#FFD700',
    category: 'fruits',
  },
  {
    id: '7',
    name: 'Strawberry',
    price: 17,
    image: require('../assets/images/strawberry.png'),
    color: '#FF0000',
    category: 'baies',
  },
  {
    id: '8',
    name: 'Watermelon',
    price: 18,
    image: require('../assets/images/watermelon.png'),
    color: '#00FF00',
    category: 'fruits',
  },
  {
    id: '9',
    name: 'Cherry',
    price: 19,
    image: require('../assets/images/cherry.png'),
    color: '#FF0000',
    category: 'baies',
  },
  {
    id: '10',
    name: 'Kiwi',
    price: 20,
    image: require('../assets/images/kiwi.png'),
    color: '#00FF00',
    category: 'fruits',
  },
];

// Données des magasins
export const SHOPS = [
  {
    id: '1',
    name: 'Fruit Paradise',
    image: require('../assets/images/shop1.jpg'),
    rating: 4.8,
    reviews: 256,
    distance: '0.5 km',
    description: 'Magasin de fruits frais et bio',
    address: '123 Rue des Fruits, Paris',
  },
  {
    id: '2',
    name: 'Fresh Market',
    image: require('../assets/images/shop2.jpg'),
    rating: 4.6,
    reviews: 189,
    distance: '1.2 km',
    description: 'Marché de produits frais',
    address: '456 Avenue des Vergers, Paris',
  },
  {
    id: '3',
    name: 'Bio Corner',
    image: require('../assets/images/shop3.jpg'),
    rating: 4.9,
    reviews: 312,
    distance: '0.8 km',
    description: 'Boutique bio et locale',
    address: '789 Boulevard Bio, Paris',
  },
];

// Codes promo
export const PROMO_CODES = [
  {
    code: 'WELCOME10',
    discount: 10,
    description: '10% de réduction sur votre première commande',
  },
  {
    code: 'SUMMER20',
    discount: 20,
    description: '20% de réduction sur les fruits d\'été',
  },
  {
    code: 'FRESH15',
    discount: 15,
    description: '15% de réduction sur les produits frais',
  },
];

// Catégories de fruits
export const CATEGORIES = [
  {
    id: '1',
    name: 'Tous',
    icon: 'grid',
  },
  {
    id: '2',
    name: 'Fruits',
    icon: 'nutrition',
  },
  {
    id: '3',
    name: 'Agrumes',
    icon: 'leaf',
  },
  {
    id: '4',
    name: 'Baies',
    icon: 'flower',
  },
];

// Notifications
export const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Commande confirmée',
    message: 'Votre commande #1234 a été confirmée',
    time: 'Il y a 5 minutes',
    read: false,
    type: 'order',
    icon: 'cart',
    color: '#4CAF50',
  },
  {
    id: '2',
    title: 'Promotion spéciale',
    message: '20% de réduction sur tous les fruits d\'été',
    time: 'Il y a 1 heure',
    read: false,
    type: 'promotion',
    icon: 'pricetag',
    color: '#FF9800',
  },
  {
    id: '3',
    title: 'Livraison en cours',
    message: 'Votre commande est en route',
    time: 'Il y a 2 heures',
    read: true,
    type: 'delivery',
    icon: 'car',
    color: '#2196F3',
  },
  {
    id: '4',
    title: 'Mise à jour',
    message: 'Nouveaux fruits disponibles',
    time: 'Il y a 1 jour',
    read: true,
    type: 'system',
    icon: 'notifications',
    color: '#9C27B0',
  },
]; 