let Twit = require('twit');
let emoji = require('node-emoji');
let config = require('./config');
let user = require('./user');
let fs = require('fs');

let T = new Twit(config);
let streakCounter = -1;
let messages = [
    'Great job today!', 
    'Keep up the great work', 
    'You\'re doing great!', 
    'Wow amazing work!',
    'That was first class work!',
    'That\'s a real work of art',
    'Superb!',
    'That\'s great!'
];
let streakMessage = emoji.get('fire');

let sendTweet = () => {
    let randomNum = Math.floor(Math.random() * messages.length);
    let message = `${user.user} ${messages[randomNum]} ${streakMessage} ${streakCounter}`;
    console.log(message);

    T.post('statuses/update', {
        status: message 
    });
}

fs.readFile('./counter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    streakCounter = data;

    sendTweet();

    streakCounter++;

    fs.writeFile('./counter.txt', streakCounter, (err) => {
        if (err) throw err;
            console.log('Saved updated value');
    });

});

