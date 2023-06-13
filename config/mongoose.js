const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://ashishbundela123:GBZerteAAf2lzu3Z@cluster0.enidn78.mongodb.net/placement_cell"; 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected to mongoDB');
}


