const mongoose=require('mongoose');

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Random_Quote_Generator_Dev");
};

module.exports=connect;
