import mongoose from "mongoose";

const connect = async (retries = 5, delay = 5000) => {
  let attempts = 0;

  while (attempts < retries) {
    try {
      await mongoose.connect(process.env.MONGO_DB);
      console.log("✅ Database connected successfully");
      return;
    } catch (err) {
      attempts++;
      console.error(`❌ Database connection failed (Attempt ${attempts}/${retries}):`, err.message);

      if (attempts < retries) {
        console.log(`🔄 Retrying in ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error("❌ Maximum retry attempts reached. Could not connect to the database.");
        process.exit(1);
      }
    }
  }
};

export default connect;
