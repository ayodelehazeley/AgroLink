const express = require('express');
const mongoose = require('mongoose');
const weatherRoutes = require('./routes/weather');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
