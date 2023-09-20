import mongoose from 'mongoose';

//商品
const ProductSchema = new mongoose.Schema({
    //種類
    category:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String, //ObjectId
        require:true
    },
    //商品名
    title:{
        type:String,
        require:true
    },
    //價格
    price:{
        type:Number,
        require:true
    },
    //食用日期
    date:{
        type:String,
        require:true
    },
    //存貨
    stock:{
        type:Number,
    },
    //大小種類 B,M,S
    size:{
        type:String,
    }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;