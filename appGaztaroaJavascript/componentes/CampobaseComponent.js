import React, { Component } from 'react';
import Constants from 'expo-constants';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeComponent';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import ContactoComponent from './ContactoComponent';
import QuienesSomos from './QuienesSomosComponent';
import { View, Platform, StyleSheet, Image, Text } from 'react-native'; 
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'; 
import { Icon } from '@rneui/themed'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorGaztaroaClaro } from '../comun/comun'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (
          <Icon 
            name="menu" 
            size={28} 
            color='white' 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
            style={{marginLeft: 15}}
          />
        ),
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

function CustomDrawerContent(props) { 
  return ( 
    <DrawerContentScrollView {...props}> 
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}> 
        <View style={styles.drawerHeader}> 
          <View style={{flex:1}}> 
            <Image source={require('./imagenes/logo.png')} style={styles.drawerImage} /> 
          </View> 
          <View style={{flex: 2}}> 
            <Text style={styles.drawerHeaderText}>Gaztaroa</Text> 
          </View> 
        </View> 
        <DrawerItemList {...props} /> 
      </SafeAreaView> 
    </DrawerContentScrollView> 
  ); 
} 

function CalendarioNavegador({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
        headerLeft: ({ tintColor }) => (
          <Icon 
            name={navigation.canGoBack() ? "arrow-left" : "menu"}
            size={28} 
            color={tintColor} 
            onPress={() => 
              navigation.canGoBack() 
                ? navigation.goBack() 
                : navigation.dispatch(DrawerActions.toggleDrawer())
            } 
            style={{marginLeft: 15}}
          />
        ),
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
        options={({ route }) => ({ 
          title: route.params.excursion.nombre,
          headerLeft: ({ tintColor }) => (
            <Icon 
              name="arrow-left" 
              size={28} 
              color={tintColor} 
              onPress={() => navigation.goBack()} 
              style={{marginLeft: 15}}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function ContactoNavegador({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (
          <Icon 
            name="menu" 
            size={28} 
            color='white' 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
            style={{marginLeft: 15}}
          />
        ),
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

function QuienesSomosNavegador({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (
          <Icon 
            name="menu" 
            size={28} 
            color='white' 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
            style={{marginLeft: 15}}
          />
        ),
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
      drawerContent={props => <CustomDrawerContent {...props} />} 
      screenOptions={{ 
        headerShown: false, 
        drawerStyle: { 
          backgroundColor: colorGaztaroaClaro, 
        },
        drawerActiveTintColor: '#015afc',
        drawerInactiveTintColor: 'gray',
      }} 
    > 
      <Drawer.Screen 
        name="Campo base" 
        component={HomeNavegador} 
        options={{ 
          drawerIcon: ({ color, size }) => ( 
            <Icon 
              name='home' 
              type='font-awesome'             
              size={size} 
              color={color} 
            /> 
          ) 
        }} 
      />
      <Drawer.Screen
        name="Calendario"
        component={CalendarioNavegador}
        options={{ 
          drawerLabel: 'Calendario',
          drawerIcon: ({ color, size }) => ( 
            <Icon 
              name='calendar' 
              type='font-awesome'             
              size={size} 
              color={color} 
            /> 
          )
        }}
      />
      <Drawer.Screen
        name="QuienesSomos"
        component={QuienesSomosNavegador}
        options={{ 
          drawerLabel: 'Quiénes somos',
          drawerIcon: ({ color, size }) => ( 
            <Icon 
              name='info-circle' 
              type='font-awesome'             
              size={size} 
              color={color} 
            /> 
          )
        }}
      />
      <Drawer.Screen
        name="Contacto"
        component={ContactoNavegador}
        options={{ 
          drawerLabel: 'Contacto',
          drawerIcon: ({ color, size }) => ( 
            <Icon 
              name='address-card' 
              type='font-awesome'             
              size={size} 
              color={color} 
            /> 
          )
        }}
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

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
  }, 
  drawerHeader: { 
    backgroundColor: '#015afc', 
    height: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, 
    flexDirection: 'row',
    padding: 10,
  }, 
  drawerHeaderText: { 
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold',
    marginLeft: 10,
  }, 
  drawerImage: { 
    width: 80, 
    height: 60,
    borderRadius: 5,
  } 
});

export default Campobase;