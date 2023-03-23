// select first image using unique id
var jenImg = document.getElementById('jen-img');

// add event listener to first image so that when it is clicked
jenImg.addEventListener('click', function() {
    // make Ajax request to load HTML data for Don Quixote book
    makeRequest('data/pink_data.html');
}, false);



// function that triggers your Ajax request to load the data from a given HTML file
function makeRequest(filePath) {
    // create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // when response has loaded
    xhr.onload = function() {
        // conditional check will not work locally - only a server
		//     if the server status was ok
        if (xhr.status === 200) {
            // update the div to contain  new HTML that is retrieved
            document.getElementById("testing").innerHTML = xhr.responseText;
        }
    }
    
    // prepare the request
    //   HTTP GET to send the request
    //   Path to HTML file
    //   true to specify that the request is asynchronous
    xhr.open("GET", filePath, true);
    
    // send the request
	//  null because there is no data to send
    xhr.send(null);
}


//JQUERYYY

//$('li').hide();
$('p').eq(1).append('<br /><br /><button>Click for more!</button>');

$('button').on('click',function() {
	$(this).fadeOut('slow',function(){
		$("#lists").load('data/list_data.html').hide().slideDown("slow");
	});
});

$(":button").css('background-color','green');
