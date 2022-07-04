const app = require("./app");
const dotenv = require('dotenv').config();

// environment variable
const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} PORT...`);
});


