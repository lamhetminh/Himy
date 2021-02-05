import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {IBasicCardData} from '../../core/interface/common';

export interface IBasicCardProps
  extends React.ClassAttributes<BasicCardComponent> {
  readonly data: IBasicCardData;
}

export interface IBasicCardState {}

class BasicCardComponent extends React.Component<
  IBasicCardProps,
  IBasicCardState
> {
  constructor(props: IBasicCardProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.icon}>{this.props.data.icon}</Text>
          <Text style={styles.titleText}>{this.props.data.title}</Text>
        </View>
        <View>
          <Text>{this.props.data.data}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
    height: 120,
    borderRadius: 15,
    backgroundColor: '#dfebe0',
  },
  title: {
    margin: 10,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: '#79db86',
    fontSize: 18,
  },
  icon: {
    color: '#79db86',
    width: 20,
    marginRight: 5,
    textAlign: 'center',
  },
});

export default BasicCardComponent;
