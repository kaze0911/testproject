import Article from '../../Model/blog/blog.js';

export const GetAdmin = (req,res) =>{
    res.render('admin/admin.ejs');
}

export const GetA_Store = (req,res) =>{
    res.render('admin/store/A_store.ejs');
}

export const GetA_Blog = async (req, res) =>{
    const GetArticle = await Article.find().sort({createdAt:'desc'}); //降序：新文章一直在頂部 
    res.render('admin/blog/A_blog.ejs', { articles: GetArticle });  //html：mongodb -->ejs ForEach
}