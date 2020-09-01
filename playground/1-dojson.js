const fs = require('fs');

// const user = {
//   name: 'ahmed',
//   age: 24,
// };

// const dataJson = JSON.stringify(user);
// console.log(dataJson);

// fs.writeFileSync('1-json.json', dataJson);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();

const user = JSON.parse(dataJson);
user.name = 'abdo';
user.age = 22;

const userJson = JSON.stringify(user);

fs.writeFileSync('1-json.json', userJson);
