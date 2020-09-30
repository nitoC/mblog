var http=require('http');
var fs=require('fs');
http.createServer((request,response)=>{
	fs.readFile('mblog.html',(error,data)=>{
	response.writeHead(200,{'content-type':'text/html'});
	response.write(data);
	response.end();
    })
}).listen(8081)
console.log('Server running at http://127.0.0.1:8081/'); 
//fs methods ::::fs.appendfile() , fs.writeFile(), fs.open(), fs.readFile()