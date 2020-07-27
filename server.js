const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json('Some example response');
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});