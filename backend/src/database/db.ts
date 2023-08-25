import mongoose from 'mongoose'

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI!, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};
export default connectionDB;