const express = require("express");
const app = express();
app.use(express.json());
const PORT = 4000;

app.use("/users", require("./routes/user"));
app.use("/curses", require("./routes/curses"));
app.use("/categories", require("./routes/categories"))
app.use("/orders", require("./routes/orders"))
app.listen(PORT, () => {
  console.log(`Toaster running at : ${PORT}`);
});
