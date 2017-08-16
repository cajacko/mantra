import moment from 'moment';
import { Notifications } from 'expo';
import getStore from 'store/getStore';
import { setLastSetNotifications } from 'actions/notifications';
import shuffle from 'helpers/shuffle';

const store = getStore();

let cronInterval;

function getShuffledItems() {
  const { items } = store.getState();
  const shuffledIds = shuffle(Object.keys(items));
  const shuffledVisibleItemsArray = [];

  shuffledIds.forEach((id) => {
    const item = items[id];

    if (item.deleted === false) {
      shuffledVisibleItemsArray.push(item);
    }
  });

  return shuffledVisibleItemsArray;
}

function setNotification(mantra, date) {
  Notifications.scheduleLocalNotificationAsync(
    { title: 'Mantra', data: mantra.id, body: mantra.title },
    { time: date.toDate() },
  );
}

function setNotifications(notifications) {
  const shuffledVisibleItemsArray = getShuffledItems();

  if (shuffledVisibleItemsArray.length === 0) {
    return;
  }

  const notificationTimes = [];

  let date;
  const now = moment();

  for (let i = 0; i < 30; i += 1) {
    date = moment().add(i, 'days').minute(0);

    const notificationsArr = Object.keys(notifications);

    for (let j = 0; j < notificationsArr.length; j += 1) {
      const notification = notificationsArr[j];

      if (notifications[notification]) {
        date = moment().add(i, 'days').hour(notification).minute(0);
        if (date.utc() > now.utc()) {
          notificationTimes.push(date);
        }
      }
    }
  }

  let index;
  let mantra;

  notificationTimes.forEach((notificationTime, i) => {
    index = i % shuffledVisibleItemsArray.length;
    mantra = shuffledVisibleItemsArray[index];
    setNotification(mantra, notificationTime);
  });
}

function hasSetNotificationsToday(now) {
  const { lastSetNotifications } = store.getState();
  const lastSetNotificationsMoment = moment.unix(lastSetNotifications);

  // Fail if notifications have been set today already
  if (lastSetNotifications && lastSetNotificationsMoment.isSame(now, 'day')) {
    return true;
  }

  return false;
}

export default function () {
  if (cronInterval) {
    cronInterval.clearInterval();
  }

  cronInterval = setInterval(() => {
    const now = moment();

    const { permissions, notifications } = store.getState();

    if (permissions === 'granted' && notifications) {
      if (!hasSetNotificationsToday(now)) {
        Notifications.cancelAllScheduledNotificationsAsync()
          .then(() => setNotifications(notifications));

        store.dispatch(setLastSetNotifications(now.unix()));
      }
    }
  }, 20000);
}
