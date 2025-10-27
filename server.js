import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

// Wildcard route to serve house.tmj
app.get('/*', (req, res) => {
    const title = req.params[0]; // Get the title from the URL
    res.sendFile(path.join(__dirname, 'house.tmj'), { headers: { 'Content-Type': 'application/json' } });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
