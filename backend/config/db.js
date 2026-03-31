import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://riffathemedia_db_user:7013040@cluster0.aivinvm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}