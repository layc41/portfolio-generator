const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.lenth);
const [name, github] = profileDataArgs;



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });

module.exports = generatePage;