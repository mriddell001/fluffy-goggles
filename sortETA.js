//Function creator: Matthew Riddell-Ide
//Creation date: July 25, 2018
//GitHub username: mriddell001

//Function name: sortETA

//Function purpose: Sort an array of locations based on the estimated time of
//arival from an origin location. Return sorted locations in the form of a
//dictionary.

//Function Arguments:
//This function accepts two dictionaries of key/value pairs. They are:
//  locationsDictionary - A dictionary of key/value pairs for location sorting.
//  originDictionary - A dictionary of key/value pairs defining the origin.
//In the dictionary, the keys it expects are:
//  Address - Optional.
//  City - Optional if Zip Included.
//  State - Optional if Zip Included.
//  Zip - Manditory if City and/or State is empty.
//
//The values are arrays of strings containing the location data for the key at
//that index. The data at that index may be blank as long as it fits the minimum
//rules. If the address field is blank then either zip or city & state must not.

function sortETA(locationsDictionary, originDictionary) {
  var addArray = locationsDictionary[address];
  var citArray = locationsDictionary[city];
  var staArray = locationsDictionary[state];
  var zipArray = locationsDictionary[zip];

  var locationCount = zipArray.length;

  var oAddress = originDictionary[address];
  var oCity = originDictionary[city];
  var oState = originDictionary[state];
  var oZip = originDictionary[zip];
  var m_origin = "";

  if (!isEmpty(oAddress)) {origin = origin.concat(oAddress,' ');}
  if (isEmpty(oCity)&&isEmpty(oState)) {
    if (isEmpty(oZip)) {
      window.alert('Directions request failed: Insufficient origin data.');}
    else {origin = origin.concat(oZip);}}
  else {origin = origin.concat(oCity,',',oState);}



  var directionsService = new google.maps.DirectionsService;

  var etaArray = [];
  for (var i = 0; i < locationCount; i++) {
    var error = FALSE;
    var m_dest = "";
    if (!isEmpty(addArray[i])) {m_dest = m_dest.concat(addArray[i],' ');}
    if (isEmpty(citArray[i])&&isEmpty(staArray[i]) {
      if (!isEmpty(zipArray[i])) {
        m_dest.concat(zipArray[i]);
      else {etaArray.push(-1);error=TRUE;;}}
    else {m_dest = m_dest.concat(oCity,',',oState);}
    if(!error) {
      var travelTime = calculateTravelTime(directionsService,m_origin,m_dest);
      etaArray.push(travelTime);
    }
  }
  //Sort travel times. Return sorted array.
}

function calculateTravelTime(directionsService, m_origin, m_dest) {
  directionsService.route({
    origin: m_origin,
    destination: m_dest,
    travelMode: 'DRIVING'
    }, function(response, status) {
          if (status === 'OK') {
            return response.routes[0].legs[0].duration.text;
          } else {
            window.alert('Directions request failed due to ' + status);
            return -1;
          }
    });
}

function isEmpty(str) { return (!str || 0 === str.length); }
