import moment from 'moment';
import { Notifications } from 'expo';
import { AppState } from 'react-native';
import getStore from 'store/getStore';
import { setLastSetBadge, setLastSetNotifications } from 'actions/notifications';
import shuffle from 'helpers/shuffle';

const store = getStore();

let cronInterval;

Notifications.addListener((notification) => {
  // eslint-disable-next-line
  console.log('Notification', notification);
});

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

function setNotifications() {
  Notifications.cancelAllScheduledNotificationsAsync()
    .then(() => {
      const shuffledVisibleItemsArray = getShuffledItems();

      if (shuffledVisibleItemsArray.length === 0) {
        return;
      }

      let mantra;
      let date;
      let index;

      for (let i = 1; i < 30; i += 1) {
        index = (i - 1) % shuffledVisibleItemsArray.length;
        mantra = shuffledVisibleItemsArray[index];
        date = moment().add(i, 'days').hour(7).minute(0);

        Notifications.scheduleLocalNotificationAsync(
          { title: 'Mantra', data: mantra.id, body: mantra.title },
          { time: date.toDate() },
        );
      }
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

function shouldSetBadgeNumber(now) {
  // Fail if hour is not equal or greater than 7
  if (now.hour() < 7) {
    return false;
  }

  const { lastSetBadge } = store.getState();
  const lastSetBadgeMoment = moment.unix(lastSetBadge);

  // Fail if badge has been set today already
  if (lastSetBadge && lastSetBadgeMoment.isSame(now, 'day')) {
    return false;
  }

  if (AppState.currentState === 'active') {
    return false;
  }

  return true;
}

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    Notifications.setBadgeNumberAsync(0);
  }
});

export default function () {
  if (cronInterval) {
    cronInterval.clearInterval();
  }

  cronInterval = setInterval(() => {
    const now = moment();

    const { permissions, notifications } = store.getState();

    if (permissions === 'granted' && notifications) {
      if (shouldSetBadgeNumber(now)) {
        Notifications.setBadgeNumberAsync(1);
        store.dispatch(setLastSetBadge(now.unix()));
      }

      if (!hasSetNotificationsToday(now)) {
        setNotifications();
        store.dispatch(setLastSetNotifications(now.unix()));
      }

      if (AppState.currentState === 'active') {
        Notifications.setBadgeNumberAsync(0);
      }
    }
  }, 3000);
}
