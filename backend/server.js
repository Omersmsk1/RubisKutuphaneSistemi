const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB baglandi");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Rubis Backend Calisiyor");
});

app.use("/api/books", bookRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda calisiyor`);
});