const exportedUser = require('./user.js');

const sagor = exportedUser.sagor;
console.log('Sagor: ', sagor)

exportedUser.printName(exportedUser.shubho);
console.log('...................');
console.log(exportedUser);