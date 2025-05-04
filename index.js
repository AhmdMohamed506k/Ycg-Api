import express  from 'express';
import connectionDB from './DB/contectionDB.js';
import cors from 'cors';
import userRouter from "./src/modules/users/user.routes.js"
import PostRouter from "./src/modules/posts/post.routes.js"


const app = express()



app.use(cors(corsOptions));
app.use(express.json());
app.use("/", userRouter); 
app.use("/", PostRouter); 




var whitelist = ['*']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}




connectionDB()
app.use('/', (req, res) => res.send('Hello World hi!'))
app.listen(port, () => console.log(`successfully connected`))