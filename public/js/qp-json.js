
//JSONNN
// select first image using unique id
var bop = document.getElementById('bop');
var jazz = document.getElementById('jazz');
var qplay = document.getElementById('qplay');
var vague = document.getElementById('vague');
var sink = document.getElementById('sink');




// add event listener to first image so that when it is clicked
bop.addEventListener('click', function() {
    // make Ajax request to load JSON data for Don Quixote book at index 0
    makeRequest('data/qp.json',0);
    

}, false);

jazz.addEventListener('click', function() {
    // make Ajax request to load JSON data for Don Quixote book at index 0
    makeRequest('data/qp.json',1);
    

}, false);

qplay.addEventListener('click', function() {
    // make Ajax request to load JSON data for Don Quixote book at index 0
    makeRequest('data/qp.json',2);
    

}, false);

vague.addEventListener('click', function() {
    // make Ajax request to load JSON data for Don Quixote book at index 0
    makeRequest('data/qp.json',3);
    

}, false);

sink.addEventListener('click', function() {
    // make Ajax request to load JSON data for Don Quixote book at index 0
    makeRequest('data/qp.json',4);
    

}, false);


// function that triggers your Ajax request to load the data from a given XML file
//  AND an index number of the object
function makeRequest(filePath, index) {
    // create XMLHttpRequest object
	var xhr = new XMLHttpRequest();

    // when readystate changes
	xhr.onload = function() {
	    // check if the server status was ok
		if (xhr.status === 200) {

            // get JSON data from the server using XMLHttpRequest object's responseText property
			responseObject = JSON.parse(xhr.responseText);
			
			// BUILD UP STRING WITH NEW CONTENT
			var newContent = '';
			
			// add <h3> element with book title
			newContent += '<h3>' + responseObject.members[index].title + '</h3>';
			
			// add <p> element with book author
			newContent += '<p><emp>Artist: </emp>' + responseObject.members[index].Artist + '</p>';
			newContent += '<p><emp>Year Released: </emp>' + responseObject.members[index].Year + '</p>';
			
			
			// add <p> element with book description
            newContent += '<a href=' + responseObject.members[index].url + '>'+ 'Listen Here! </a>';
            // update the div to contain  new HTML that is retrieved
			document.getElementById('test3').innerHTML = newContent;
		}
	};
    
    // prepare the request
    //   HTTP GET to send the request
    //   Path to HTML file
    //   true to specify that the request is asynchronous
	xhr.open('GET',filePath,true);
	
	// send the request
	//  null because there is no data to send
	xhr.send(null);
}