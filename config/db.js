import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};
