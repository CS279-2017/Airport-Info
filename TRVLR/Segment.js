var method = Segment.prototype;

function Segment(segmentJSON) {
  this.airline = segmentJSON.flight.carrier;
	this.number = segmentJSON.flight.number;

  // Note: we are doing leg[0] because for some reason, its encapsulaed in an array

  // Parse the departure time into something nice
	let dept = segmentJSON.leg[0].departureTime;
  var start = dept.indexOf("T");
  var time = dept.substring(start + 1, start + 6);
  this.departureTime = time;

  // Parse the arrival time into something nice
  let arriv = segmentJSON.leg[0].arrivalTime;
  start = arriv.indexOf("T");
  time = arriv.substring(start + 1, start + 6);
	this.arrivalTime = time;

	this.origin = segmentJSON.leg[0].origin;
	this.destination = segmentJSON.leg[0].destination;
}

module.exports = Segment;
