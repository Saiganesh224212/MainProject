const sendFile=(filePath, res)=>{
    // console.log("image",filePath)
    // console.log("sendFile called");
    res.sendFile(filePath, (err)=>{
        if(err){
            console.log("Error Image send ",err)
            res.status(err.status).end();
        }
    })
}
module.exports = sendFile;