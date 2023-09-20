import mongoose from 'mongoose';

//種類
const CategorySchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    }
});


const Category = mongoose.model('Category', CategorySchema);

export default Category;    