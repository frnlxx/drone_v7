var http = require('http');
	fs = require('fs');

var port = 1337;

function serverStaticFile(res,path,contentType,responseCode){

	if(!responseCode){
		responseCode = 200;
	}

	fs.readFile(__dirname + path, function(err,data){
		if(err){
			res.writeHead(500,  {'Content-Type': 'text/plain'});

			res.end('500 - Internal Error');
		} else{
			res.writeHead(responseCode, {'Content-Type': contentType});

			res.end(data);
		}
	});
}



http.createServer(function(request, res) {

	
	var path = request.url.replace(/\/?(?:\?.*)?$/,'')
			.toLowerCase();

	switch(path){

	case '':
		serverStaticFile(res, '/public/index.html', 'text/html');
		break;

	case '/styles/styles.css':
		serverStaticFile(res, '/public/styles/styles.css', 'text/css');
		break;

	//html pages 

	case '/index':
		serverStaticFile(res, '/public/index.html', 'text/html');
		break;

	case '/contact':
		serverStaticFile(res, '/public/contact.html', 'text/html');
		break;

	case '/pinkflicker':
		serverStaticFile(res, '/public/pinkflicker.html', 'text/html');
		break;

	case '/queenplay':
		serverStaticFile(res, '/public/queenplay.html', 'text/html');
		break;

	case '/releases':
		serverStaticFile(res, '/public/releases.html', 'text/html');
		break;

	//images

	case '/images/amazon.png':
		serverStaticFile(res, '/public/images/amazon.png', 'image/png');
		break;

	case '/images/apple.png':
		serverStaticFile(res, '/public/images/apple.png', 'image/png');
		break;

	case '/images/bop.jpeg':
		serverStaticFile(res, '/public/images/bop.jpeg', 'image/jpeg');
		break;

	case '/images/dplogo.png':
		serverStaticFile(res, '/public/images/dplogo.PNG', 'image/png');
		break;

	case '/images/jazzkids.jpeg':
		serverStaticFile(res, '/public/images/jazzkids.jpeg', 'image/jpeg');
		break;

	case '/images/jenpf.jpeg':
		serverStaticFile(res, '/public/images/jenpf.jpeg', 'image/jpeg');
		break;

	case '/images/pink_flicker.jpeg':
		serverStaticFile(res, '/public/images/pink_flicker.jpeg', 'image/jpeg');
		break;

	case '/images/pinkflicker.gif':
		serverStaticFile(res, '/public/images/pinkflicker.gif', 'image/gif');
		break;

	case '/images/qp.jpg':
		serverStaticFile(res, '/public/images/qp.jpg', 'image/jpg');
		break;

	case '/images/qplay.jpeg':
		serverStaticFile(res, '/public/images/qplay.jpeg', 'image/jpeg');
		break;

	case '/images/queenplay.jpeg':
		serverStaticFile(res, '/public/images/queenplay.jpeg', 'image/jpeg');
		break;

	case '/images/sink.jpeg':
		serverStaticFile(res, '/public/images/sink.jpeg', 'image/jpeg');
		break;

	case '/images/spotify.png':
		serverStaticFile(res, '/public/images/spotify.png', 'image/png');
		break;

	case '/images/vague.jpeg':
		serverStaticFile(res, '/public/images/vague.jpeg', 'image/jpeg');
		break;

	case '/images/404bottom.gif':
		serverStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
		break;

	case '/images/404mid.gif':
		serverStaticFile(res, '/public/images/404mid.gif', 'image/gif');
		break;

	case '/images/x.png':
		serverStaticFile(res, '/public/images/x.png', 'image/png');
		break;
	case '/images/404top_w.jpg':
		serverStaticFile(res, '/public/images/404top_w.jpg', 'image/jpg');
		break;

	// data files

	case '/data/list_data.html':
		serverStaticFile(res, '/public/data/list_data.html', 'text/html');
		break;

	case '/data/pink_data.html':
		serverStaticFile(res, '/public/data/pink_data.html', 'text/html');
		break;

	case '/data/qp.json':
		serverStaticFile(res, '/public/data/qp.json', 'application/json');
		break;

	case '/data/qp.xml':
		serverStaticFile(res, '/public/data/qp.xml', 'application/xml');
		break;

	// js files 

	case '/js/api.js':
		serverStaticFile(res, '/public/js/api.js', 'text/javascript');
		break;

	case '/js/form.js':
		serverStaticFile(res, '/public/js/form.js', 'text/javascript');
		break;

	case '/js/jen.js':
		serverStaticFile(res, '/public/js/jen.js', 'text/javascript');
		break;

	case '/js/jquery-3.6.3.js':
		serverStaticFile(res, '/public/js/jquery-3.6.3.js', 'text/javascript');
		break;

	case '/js/modernizr-custom1.js':
		serverStaticFile(res, '/public/js/modernizr-custom1.js', 'text/javascript');
		break;

	case '/js/pinkhtml.js':
		serverStaticFile(res, '/public/js/pinkhtml.js', 'text/javascript');
		break;	

	case '/js/qp-json.js':
		serverStaticFile(res, '/public/js/qp-json.js', 'text/javascript');
		break;

	case '/js/qpxml.js':
		serverStaticFile(res, '/public/js/qpxml.js', 'text/javascript');
		break;

	case '/js/script.js':
		serverStaticFile(res, '/public/js/script.js', 'text/javascript');
		break;


	case '/404':
		serverStaticFile(res, '/public/404.html', 'text/html');
		break;

	default:
		serverStaticFile(res,'/public/404','text/html', 404);
		break;
	}

}).listen(port);

console.log("Listening...Go to http://localhost:" + port)