# angular-notification [![Build Status](https://travis-ci.org/neoziro/angular-notification.png?branch=master)](https://travis-ci.org/neoziro/angular-notification)

Notification service for Angular using native HTML5 API.

## Install

### Using bower

```
bower install angular-notification
```

## Usage

```js
angular.module('controllers.notification', ['notification'])
.controller('NotificationCtrl', function (Notification) {
  new Notification('New message', {
    body: 'You have a new message.'
  });
})
```

### new Notification(title, options)

Create a new notification, the signature is the same as [the Web Notification API](https://developer.mozilla.org/en/docs/Web/API/notification).

Angular-notification provides some sugar to the default API, the permission is requested automatically. There is also a "delay" option to specify a delay (in ms) after the notification is automatically closed.

```js
new Notification('title', {
  body: 'message',
  dir: 'auto',
  lang: 'en',
  tag: 'my-tag',
  icon: '/my-icon.jpg',
  delay: 1000 // in ms
})
```

### close()

Close the notification.

```js
var notification = new Notification('hello');
notification.close();
```

### $on(name, listener)

Listen an event on the notification. Using this method, the listener is automatically wrapped in an `$apply()`.

The signature is the same as the angular `$scope.$on` signature, it returns the deregistration function.

Avalaible examples are 'click', 'show', 'close' and 'error'.

```js
var notification = new Notification('hello');
var deregister = notification.$on('click', function () {
  console.log('User has clicked.');
});

// Stop listening the event.
deregister();
```

### Notification.requestPermission(callback)

Request explicitly the permission to display notification, [more info in the official API](https://developer.mozilla.org/en-US/docs/Web/API/Notification.requestPermission).

```js
Notification.requestPermission(function (permission) {
  console.log(permission); // default, granted, denied
});
```

## License

MIT