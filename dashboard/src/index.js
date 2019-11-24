const Hammer = require('../../node_modules/hammerspace/dist/hammerspace')

var client = new Hammer.Client();
var rebound = new Hammer.Rebound();

client.addEvents(['focus']);

rebound.setClient(client);
rebound.setID('productOne');

client.on('focus', proxyHandleFocus);

function proxyHandleFocus(event) {
  console.log('Dash: on focus');
}

setTimeout(() => {
  client.dispatch('focus');
}, 2000);
