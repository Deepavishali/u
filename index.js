import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
// import urlRoute from "./routes/url.js";
// import URL from "./models/url.js";
import {generateShortURLRoute,totalClicksRoute,originalUrlRoute} from "./routes/url.js"

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

// app.use("url",urlRoute);


//Connecting to mongoose//
mongoose
.connect(process.env.MONGO_URL,{useNewUrlParser:true})
.then(()=>console.log("Mongoose is connected😊"))
.catch((err)=>console.log(err));

//Setting routes//
app.use("/generateShortURL",generateShortURLRoute)
app.use("/",totalClicksRoute)
app.use("/url",originalUrlRoute)



// app.get("/:shortId", async (req, res) => {
//     const shortId = req.params.shortId;
//     const entry = await URL.findOneAndUpdate(
//       {
//         shortId,
//       },
//       {
//         $push: {
//           visitHistory: {
//             timestamp: Date.now(),
//           },
//         },
//       }
//     );
//     res.redirect(entry.redirectURL);
//   });
  
//Setting the port//
app.listen(PORT,()=>console.log("Server started at the port",PORT))

app.get("/",(req,res)=>{
    res.send("This backend has been developed for shortening the long url. This is also the Day44 task")
});