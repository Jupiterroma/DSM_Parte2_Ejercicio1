import React, { Component } from 'react';
import Constants from 'expo-constants';
import { Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import ContactoComponent from './ContactoComponent';
import QuienesSomos from './QuienesSomosComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Campo Base' }}
      />
    </Stack.Navigator>
  );
}

function CalendarioNavegador() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{ title: 'Calendario Gaztaroa' }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{ title: 'Detalle Excursión' }}
      />
    </Stack.Navigator>
  );
}

function ContactoNavegador() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Contacto"
        component={ContactoComponent}
        options={{ title: 'Contacto' }}
      />
    </Stack.Navigator>
  );
}

function QuienesSomosNavegador() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="QuienesSomos"
        component={QuienesSomos}
        options={{ title: 'Quiénes Somos' }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavegador() {
  return (
    <Drawer.Navigator
      initialRouteName="Campo base"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#c2d3da' },
        drawerActiveTintColor: 'chocolate',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' }
      }}
    >
      <Drawer.Screen
        name="Campo base"
        component={HomeNavegador}
        options={{ drawerLabel: 'Campo base' }}
      />
      <Drawer.Screen
        name="Calendario"
        component={CalendarioNavegador}
        options={{ drawerLabel: 'Calendario' }}
      />
      <Drawer.Screen
        name="Contacto"
        component={ContactoNavegador}
        options={{ drawerLabel: 'Contacto' }}
      />
      <Drawer.Screen
        name="QuienesSomos"
        component={QuienesSomosNavegador}
        options={{ drawerLabel: 'Quiénes somos' }}
      />
    </Drawer.Navigator>
  );
}

class Campobase extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
        <NavigationContainer>
          <DrawerNavegador />
        </NavigationContainer>
      </View>
    );
  }
}

export default Campobase;