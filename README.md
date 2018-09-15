![botdelive](https://botdelive.com/images/logo.png)

About
-------------

**BotDelive** is a Push Notification and 2-factor authentication API service that works over the chat bots (Telegram and Messenger).

        npm i botdelivejs --save

Requirements
-------------

1. [Create an account](https://botdelive.com/login).
2. Create an app on the dashboard to get appId and secretKey credentials.

Usage
-------------

Let's initialize the library first. Don't forget to replace `<YOUR_APP_ID>` and `<YOUR_SECRET_KEY>`.
```javascript
const botdeliveJS = require('botdelivejs');

const bdJS = new botdeliveJS({
    appId: '<YOUR_APP_ID>',
    secretKey: '<YOUR_SECRET_KEY>',
});
```

**Verify the "Access Code":**
```javascript
bdJS.verify('<BOT_GENERATED_ACCESS_CODE>', function (err, data) {
  if (err) {
    return console.log(err);
  }
  return console.log(data);
});
```

**Send 2-factor authentication request (long polling):**
```javascript
bdJS.auth('<USER_ID>', function (err, data) {
  if (err) {
    return console.log(err);
  }
  return console.log(data);
});
```

**Send Push Notification request:**
```javascript
bdJS.verify('<USER_ID>', '<MESSAGE>', function (err, data) {
  if (err) {
    return console.log(err);
  }
  return console.log(data);
});
```

Documentation
-------------

Complete documentation available at: [https://botdelive.com/docs](https://botdelive.com/docs)
