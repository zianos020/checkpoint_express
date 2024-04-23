const express = require('express');
const app = express();

// Middleware to verify working hours
app.use((req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  const hour = date.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    next(); // Continue to the next middleware or route handler
  } else {
    res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
});

// Serve static files (e.g., CSS)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/services', (req, res) => {
  res.send('Our Services Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us Page');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
