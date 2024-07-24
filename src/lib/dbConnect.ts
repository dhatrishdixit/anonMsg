import mongoose from 'mongoose';

type connectionObjectType = {
    isConnected?: boolean
};

const connectionObject:connectionObjectType = {} 

async function connectDB():Promise<void>{
    
    if(connectionObject.isConnected) return ;


    try {
        if(!process.env.MONGO_URI) throw new Error('MONGO_URI is not defined')
        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log('database connected successfully',connection.connections[0].readyState);
        connectionObject.isConnected = true;
    } catch (error) {
        console.log("error while connecting db",error);
        process.exit(1);
    }
}


export default connectDB;