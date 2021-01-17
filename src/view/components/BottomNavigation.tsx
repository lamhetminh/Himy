/* eslint-disable react-native/no-inline-styles */
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {BottomTabName} from '../../core/constant/bottomTabName';

const iconSize = 25;
const icon = {
  [BottomTabName.HEALTH]: (
    <FontAwesome5 size={iconSize} solid={true} name={'heartbeat'} />
  ),
  [BottomTabName.IDEA]: (
    <FontAwesome5 size={iconSize} solid={true} name={'lightbulb'} />
  ),
  [BottomTabName.ADD]: (
    <FontAwesome5 size={iconSize} solid={true} name={'plus-circle'} />
  ),
  [BottomTabName.MONEY]: (
    <FontAwesome5 size={iconSize} solid={true} name={'wallet'} />
  ),
  [BottomTabName.YOU]: (
    <FontAwesome5 size={iconSize} solid={true} name={'child'} />
  ),
};
const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        width: '70%',
        left: '15%',
        bottom: '3%',
        backgroundColor: 'white',
        padding: '5%',
        borderRadius: 30,
        shadowColor: '#2b2b2b',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}
            key={index}>
            <Text
              style={{
                color: isFocused ? '#141414' : '#b3b3b3',
                textAlign: 'center',
              }}>
              {icon[label as BottomTabName]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
