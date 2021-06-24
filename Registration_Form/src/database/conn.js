const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration", {
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(()=>{
    console.log("Connected");
}).catch((e) => {
    console.log("No Connection");
})