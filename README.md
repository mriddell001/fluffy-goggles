# fluffy-goggles
//Function creator: Matthew Riddell-Ide
//Creation date: July 25, 2018
//GitHub username: mriddell001

//Function name: sortETA

//Function purpose: Sort an array of locations based on the estimated time of
//arrival from an origin location. Return the proper order of locations as an
//array.

//Function Arguments:
//This function accepts two dictionaries of key/value pairs. They are:
//  locationsDictionary - A dictionary of key/value pairs for location sorting.
//  originDictionary - A dictionary of key/value pairs defining the origin.
//In the dictionary, the keys it expects are:
//  Address - Optional.
//  City - Optional if Zip Included.
//  State - Optional if Zip Included.
//  Zip - Mandatory if City and/or State is empty.
//
//The values are arrays of strings containing the location data for the key at
//that index. The data at that index may be blank as long as it fits the minimum
//rules. If the address field is blank then either zip or city & state must not.
