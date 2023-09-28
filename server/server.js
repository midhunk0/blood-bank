const express = require("express");  //simplifies building web applications and APIs
const detenv = require("dotenv");  //makes managing sensitive or configuration-related data easy and secure
const colors = require("colors");  //adds color to console output
const morgan = require("morgan");  //track and log incoming requests to server
const cors = require("cors");  //enabling cross origin resource sharing in web applications (allows server to handle requests from different domains)
const connectDB = require("./config/db");

//detenv config
detenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoutes"))
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"))

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(
        `node server running in ${process.env.DEV_MODE} mode on port ${PORT}`
        .bgBlue.white    
    )
});