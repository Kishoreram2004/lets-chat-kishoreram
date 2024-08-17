import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToDB.js";

const app= express();

dotenv.config();

const PORT= process.env.PORT || 5000;



app.use(express.json())

app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    connectToDB();
    console.log(`server is running on port ${PORT}`)
}
);
