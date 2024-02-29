const fs = require('fs');

const data = "This is my new text file in node js";

fs.writeFile('readme.txt', data, (err) => {
    
    if(err) {
        throw err;
    }

    console.log("New Text File created Successfully.");
})