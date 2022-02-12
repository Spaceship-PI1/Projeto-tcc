const mongoose = require('mongoose');

const uri = MONGO_DB;

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
