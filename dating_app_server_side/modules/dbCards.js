const { MongoClient } = require("mongodb");

// export default mongoose.model("cards", cardSchema);
module.export = cardSchema;

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
