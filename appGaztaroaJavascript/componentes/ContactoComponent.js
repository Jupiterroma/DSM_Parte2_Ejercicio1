import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from '@rneui/themed';

const ContactoComponent = () => {
  return (
    <View style={styles.container}>
      <Card wrapperStyle={styles.cardWrapper}>
        <Card.Title style={styles.title}>Kaixo Mendizale!</Card.Title>
        <Card.Divider color="chocolate"/>
        <Text style={styles.text}>
          Si quieres participar en las salidas de montaña que organizamos o
          quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a
          través de diferentes medios. Puedes llamarnos por teléfono los jueves
          de las semanas que hay salida (de 20:00 a 21:00). También puedes
          ponerte en contacto con nosotros escribiendo un correo electrónico, o
          utilizando la aplicación de esta página web. Y además puedes
          seguirnos en Facebook.
          {"\n\n"}
          Para lo que quieras, estamos a tu disposición!
          {"\n\n"}
          Tel: +34 948 277151
          {"\n\n"}
          Email: gaztaroa@gaztaroa.com
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  cardWrapper: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 22,
    color: 'chocolate',
    textAlign: 'center'
  },
  text: {
    marginBottom: 10,
    lineHeight: 22,
    fontSize: 16
  }
});

export default ContactoComponent;