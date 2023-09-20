import Article from '../Model/blog/blog.js';

export const GetBlog = async (req, res) =>{
    const GetArticle = await Article.find().sort({createdAt:'desc'}); //降序：新文章一直在頂部 
    res.render('blog/blog.ejs', { article: GetArticle });  //html：mongodb -->ejs ForEach
};

export const GetShow = async(req,res) =>{
    const article = await Article.findById(req.params.id);
    res.render('blog/show.ejs', { article:article });
}