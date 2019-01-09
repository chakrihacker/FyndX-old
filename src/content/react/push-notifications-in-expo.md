---
layout: post
title: React Native Push Notifications using Expo 🔔
description: How to use Push Notifications in React Native.
author: Subramanya Chakravarthy
date: 2018-11-24
category: react
tags:
  - react
---

The architecture for server based notifications is:

![Push Notification Architecture](https://i.imgur.com/sSs00st.png)

Your Android/ios Phone is continuously connected to FCM(Firebase Cloud Messaging)/APNS(Apple Push Notification Service), so it's best to utilize them. In order to send notifications, first we need Push Notification Id which is unique to device and app.

To get Expo Push Notification Id

```jsx
askPermissions = async () => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    return false;
  }
  return true;
};

registerForPushNotifications = async () => {
  const enabled = await this.askPermissions();
  if (!enabled) {
    return Promise.resolve();
  }
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  return token;
};
```

We ask user to grant notifications using askPermissions function. It returns true or false representing the permission. Then we call `Notifications.getExpoPushTokenAsync()` async function to get notification. After getting notification you can send it to server to store the id. For demonstration purposes I will just copy the id using react-native's Clipboard method.

```jsx
enablePushNotifications = async () => {
  let token = await this.registerForPushNotifications();
  if (token) {
    Clipboard.setString(token);
    this.setState({ token });
  }
};
```

Now whenever you want to send notification, Expo provides their server sdk in multiple languages like node.js, python, ruby. More details are [here](https://docs.expo.io/versions/latest/guides/push-notifications#2-call-expos-push-api-with-the).

I am using Expo's [Push notification tool](https://expo.io/dashboard/notifications) to test it, instead of hosting in my server.

![Expo Push Notification Dashboard](https://i.imgur.com/XDHLmjO.png)

Now paste your Expo Push Notification, that you got from the app. Message title and Message body is necessary and you can configure extra data like Play sound, ios badge count, Android channel id, JSON data.

Now Press that big blue Send a notification button, and look at your phone. Ta-DA 🎉 you have received a notification.

Now you may want to read the notification and send the user to appropriate screen. To do that we need to create a notification listener. I will add a notification listener in the componentDidMount of top component

```jsx
state = {
  token: '',
  data: null,
  origin: null,
};

componentDidMount = () => {
  this.notificationSubscription = Notifications.addListener(this.handlePushNotification);
};

componentWillUnmount = () => {
  this.notificationSubscription.remove();
};

handlePushNotification = ({ origin, data }) => {
  this.setState({ data, origin });
};
```

I have added a listener and calling handlePushNotification function when ever notification is clicked. You will receive a JSON object containing **origin** and data as keys. where origin can be either received or selected. If origin is received then app is open and it can be either in foreground or background. If origin is selected app is in closed state and opened via notification. **data** key represents the JSON data passed

In handlePushNotification I am just setting into state, you can redirect to specific screen or perform some action. That's it.
