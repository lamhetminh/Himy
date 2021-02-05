import PushNotification from 'react-native-push-notification';
import {NoficationAction} from '../../constant/notificationAction';

export const workTimerNotification = () => {
  PushNotification.localNotificationSchedule({
    title: 'Work Mode',
    message: 'Bạn đã ngồi liên tục 1 phút, hãy vận động một chút nào!',
    date: new Date(Date.now() + 60 * 1000 * 60), // in 60 mins
    allowWhileIdle: true,
    actions: [NoficationAction.WORKMODE_GO, NoficationAction.WORKMODE_STOP],
  });
};
