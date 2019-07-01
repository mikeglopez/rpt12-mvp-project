const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/users';
const mongoose = require('mongoose');

mongoose.connect(mongoURI, { useCreateIndex: true, useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  // array of favorited restaurant objects
  favorites: []
});

const User = mongoose.model('User', userSchema);


const signup = (userdata) => {
  const record = new User(userdata);
  return record.save()
    .then(user => user)
    .catch((err) => {
      throw err;
    });
};

const favorite = (restaurant) => {

};

const unfavorite = (restaurant) => {

};

const lookup = (username, password) => {

};

module.exports = { signup, lookup };
