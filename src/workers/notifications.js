import moment from 'moment';
import { Notifications } from 'expo';
import getStore from 'store/getStore';
import { setLastSetNotifications } from 'actions/notifications';
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

export default function () {
  if (cronInterval) {
    cronInterval.clearInterval();
  }

  cronInterval = setInterval(() => {
    const now = moment();

    const { permissions, notifications } = store.getState();

    if (permissions === 'granted' && notifications) {
      if (!hasSetNotificationsToday(now)) {
        setNotifications();
        store.dispatch(setLastSetNotifications(now.unix()));
      }
    }
  }, 20000);
}
