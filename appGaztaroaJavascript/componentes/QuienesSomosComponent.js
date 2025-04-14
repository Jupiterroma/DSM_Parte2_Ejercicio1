import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Card, Text, ListItem } from '@rneui/themed';
import { ACTIVIDADES } from '../comun/actividades';

const Historia = () => {
  return (
    <Card containerStyle={styles.historiaCard}>
      <Card.Title style={styles.cardTitle}>Un poquito de historia</Card.Title>
      <Card.Divider color="chocolate"/>
      <Text style={styles.historiaText}>
        El nacimiento del club de montaña Gaztaroa se remonta a la
        primavera de 1976 cuando jóvenes aficionados a la montaña y
        pertenecientes a un club juvenil decidieron crear la sección
        montañera de dicho club. Fueron unos comienzos duros debido sobre
        todo a la situación política de entonces. Gracias al esfuerzo
        económico de sus socios y socias se logró alquilar una bajera.
        Gaztaroa ya tenía su sede social.
        {"\n\n"}
        Desde aquí queremos hacer llegar nuestro agradecimiento a todos
        los montañeros y montañeras que alguna vez habéis pasado por el
        club aportando vuestro granito de arena.
        {"\n\n"}
        Gracias!
      </Text>
    </Card>
  );
};

const QuienesSomos = () => {
  const renderActividadItem = ({item}) => {
    return (
      <ListItem containerStyle={styles.listItem}>
        <Image 
          source={require('./imagenes/logo.png')} 
          style={styles.logo}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{item.nombre}</ListItem.Title>
          <ListItem.Subtitle style={styles.itemSubtitle}>
            {item.descripcion}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <Historia/>
      
      <Card containerStyle={styles.actividadesCard}>
        <Card.Title style={styles.cardTitle}>Actividades y recursos</Card.Title>
        <Card.Divider color="chocolate"/>
        <FlatList 
          data={ACTIVIDADES}
          renderItem={renderActividadItem}
          keyExtractor={item => item.id.toString()}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  historiaCard: {
    borderRadius: 8,
    margin: 10
  },
  actividadesCard: {
    borderRadius: 8,
    margin: 10,
    flex: 1
  },
  cardTitle: {
    fontSize: 20,
    color: 'chocolate',
    textAlign: 'center'
  },
  historiaText: {
    lineHeight: 22,
    fontSize: 16,
    paddingHorizontal: 5
  },
  listItem: {
    marginHorizontal: -15,
    marginVertical: -5
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  itemTitle: {
    fontWeight: 'bold',
    color: 'chocolate'
  },
  itemSubtitle: {
    color: '#555'
  }
});

export default QuienesSomos;