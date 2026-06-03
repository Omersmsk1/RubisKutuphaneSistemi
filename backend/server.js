const express = require("express");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Rubis Backend Calisiyor");
});

app.use("/api/books", bookRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda calisiyor`);
});