import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// __dirname isn't available in ES modules, so we need to replicate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Always return the main index.html for any route to support SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Set up the port to listen on
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});