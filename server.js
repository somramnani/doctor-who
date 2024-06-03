const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, "index.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
