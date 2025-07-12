import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import rootRouter from "./routes/index.route.js";
import { ConnectDb } from "./db/db.js"; // Import the DB connection

const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", rootRouter);

// Start the server after DB connects
ConnectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.error("Failed to connect and start the server.");
  });
