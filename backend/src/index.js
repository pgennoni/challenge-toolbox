import express from "express";
import router from "./routes/api-routers.js";
import configVariables from "./config/config.js";
import cors from "cors";
import errorHandler from "./middlewares/error-handler.js";

const app = express();

app.use(cors());
app.use("/", router);
app.use(errorHandler);

const port = configVariables.port || 3000;

app.listen(port, () => {
  console.log(`Api listening on port ${port}`);
});

export default app;
