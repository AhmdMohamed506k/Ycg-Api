import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"


const app = express()

app.use(cors("Access-Control-Allow-Origin: * "));


const port = process.env.port || 3000







app.use(express.json());
app.use("/", userRouter); 
app.use("/", PostRouter); 





connectionDB()
app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))