import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"
const app = express();
const port = process.env.port || 3000


app.use(express.json());

app.use(cors(corsOptions))

var whitelist = ['http://localhost:5173','https://ycg-ecru.vercel.app']
app.use((req,res,next)=>{
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

  
})








app.use("/", userRouter); 
app.use("/", PostRouter); 





connectionDB()
app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))
