// const EventEmitter=require("events");
// const myEmitter= new EventEmitter();
// myEmitter.on('greet',(name)=>{console.log(`hello, ${name}! welcome to node.js`);});
// myEmitter.on('exit',()=>{console.log("application closed");});
// myEmitter.emit("greet","2nd year");
// myEmitter.emit("exit");

const {EventEmitter} = require('events');
class Button extends EventEmitter{}
const button = new Button();
button.on('click',()=> console.log('Button clicked'));
button.on('mouseover',()=> console.log('Mouse is over the button.'));
button.emit('click');
button.emit('mouseover');