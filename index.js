// index.js

import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);

const port = 8802;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
