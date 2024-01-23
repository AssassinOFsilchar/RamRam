import { app } from "./app.js";
import { connectDB } from "./data/database.js";

const port = process.env.PORT; 
connectDB();

app.listen(port, () => {
  console.log(`Server is Working at ${port} in ${process.env.NODE_ENV} mode`);
});


// cors ka lafda seh dur hi rho, itna kuch kaam ka nehi hai woh 
// stack edit seh mast markup lang wala doc readme file tayyar ho jata hai guys

