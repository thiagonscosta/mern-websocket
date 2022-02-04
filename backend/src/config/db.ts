import mongoose from 'mongoose';
// import "dotenv/config";

const connect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit();
    }
}

export default connect;