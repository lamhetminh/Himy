import React from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {workTimerNotification} from '../../core/api/notification/notification';
import {globalStyles} from '../globalStyleSheet';

export interface IWorkTimerProps
  extends React.ClassAttributes<WorkTimerComponent> {}

export interface IWorkTimerState {}

class WorkTimerComponent extends React.Component<
  IWorkTimerProps,
  IWorkTimerState
> {
  constructor(props: IWorkTimerProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Chế Độ Làm Việc</Text>
          <Text>Đặt lịch thông báo nghỉ ngơi mỗi 60 phút</Text>
        </View>
        <View style={globalStyles.globalButton}>
          <Button title={'Bật Thông Báo'} onPress={workTimerNotification} />
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
  },
  titleText: {
    fontWeight: 'bold',
    color: '#79db86',
    fontSize: 18,
  },
  content: {},
});

export default WorkTimerComponent;
