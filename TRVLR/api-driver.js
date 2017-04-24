var fetch = require('node-fetch'); // must install using npm install node-fetch
const Trip = require('./Trip.js');
const Segment = require('./Segment.js');

// Form submission could create API Driver and call send request
// In send request, you could generate UI using tripList
// In iOS: tripList saved as class variable, once it is actually populated, can
//    call tableView.reloadData() to have the UI reflect the new data stored in array


var method = APIDriver.prototype;

function APIDriver(orig, dest, date) {
  this._origin = orig;
  this._destination = dest;
  this._date = date;
  this._url = "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyB-Y3bEZVeCmDQ0FmuLoICx5bW3H5rtKW0";
}

method.sendRequest = function() {
  // Create the POST request body
  let requestJSON = JSON.stringify({
      "request" : {
        "slice": [
          {
            "origin": this._origin,
            "destination": this._destination,
            "date": this._date
          }
        ],
        "passengers": {
          "adultCount": 1
        },
        "solutions": 20
    }
  });

  console.log("Request JSON: " + requestJSON);

  let response = fetch(this._url, { method: 'POST', headers: {'Accept': 'application/json',
    'Content-Type': 'application/json'}, body: requestJSON })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        // console.log(json);

        // Parse the returned JSON
        let trips = json.trips; // sub JSON of all returned trips
        let tripOption = trips.tripOption; // sub JSON of all trip options

        // This tripList is what will be used in the UI to display the options
        var tripList = [];
        // Loop through all options
        for (var i = 0; i < tripOption.length; i++) {
          let flight = tripOption[i].slice;
          let segments = flight[0].segment;

          // Create a new trip with the segments and add it to the list of options
          let trip = new Trip(segments);
          tripList.push(trip);
        }

        // Examples of how to access the console
        console.log(tripList.length);
        console.log(tripList[0].mySegments);
        console.log(tripList[5].mySegments[0].destination);

        return tripList;
        // Instead, might need to generate the UI here
    });
}

module.exports = APIDriver;
