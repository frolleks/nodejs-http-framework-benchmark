const { createApp } = require("pathless");

const app = createApp();

app.get("/", (req, res) => {
  res.text("Hello from Pathless");
});

app.listen(3002, () => {
  console.log("Application is running on port 3002");
});
