import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?: number
}


const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    // Checking If database is already connected or not
    if(connection.isConnected){
        console.log("Already Connected to database")
        return
    }
    try {
        const db = await mongoose.connect(
            process.env.MONGODB_URI || '', {}
        )
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1)
    }
}



export default dbConnect;


