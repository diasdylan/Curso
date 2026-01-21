const App = require('./App');

App.createUser('Drilo', 'd@n.n');
App.findUser('d@n.n');

App.doDeposit('d@n.n', 1000);
App.doLoan('d@n.n', 200, 2);
// App.checkUserList;
App.checkUserAccount('d@n.n');
App.dotransfer('d@n.n', 666);
App.checkUserAccount('d@n.n');