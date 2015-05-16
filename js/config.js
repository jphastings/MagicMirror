// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'London, GB',
    'units':'metric',
    'lang':lang
};

var feed = 'http://feeds.bbci.co.uk/news/rss.xml';

// creepy compliments from: http://peoplearenice.blogspot.co.uk/p/compliment-list.html
var morning = [
  'Morning handsome!',
  'Enjoy your day!',
  'If you really wanted to, you could probably get a bird to land on your shoulder and hang out with you.'
];
        
var afternoon = [
  'You\'re more fun than a barrel of monkeys.',
  'You are well groomed.',
  'You could probably lead a rebellion.'
];
       
var evening = [
  'You could survive a zombie apocalypse.',
  'Last night I had the hiccups, and the only thing that comforted me to sleep was repeating your name over and over.',
  'You make me think of beautiful things, like strawberries.'
];
