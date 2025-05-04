import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"
const app = express();
const port = process.env.port || 3000


app.use((req, res, next) => {
  cors({origin :"*"})
  req.header({'Access-Control-Allow-Origin': "*"});
  req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  req.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  req.header('Access-Control-Allow-Credentials', true);
  next();
});


app.use(express.json());
app.use("/", userRouter); 
app.use("/", PostRouter); 






connectionDB()
app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))
