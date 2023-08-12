const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.static("public"));

app.get('/api/:date', (req, res) => {
  const inputDate = req.params.date;
  let date;

  if (!inputDate) {
    date = new Date();
  } else {
    date = new Date(inputDate);
    if (isNaN(date.getTime())) {
      return res.json({ error: 'Invalid Date' });
    }
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
