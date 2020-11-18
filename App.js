import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import TransactionScreen from './screens/transactionScreen';
import SearchScreen from './screens/searchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigatior} from 'react-navigation-tabs';

export default class App extends React.Component {
    render(){
  return (
      
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}
}
const TabNavigation=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const AppNavigator=createAppContainer(TabNavigation)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  
});
