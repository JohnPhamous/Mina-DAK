# Mina-DAK

This is a Twitter bot that will send a tweet to a user every day at a random time. 

## Twitter API

You will need to create an app on ![Twitter](https://apps.twitter.com/) to get the API credentials. Once created, you'll need to create a `config.js` with the following content:

```
module.exports = {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
}

```
You will also create a `user.js`. This file will contain the user that you'd like to tweet at's handle:

```
module.exports = {
    user: '@kodamina'
}
```

## Running

You will need Node.js, and at installed. Run `bash caller.sh`. This will schedule `server.js` every midnight using at and will run at a random time within the day.
