const http=require('http');
const port=7000;
http.createServer(function(req, res){
    res.write('Hello i am saurabh sharma!');
    res.end();
}).listen(port,function(){
    console.log(`server running on http://localhost:${port}`);
});

// const fs = require('fs');

// const data = "This is my new text file in node js";

// fs.writeFile('readme.txt', data, (err) => {
    
//     if(err) {
//         throw err;
//     }

//     console.log("New Text File created Successfully.");
// })