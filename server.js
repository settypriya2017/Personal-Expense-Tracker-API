const express = require("express");
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(transactionRoutes);
app.use(categoryRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
