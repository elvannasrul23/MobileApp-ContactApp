import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Contact from './Kontak';

const data = [
  {
    id: '1',
    gambar: require('../assets/DeGea.jpg'),
    nama: 'David De Gea',
    telpon: '0123456789',
    email: 'degea@gmail.com',
    alamat: 'Manchester, UK'
  },
  {
    id: '2',
    gambar: require('../assets/Marcelo.jpg'),
    nama: 'Marcelo',
    telpon: '0987654321',
    email: 'marcelo@example.com',
    alamat: 'Madrid, Spain'
  },
  {
    id: '3',
    gambar: require('../assets/SRamos.jpg'),
    nama: 'Sergio Ramos',
    telpon: '0876543210',
    email: 'sergio.ramos@example.com',
    alamat: 'Madrid, Spain'
  },
  {
    id: '4',
    gambar: require('../assets/DGodin.jpg'),
    nama: 'Diego Godín',
    telpon: '0654321876',
    email: 'diego.godin@example.com',
    alamat: 'Montevideo, Uruguay'
  },
  {
    id: '5',
    gambar: require('../assets/DCarvajal.jpg'),
    nama: 'Dani Carvajal',
    telpon: '0987654321',
    email: 'dani.carvajal@example.com',
    alamat: 'Madrid, Spain'
  },
  {
    id: '6',
    gambar: require('../assets/LModric.jpg'),
    nama: 'Luka Modrić',
    telpon: '0789456123',
    email: 'luka.modric@example.com',
    alamat: 'Zagreb, Croatia'
  },
  {
    id: '7',
    gambar: require('../assets/KDeBruyne.jpg'),
    nama: 'Kevin De Bruyne',
    telpon: '0789456123',
    email: 'kevin.debruyne@example.com',
    alamat: 'Manchester, UK'
  },
  {
    id: '8',
    gambar: require('../assets/NKante.jpg'),
    nama: "N'Golo Kanté",
    telpon: '0789456123',
    email: 'ngolo.kante@example.com',
    alamat: 'Paris, France'
  },
  {
    id: '9',
    gambar: require('../assets/LMessi.jpg'),
    nama: 'Lionel Messi',
    telpon: '0654321876',
    email: 'lionel.messi@example.com',
    alamat: 'Barcelona, Spain'
  },
  {
    id: '10',
    gambar: require('../assets/CRonaldo.jpg'),
    nama: 'Cristiano Ronaldo',
    telpon: '0987654321',
    email: 'cristiano.ronaldo@example.com',
    alamat: 'Turin, Italy'
  },
  {
    id: '11',
    gambar: require('../assets/MSalah.jpg'),
    nama: 'Mohamed Salah',
    telpon: '0789456123',
    email: 'mohamed.salah@example.com',
    alamat: 'Liverpool, UK'
  }
];

export default function Home() {
  const renderItem = ({ item }) => (
    <Contact 
      gambar={item.gambar}
      nama={item.nama}
      telpon={item.telpon}
      email={item.email}
      alamat={item.alamat}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={<Image source={require('../assets/logo.png')} style={styles.logo} />}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 1,
    marginBottom: 3,
  },
  list: {
    paddingBottom: 10, 
  },
});
