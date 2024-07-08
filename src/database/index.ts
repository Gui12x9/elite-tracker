import mongoose from 'mongoose';

export async function setupMongo() {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        console.log('Connecting to database...');
        await mongoose.connect('mongodb://localhost:27017/eitetracker');
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Database not connected:', error);
    }
}


