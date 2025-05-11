import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


// dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5050;

app.use(express.static(__dirname));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});

