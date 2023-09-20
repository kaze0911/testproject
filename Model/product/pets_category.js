import mongoose from 'mongoose';

//寵物種類(品種)
const PetSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    category:{
        //type:mongoose.Schema.Types.ObjectId,
        type:String,  //ObjectId
        require:true,
    }
});

const Pets = mongoose.model('Pets', PetSchema);

export default Pets;