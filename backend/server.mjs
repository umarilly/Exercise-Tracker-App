
import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import mongoose from 'mongoose';

const { connect, connection } = mongoose;
config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

connect(uri);

connection.once('open', () => {
    console.log('MongoDB Database connection is established successfully');
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server is running on port : ', port);
});