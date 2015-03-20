# angular-notification

[![Build Status](https://travis-ci.org/neoziro/angular-notification.svg?branch=master)](https://travis-ci.org/neoziro/angular-notification)
[![Dependency Status](https://david-dm.org/neoziro/angular-notification.svg?theme=shields.io)](https://david-dm.org/neoziro/angular-notification)
[![devDependency Status](https://david-dm.org/neoziro/angular-notification/dev-status.svg?theme=shields.io)](https://david-dm.org/neoziro/angular-notification#info=devDependencies)

Notification service for Angular using native HTML5 API.

![notification example](https://f.cloud.github.com/assets/266302/2423762/a38113ac-ab9e-11e3-8e8a-2e4fe299e9f5.png)

## Install

### Using bower

```
bower install angular-notification
```

### Using npm

```
npm install angular-notification
```

## Usage

```js
angular.module('controllers.notification', ['notification'])
.controller('NotificationCtrl', function ($notification) {
  $notification('New message', {
    body: 'You have a new message.'
  });
})
```

### $notification(title, options)

Create a new notification, the signature is the same as [the Web Notification API](https://developer.mozilla.org/en/docs/Web/API/notification).

Angular-notification provides some sugar to the default API, the permission is requested automatically. There is some options in addition to that already present in the official API:

- "delay": Specify a delay (in ms) after the notification is automatically closed. Default `null`.
- "focusWindowOnClick": Focus the window when the notification is clicked (works only on Chrome, Firefox prevent this for security issue). Default `true`.

```js
$notification('title', {
  body: 'message',
  dir: 'auto',
  lang: 'en',
  tag: 'my-tag',
  icon: '/my-icon.jpg',
  delay: 1000, // in ms
  focusWindowOnClick: true // focus the window on click
})
```

### $notificationProvider.setOptions(options)

Set default options.

```js
$notificationProvider.setOptions({icon: '/my-icon.jpg'});
```

### notification.close()

Close the notification.

```js
var notification = $notification('hello');
notification.close();
```

### notification.$on(name, listener)

Listen an event on the notification. Using this method, the listener is automatically wrapped in an `$apply()`.

The signature is the same as the angular `$scope.$on` signature, it returns the deregistration function.

Avalaible examples are 'click', 'show', 'close' and 'error'.

```js
var notification = $notification('hello');
var deregister = notification.$on('click', function () {
  console.log('User has clicked.');
});

// Stop listening the event.
deregister();
```

### $notification.requestPermission()

Request explicitly the permission to display notification, [more info in the official API](https://developer.mozilla.org/en-US/docs/Web/API/Notification.requestPermission).

```js
$notification.requestPermission()
.then(function (permission) {
  console.log(permission); // default, granted, denied
});
```

## License

MIT
