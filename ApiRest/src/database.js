let mongoose = require("mongoose");




mongoose.connect('mongodb+srv://robermelero:administrador@cluster0.rrqe2fn.mongodb.net/apiStars', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error)
})