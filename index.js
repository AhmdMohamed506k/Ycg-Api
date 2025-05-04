import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"
const app = express();
const port = process.env.port || 3000
connectionDB()





app.use(express.json());
app.use("/", userRouter); 
app.use("/", PostRouter); 


app.use(cors());







app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))
