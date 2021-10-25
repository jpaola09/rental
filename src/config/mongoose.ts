//@ts-ignore
import mongoose from 'mongoose';
const MONGO_URI = 'mongodb+srv://root:1994@rental.vjmvn.mongodb.net/rental?retryWrites=true&w=majority';
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_URI || process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});