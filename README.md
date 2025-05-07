# BackEnd

This is a simple Node.js + Express backend that serves the absolute path to a local Images directory.

Project Structure:
------------------
backend/
├── Images/
│   └── img1.png
├── server.js
├── package.json
└── README.txt

Getting Started:
----------------
1. Install dependencies:
   npm install

2. Run the server:
   node server.js

   The server will run at: http://localhost:3000/

API Endpoint:
-------------
GET /
Returns the absolute path to the Images folder on your local machine.

CORS:
-----
CORS is enabled to allow requests from frontend apps (like React).

Technologies Used:
------------------
- Node.js
- Express
- CORS

Notes:
------
- This backend returns local file paths, not image files themselves.
- To serve image files publicly, add the following to your server:

    app.use('/images', express.static(path.join(__dirname, 'Images')));

  Then you can access images like:
    http://localhost:3000/images/img1.png

You can expand this project by adding file uploads, database support, or API routes.
