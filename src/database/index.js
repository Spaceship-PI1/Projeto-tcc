const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:raqueltcc@dory.7zpsx.mongodb.net/dorydb?retryWrites=true&w=majority";

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