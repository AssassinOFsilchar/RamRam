import { app } from "./app.js";
import { connectDB } from "./data/database.js";
 
connectDB();
const port=3000
app.listen(port, () => {
  console.log(`Server is Working at ${port}`);
});
 