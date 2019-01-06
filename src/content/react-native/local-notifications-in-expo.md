---
layout: post
title: React Native Local Notifications In Expo
description: How to send Local Notifications in React Native using expo.
author: Subramanya Chakravarthy
date: 2018-11-20
category: react-native
tags:
  - react-native
---

Notifications provide **short**, **timely** information about events in your app while it's not in use. Every app wants it users to engage with their app for more time. I think Notifications are the best way to remind user gently about the presence and provide some actionable stuff like If the app is based about workouts, you can remind user not to loose streak.

I am using expo to demonstrate Local Notifications. In order to show notifications to user, firstly we have to take permission from the user

Here is the [Source Code](https://github.com/chakrihacker/react-native-notifications) to follow along

In order to ask permissions to use expo I use this beautiful `async` function which returns a Boolean status of notifications

```jsx
import { Permissions } from 'expo';

askPermissions = async () => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== granted) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== granted) {
    return false;
  }
  return true;
};
```

There are two ways we can use Local Notifications, one is immediate notification and other is scheduled Notification

Let's create a function which sends immediate Notification

```jsx
import { Notifications } from 'expo';

sendNotificationImmediately = async () => {
  let notificationId = await Notifications.presentLocalNotificationAsync({
    title: 'This is crazy',
    body: 'Your mind will blow after reading this',
  });
  console.log(notificationId); // can be saved in AsyncStorage or send to server
};
```

import Notifications first and then calling presentLocalNotificationAsync from Notifications and it takes [LocalNotification](https://docs.expo.io/versions/latest/sdk/notifications#localnotification) object which contains title, body, data, and some other options for android and ios. It returns the Notification Id which can be used to dismiss programmatically.

You can dismiss Notifications in two ways, One dismiss All Notifications or dismiss Notification By id

To dismiss all notifications call `Notifications.dismissAllNotificationsAsync()`

To dismiss Notification by id call `Notifications.dismissNotificationAsync(localNotificationId)`

Now Let's create a function which schedules Notification

```jsx
scheduleNotification = async () => {
  let notificationId = Notifications.scheduleLocalNotificationAsync(
    {
      title: "I'm Scheduled",
      body: 'Wow, I can show up even when app is closed',
    },
    {
      repeat: 'minute',
      time: new Date().getTime() + 10000,
    },
  );
  console.log(notificationId);
};
```

The _scheduleLocalNotificationAsync_ takes two arguments, first is **notification object** and second one takes **schedulingOptions object**. The options are whether to repeat or not and other is at what time notification should pop. In above example I'm using repeat every minute and then scheduling notification after 10 secs from current time.

Now you have scheduled notification, but what if you want to cancel a scheduled one. It's the same as dismissing notifications. You can dismiss all scheduled notifications by calling `Notifications.dismissAllNotificationsAsync()` or `Notifications.cancelScheduledNotificationAsync(localNotificationId)` based on notification id.

If you have any questions shoot me a direct message in [twitter](https://twitter.com/chakrihacker)
