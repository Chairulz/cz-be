import express from "express";
import cors from "cors";
import Route from "./route/Route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(Route);

//mengatasi cannot GET
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.listen(5000, () => console.log('Server Up and Running...'));
