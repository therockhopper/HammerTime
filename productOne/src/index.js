const Hammer = require('../../node_modules/hammerspace/dist/hammerspace');
console.log('One init')

var client = new Hammer.Client();
var rebound = new Hammer.Rebound();

client.addEvents(['focus']);

rebound.setClient(client);

client.on('focus', proxyHandleFocus);

function proxyHandleFocus(event) {
  console.log('One: on focus');
}
