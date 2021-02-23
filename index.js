const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/phone", require("./routes/api/phone"));
app.listen(PORT, () => {
  // console.log(`Example app ${PORT}`);
});
