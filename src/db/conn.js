const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/thapadynamic')
.then(()=>{
    console.log('connection successful...');
}).catch((err)=>handleError(err));