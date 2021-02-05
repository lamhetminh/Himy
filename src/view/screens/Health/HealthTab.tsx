import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {IState} from '../../../core/redux/rootReducer';
import {setUserInfo} from '../../../core/redux/action/userInfoAction';
import BasicCard from '../../components/BasicCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WorkTimerComponent from '../../components/WorkTimer';
export interface HealthTabProps extends React.ClassAttributes<HealthTab> {
  userInfo: IState['userInfo'];
  setUserInfo: typeof setUserInfo;
}

class HealthTab extends React.Component<HealthTabProps> {
  render() {
    const weightData = {
      title: 'Cân Nặng',
      icon: <FontAwesome5 size={16} solid={true} name={'balance-scale'} />,
      data: 64,
    };
    const heighttData = {
      title: 'Chiều Cao',
      icon: <FontAwesome5 size={16} solid={true} name={'male'} />,
      data: 163,
    };
    return (
      <ScrollView>
        <WorkTimerComponent />
        <BasicCard data={weightData} />
        <BasicCard data={heighttData} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = {
  setUserInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(HealthTab);
