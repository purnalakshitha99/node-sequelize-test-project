const express = require('express');
const sequelize = require('./config/database');
const app = express();
const userRoutes = require('./routes/UserRoutes');



app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));   

const User = require('./models/User');

sequelize.sync({ alter: true })
  .then(() => console.log('🛠️ Models synchronized'))
  .catch(err => console.error('❌ Sync error:', err));
