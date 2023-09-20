import mongoose from 'mongoose';

//文章
const ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
        
    },
    description:{
        type:String
    },
    markdown:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

//用這個模式傳入Article
const Blog = mongoose.model('Article', ArticleSchema);
//傳出
export default Blog;