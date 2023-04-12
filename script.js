// Define variables to store blood donors and requests
var donors = [];
var requests = [];

// Define function to add a new donor
function addDonor(name, bloodType, phone, email) {
  var donor = {
    name: name,
    bloodType: bloodType,
    phone: phone,
    email: email
  };
  donors.push(donor);
}

// Define function to add a new request
function addRequest(name, bloodType, phone, email) {
  var request = {
    name: name,
    bloodType: bloodType,
    phone: phone,
    email: email
  };
  requests.push(request);
}

// Define function to search donors by blood type
function searchDonors(bloodType) {
  var matchedDonors = [];
  for (var i = 0; i < donors.length; i++) {
    if (donors[i].bloodType === bloodType) {
      matchedDonors.push(donors[i]);
    }
  }
  return matchedDonors;
}

// Define function to search requests by blood type
function searchRequests(bloodType) {
  var matchedRequests = [];
  for (var i = 0; i < requests.length; i++) {
    if (requests[i].bloodType === bloodType) {
      matchedRequests.push(requests[i]);
    }
  }
  return matchedRequests;
}

// Example usage
addDonor("John Doe", "A+", "123-456-7890", "johndoe@example.com");
addDonor("Jane Doe", "B+", "098-765-4321", "janedoe@example.com");
addRequest("Bob Smith", "AB-", "555-555-5555", "bobsmith@example.com");
addRequest("Sara Lee", "O+", "999-999-9999", "saralee@example.com");

var matchedDonors = searchDonors("A+");
console.log("Matching donors:", matchedDonors);

var matchedRequests = searchRequests("AB-");
console.log("Matching requests:", matchedRequests);
