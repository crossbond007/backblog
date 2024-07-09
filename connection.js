import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://keshavsaini575:<password>@cluster0.0gbo3ri.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
