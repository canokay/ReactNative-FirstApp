
//import bölümü
import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import Header from'./src/components/Header';


//komponent yazdığımız yer
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText={'Ornek Proje'}/>
      </View>
      <Text>Merhaba Dünya!!!</Text>
    );
  }
}

//render
AppRegistry.registerComponent('reactnative_notlari',() => App);
