const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are acceptable :-) ', (name) => {
  console.log(`Thank you,  ${name}.`);

  rl.question('What is an activity you like doing? ', (activity) => {
    console.log(`${activity} is a great activity to enjoy!`);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`${activity} and ${music} go really well together. `);

      rl.question('Which meal is your favorite? (Breakfast, lunch, dinner, etc.) ', (meal) => {
        console.log(`I also love eating ${meal}.`);

        rl.question('What is your favorite thing to eat for that meal? ', (food) => {
          console.log(`${food} is also one of my favorites.`);

          rl.question('Which sport is your favorite? ', (sport) => {
            console.log(`I also play ${sport}, what a coincidence!`);

            rl.question('What is your superpower? Tell us in a few words! Personally, I am really good at doing nothing. ', (power) => {
              console.log(`${name} loves listening to ${music} while ${activity}, eating ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.`);

              rl.close();
            });

          });
        });

      });

    });
  });
});