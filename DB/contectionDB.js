import mongoose from "mongoose";

const connectionDB = async () => {
    return await mongoose.connect("mongodb+srv://ahmed:1234@myycgcluster.7t9wx.mongodb.net/Ycg?retryWrites=true&w=majority&appName=myYcgCluster")
        .then(() => console.log("successfully connected  :)"))
        .catch((error) => console.log("catch Error", error));





}

export default connectionDB;