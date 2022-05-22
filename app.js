const express = require('express');
const app = express();

// Handling static files
app.use('/static', express.static('media'));

// homepage
app.get('/', (req, res) => {
  res.send('Hello world');
});

// handling 404
app.use((req, res, next) => {
  res.status(404).send("bitch! it doesn't exists");
});

// handling 505
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('bitch! something broke on this page.');
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening to port ${port}....`));
