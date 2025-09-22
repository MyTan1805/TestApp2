import { Stack } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    SectionList,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// Dữ liệu mẫu cho danh sách
const DATA = [
  {
    title: 'Fruits',
    data: [
      { id: '1', name: 'Avocado', price: '$3.00', image: '🥑' },
      { id: '2', name: 'Banana', price: '$2.00', image: '🍌' },
      { id: '3', name: 'Peach', price: '$4.00', image: '🍑' },
      { id: '4', name: 'Pineapple', price: '$5.00', image: '🍍' },
    ],
  },
  {
    title: 'Junk Food',
    data: [
      { id: '5', name: 'Burger', price: '$10.00', image: '🍔' },
      { id: '6', name: 'Pizza', price: '$15.00', image: '🍕' },
      { id: '7', name: 'Spaghetti', price: '$13.00', image: '🍝' },
    ],
  },
  {
    title: 'Hot Selling',
    data: [
      { id: '8', name: 'Burger', price: '$10.00', image: '🍔' },
      { id: '9', name: 'Pizza', price: '$15.00', image: '🍕' },
      { id: '10', name: 'Banana', price: '$2.00', image: '🍌' },
    ],
  },
];

const Item = ({ name, price, image }: { name: string, price: string, image: string }) => (
  <View style={styles.item}>
    <Text style={styles.itemImage}>{image}</Text>
    <Text style={styles.itemName}>{name}</Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

export default function SectionListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Section List' }} />
      <StatusBar barStyle="dark-content" />
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item name={item.name} price={item.price} image={item.image} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', 
  },
  listContentContainer: {
    // XÓA paddingHorizontal khỏi đây
    paddingBottom: 24,
  },
  headerContainer: {
    backgroundColor: '#f9a825',
    paddingVertical: 12,
    paddingHorizontal: 16, // Giữ padding này để chữ không bị sát lề
    marginTop: 16,
  },
  header: {
    fontSize: 24,
    color: '#525252ff',
    textAlign: 'center',
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,

    // THÊM marginHorizontal VÀO ĐÂY
    marginHorizontal: 16, // Thêm khoảng cách cho các mục con

    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemImage: {
    fontSize: 40,
    width: 60, 
  },
  itemName: {
    flex: 1, 
    textAlign: 'center', 
    fontSize: 18,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
    width: 60, 
    textAlign: 'right', 
  },
});