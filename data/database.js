import mongoose from "mongoose";

export const connectDB = () =>
   mongoose
    .connect(process.env.ATLAS, {
      dbName: "TodoApplicationDB",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((err) => {
      console.log(err);
    });
 
    // problem tha ki woh link ache seh nehi likha tha maine