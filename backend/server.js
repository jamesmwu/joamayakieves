const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose
  .connect('mongodb+srv://35L:eggert@app.inmyaet.mongodb.net/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to DB'))
  .catch(console.error);

app.listen(3001, () => console.log('Server listening on port 3001'));

const User = require('./models/users');

//Users endpoints
app.get('/users', async (req, res) => {
  const userList = await User.find();

  res.json(userList);
});

app.get('/users/:_id', async (req, res) => {
  const user = await User.findById(req.params._id);

  res.json(user);
});

app.post('/users/create', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  await user.save();

  res.json(user);
});

app.delete('/users/delete/:_id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params._id);

  res.json(result);
});

app.put('/users/edit/:_id', async (req, res) => {
  const user = await User.findById(req.params._id);

  user.username = req.body.username;
  user.password = req.body.password;
  user.save();

  res.json(user);
});
