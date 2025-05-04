import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"


const app = express()

app.use(cors( {origin : "*"} ));


const port = process.env.port || 3000







app.use(express.json());
app.use("/", userRouter); 
app.use("/", PostRouter); 


app.use((req,res,next)=>{
    res.header({"Access-Control-Allow-Origin":"*"})
    res.header({'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'})
    res.header({'Access-Control-Allow-Methods': "GET,POST,PUT,DELETE,OPTIONS"})
    res.header({'Access-Control-Allow-Credentails': true})






})


connectionDB()
app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))