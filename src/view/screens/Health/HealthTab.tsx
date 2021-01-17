import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {IState} from '../../../core/redux/rootReducer';
import {setUserInfo} from '../../../core/redux/action/userInfoAction';
export interface HealthTabProps extends React.ClassAttributes<HealthTab> {
  userInfo: IState['userInfo'];
  setUserInfo: typeof setUserInfo;
}

class HealthTab extends React.Component<HealthTabProps> {
  render() {
    return (
      <ScrollView>
        <Text>{this.props.userInfo?.name}</Text>
        <Button
          onPress={() => this.props.setUserInfo({name: 'An'})}
          title="Change"
        />
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
