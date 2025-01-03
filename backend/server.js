import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

let app = express();
const PORT = process.env.PORT || 3005;

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || '')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});
    