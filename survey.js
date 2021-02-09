const readline = require('readline');
const answers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  answers.name = answer;
  rl.question('What\'s your job title? ', (answer) => {
    answers.job = answer;
    rl.question('What kind of music do you like? ', (answer) => {
      answers.music = answer;
      rl.question('Favorite food? ', (answer) => {
        answers.food = answer;
        rl.question('Favorite sport? ', (answer) => {
          answers.sport = answer;
          rl.close();
          console.log(`Your name is ${answers.name} and you work as a ${answers.job}. You love to play ${answers.sport}, listen to ${answers.music} and eat ${answers.food}.`);
        });
      });
    });
  });
});