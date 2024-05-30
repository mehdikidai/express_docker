import express from "express";
import userRouter from "./router/userRouter.js"
const app = express();


app.use('/api',userRouter)



app.listen(3000, () => console.log("App Running ..."));
