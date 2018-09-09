![botdelive](https://botdelive.com/images/logo.png)

BotDelive
-------------

#### About

BotDelive is a Push Notification and 2-factor authentication API service that works over the chat bots (Telegram and Messenger).

        npm i botdelivejs --save

#### Requirements

1. Create [an account](https://botdelive.com/login).
2. Visit "Create App" menu on the dashboard and create one.
3. Keep the secret key of the created app safe and save the app ID.

#### Usage

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
bdJS.verify('<USER_GENERATED_ACCESS_CODE_HERE>', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
```

**Send 2-factor authentication request (long polling):**
```javascript
bdJS.auth('<USER_ID_HERE>', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
```

**Send Push Notification request:**
```javascript
bdJS.verify('<USER_ID_HERE>', '<MESSAGE_HERE>', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});
```

Documentation
-------------

Complete documentation available at: [https://botdelive.com/docs](https://botdelive.com/docs)