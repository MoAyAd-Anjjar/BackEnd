const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Serve static files from the 'Images' folder
app.use('/images', express.static(path.join(__dirname, 'Images')));



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
