const express = require("express");
const steelerRoutes = require("./src/steelers/routes");

const app = express();
const port = 6002;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello world");
})

app.use("/api/v1/steelers", steelerRoutes);

app.listen(port, () => console.log('running active port'))