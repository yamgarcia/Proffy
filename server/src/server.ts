import express from "express";
import routes from "./routes";
//cors allows backend and frontend in different address ports to interact
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
