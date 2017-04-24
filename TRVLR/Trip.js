const Segment = require('./Segment.js');

var method = Trip.prototype;

function Trip(segments) {
  // Store a class variable containing the list of segments for the flight
  this.mySegments = [];
  // Loop through each segment in the flight
  for (var i = 0; i < segments.length; i++) {
    // Create a segment model for each segment and add it to the list
    let curSeg = new Segment(segments[i]);
    // console.log("CurSeg");
    // console.log(curSeg);
    this.mySegments.push(curSeg);
  }
}

module.exports = Trip;
