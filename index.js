import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"


const app = express()




app.use(cors( {origin:"*"} ));

app.use( function(req,res,next){
    req.header({"Access-Control-Allow-Origin":"*"})
    req.header({'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'})
    req.header({'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'})
    req.header({'Access-Control-Allow-Credentails': true})
});

const port = process.env.port || 3000







app.use(express.json());
app.use("/", userRouter); 
app.use("/", PostRouter); 





connectionDB()
app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))