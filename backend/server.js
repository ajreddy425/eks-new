const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <style>
                body { background-color: #282c34; text-align: center; padding-top: 50px; }
                h1 { font-size: 50px; color: #61dafb; font-family: Arial, sans-serif; }
                p { font-size: 30px; color: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            <h1>🚀 Hello, Node.js Backend! 🚀</h1>
            <p>Welcome to your Express server! 🎉</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
