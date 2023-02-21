const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = 
['What\'s your name? Nicknames are also acceptable :)',
'What\'s an activity you like doing?',
'What do you listen to while doing that?',
'Which meal is your favourite (eg: dinner, brunch, etc.)?',
'What\'s your favourite thing to eat for that meal?',
'Which sport is your absolute favourite?',
'What is your superpower?']

  rl.question(arr[0], (answer1) => {
    rl.question(arr[1], (answer2) => {
      rl.question(arr[2], (answer3) => {
        rl.question(arr[3], (answer4) => {
          rl.question(arr[4], (answer5) => {
            rl.question(arr[5], (answer6) => {
              rl.question(arr[6], (answer7) => {

                console.log(`Thank you for your valuable feedback: ${answer1} - ${answer2}  - ${answer3} - ${answer4} - ${answer5} - ${answer6} - ${answer7}`);
  
      rl.close();
              });
            });
          });
        });
      });
    });
  });