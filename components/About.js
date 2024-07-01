import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const About = ({ route, navigation }) => {
  const { gambar, nama, telpon, email, alamat } = route.params;

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.telp}>{telpon}</Text>
      <Text style={styles.info}>{email}</Text>
      <Text style={styles.info}>{alamat}</Text>
      <Button 
        title="Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  telp: {
    fontSize: 15,
    color: '#3498db',
  },
});

export default About;
