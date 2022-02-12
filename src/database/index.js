const mongoose = require('mongoose');

const uri = process.env.BD_URI;

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
  },
    () => console.log("Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect")
}

module.exports = mongoose;
