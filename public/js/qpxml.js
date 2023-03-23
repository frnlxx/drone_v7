// select first images using unique id
var qpimg = document.getElementById('qp-img');

// add event listener to first image so that when it is clicked
qpimg.addEventListener('click', function() {
    // make Ajax request to load XML data for Don Quixote book at index 0
    makeRequest('data/qp.xml',0);
    
  
}, false);


// function that triggers your Ajax request to load the data from a given XML file
//  AND an index number of the sub-element
function makeRequest(filePath, index) {
    // create XMLHttpRequest object
	var xhr = new XMLHttpRequest();
	
	// get div and overwrite its content to be empty
	var container = document.getElementById('qpbio');
	container.innerHTML = '';

    // when response has loaded
	xhr.onload = function() {
	    // check if the server status was ok
		if (xhr.status === 200) {
		    
            // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
            
            // get XML from the server
			var response = xhr.responseXML;

            // find <book> elements
			var content = response.getElementsByTagName('artist');
			
			// declare variables that will hold new HTML 
			var title, description;
			
			
			// create a new <h3> element
			title = document.createElement('h3');
			// create a new text node with "title" value from sub-element and append to <h3> element
			title.appendChild(document.createTextNode(content[index].getElementsByTagName("title")[0].childNodes[0].nodeValue));
			//  append <h3> element to div
			container.appendChild(title);
	
			
			// create a new <p> element
            description = document.createElement('p');
            // create a new text node with "description" value from sub-element and append to <p> element
			description.appendChild(document.createTextNode(content[index].getElementsByTagName("description")[0].childNodes[0].nodeValue));
			//  append <p> element to div
			container.appendChild(description);
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



