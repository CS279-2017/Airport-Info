// Just a driver for the files I was working on

const APIDriver = require('./api-driver.js');
const Trip = require('./Trip.js');
const Segment = require('./Segment.js');

// Do this with UI form submission
let api = new APIDriver("BNA", "DCA", "2017-05-04");
// Note: this doesn't work. Need to find a different way to generate for UI
let tripList = api.sendRequest();
console.log(tripList);
