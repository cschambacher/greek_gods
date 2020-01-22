const express = require("express");

// const app = express();
const app = require("./server/server");
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});