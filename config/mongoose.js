const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb://127.0.0.1:27017/placement4"; 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected to mongoDB');
}
