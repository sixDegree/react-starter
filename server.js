require("babel-core/register");

var React=require("react");
var ReactDOMServer=require("react-dom/server");
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=='/isomorphicTest.html'){
		var element = React.createElement(require("./isomorphicTest-1.jsx"));
		//var reactHtml=ReactDOMServer.renderToStaticMarkup(element);
		var reactHtml = ReactDOMServer.renderToString(element);
		
		fs.readFile("./isomorphicTest.html",function(err,data){
			if (err) throw err;
			res.writeHead(200,{'Content-Type':'text/html'});
	  		res.end(data.toString().replace("{content}",reactHtml));
		});
	}else if(req.url.endsWith(".js") || req.url.endsWith(".css") 
		|| req.url.endsWith(".jsx")
		|| req.url.endsWith(".html") ){
		fs.readFile("."+req.url,function(err,data){
			if(err) throw err;
			res.writeHead(200);
	  		res.end(data);
		})
	}else{
		res.writeHead(400,{'Content-Type':'text/plain'});
		res.end("not found");
	}
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});