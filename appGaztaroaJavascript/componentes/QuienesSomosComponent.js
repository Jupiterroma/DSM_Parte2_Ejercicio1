import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import { ACTIVIDADES } from '../comun/actividades';

// Componente funcional para la parte de Historia
const Historia = () => {
  return (
    <Card>
      <Card.Title style={styles.title}>Un poquito de historia</Card.Title>
      <Card.Divider/>
      <Text style={styles.text}>
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

// Componente de clase para la parte de Actividades
class QuienesSomos extends Component {
  render() {
    const renderActividadItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          leftAvatar={{source: require('./images/logo.png')}}
          title={item.nombre}
          subtitle={item.descripcion}
          bottomDivider
        />
      );
    };

    return (
      <View style={styles.container}>
        <Historia/>
        <Card>
          <Card.Title style={styles.title}>Actividades y recursos</Card.Title>
          <Card.Divider/>
          <FlatList 
            data={ACTIVIDADES}
            renderItem={renderActividadItem}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 20,
    color: 'chocolate'
  },
  text: {
    marginBottom: 10,
    lineHeight: 20
  }
});

export default QuienesSomos;