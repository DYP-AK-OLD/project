const events = require("events");
const emitter = new events.EventEmitter();

//Register a listener
emitter.on("messageLogged", function () {
  console.log("listeed called");
});

//Raise an event
emitter.emit("messageLogged");
