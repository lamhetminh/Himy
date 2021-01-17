import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabContainer from '../view/screens/zHomeTab/zHomeTabContainer';

const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeTabContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
