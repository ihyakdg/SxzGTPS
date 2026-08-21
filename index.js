const express = require("express");
const app = express();

const serverData = `server|18.233.40.167
port|55000
type|1
type2|1
loginurl|nopy-gtps.vercel.app
beta_server|127.0.0.1
beta_port|17091
beta_type|1
meta|localhost
RTENDMARKERBS1001`;

app.post("/growtopia/server_data.php", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send(serverData);
});

app.get("/growtopia/server_data.php", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send(serverData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running..."));

module.exports = app;
