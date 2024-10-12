const express = require('express'); // Import the express module
const app = express(); // Create an instance of an express application
const PORT = 3000; // Set the port number

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send a response to the client
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
