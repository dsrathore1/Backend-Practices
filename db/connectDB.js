import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.URI, {
      dbName: "UserAuth",
    });
    console.log(`Your db is connected, DB name :- ${connection.name}`);
  } catch (error) {
    if (error) throw error;
  }
};

export default connectDB;
