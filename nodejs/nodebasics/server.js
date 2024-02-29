const http=require('http');
const port=7000;
http.createServer(function(req, res){
    res.write('Hello World!');
    res.end();
}).listen(port,function(){
    console.log(`server running on http://localhost:${port}`);
});
