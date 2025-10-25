import * as mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null
    }
}

let cached = global.mongooseCache;

if(!cached) {
    cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () : Promise<typeof import("mongoose") | undefined>  => {
    if(!MONGODB_URI) throw new Error("MongoDB URI is missing")

    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
    }
    
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    console.log(`[mongoose] Connected to database (env: ${process.env.NODE_ENV || 'development'})`);
    return cached.conn;
}

/**
 * Gracefully close the mongoose connection (useful for tests or shutdown)
 */
export const disconnectFromDatabase = async (): Promise<void> => {
    if (cached.conn) {
        await mongoose.disconnect();
        cached.conn = null;
        cached.promise = null;
        console.log("[mongoose] disconnected");
    }
};