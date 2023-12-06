import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URL?.replace("<password>", process.env.MONGO_PASS!)!
    );
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("db connected");
    });
    connection.on("error", (err) => {
      console.log("mongo db error");
      process.exit();
    });
  } catch (err: any) {
    console.log(err.message);
  }
};
