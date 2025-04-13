const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(bodyParser.json());

const url = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const dbName = 'passop';
const port = 3000;

async function main() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('✅ Connected successfully to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('passwords');

        // Get all passwords
        app.get('/', async (req, res) => {
            try {
                const findResult = await collection.find({}).toArray();
                res.json(findResult);
            } catch (err) {
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        });

        // Save a password
        app.post('/', async (req, res) => {
            const { site, username, Password, id } = req.body;

            if (!site || !username || !Password) {
                return res.status(400).json({ error: 'Site, Username and password are required' });
            }

            try {
                const result = await collection.insertOne({ id, site, username, Password });
                res.json({ success: true, message: 'Saved successfully', id: result.insertedId });
            } catch (err) {
                res.status(500).json({ success: false, error: 'Failed to save data' });
            }
        });

        // Delete a password by id
        app.delete('/', async (req, res) => {
            const password = req.body;
            try {
                const result = await collection.deleteOne(password);
                res.json({ success: true, message: 'Saved successfully', id: result.insertedId });
            } catch (err) {
                res.status(500).json({ success: false, error: 'Failed to save data' });
            }
        });

        app.listen(port, () => {
            console.log(`🚀 Server listening on http://localhost:${port}`);
        });

    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
    }
}

main();
