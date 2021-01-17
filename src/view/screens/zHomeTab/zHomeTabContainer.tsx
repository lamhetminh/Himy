import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HealthTab from '../Health/HealthTab';
import IdeaTab from '../Idea/IdeaTab';
import BottomTabBar from '../../components/BottomNavigation';
import MoneyTab from '../Money/MoneyTab';
import YouTab from '../You/YouTab';
import {BottomTabName} from '../../../core/constant/bottomTabName';
const Tab = createBottomTabNavigator();

export default class HomeTabContainer extends Component {
  render() {
    return (
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name={BottomTabName.HEALTH} component={HealthTab} />
        <Tab.Screen name={BottomTabName.IDEA} component={IdeaTab} />
        <Tab.Screen name={BottomTabName.ADD} component={IdeaTab} />
        <Tab.Screen name={BottomTabName.MONEY} component={MoneyTab} />
        <Tab.Screen name={BottomTabName.YOU} component={YouTab} />
      </Tab.Navigator>
    );
  }
}
