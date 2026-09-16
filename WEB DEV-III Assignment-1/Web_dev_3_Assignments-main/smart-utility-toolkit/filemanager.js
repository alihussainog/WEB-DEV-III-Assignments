// Radhe Radhe 

const fs = require("fs");


fs.writeFile("./test.txt", "Hello Everyone", (err) => {
    if (err) {
        console.log("something went wrong");
    } else {
        console.log("Creating File...")
        console.log("File creataed successfully");

    }
})
    ;

fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err){
        console.log("something went wrong")
    }else{
        console.log("Reading File")
        console.log(data)
    }
})





fs.appendFile("./test.txt","\nlearning FS Module",(err)=>{
    if (err){
        console.log("error find",err)
    }else{
        console.log("Updated sucessfully")
    }
})




fs.unlink("./test.txt",(err)=>{
    if(err){
        console.log("something went wrong")
    }else{
        console.log("file deleted successfully...")
    }
})