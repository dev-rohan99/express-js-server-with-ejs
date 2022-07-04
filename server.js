const app = require("./app");
const dotenv = require('dotenv').config();

// environment variable
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} PORT...`);
});


