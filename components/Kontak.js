import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contact(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.title}>{props.nama}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
        <Button
          title="Lihat"
          onPress={() => navigation.navigate('Detail', { 
            gambar: props.gambar, 
            nama: props.nama, 
            telpon: props.telpon,
            email: props.email,
            alamat: props.alamat, 
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  img: {
    margin: 15,
    width: 70,
    height: 70,
  },
  text: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});
