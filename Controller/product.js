import Product from "../Model/product/product.js";
import Category from "../Model/product/category.js";
import Pets from "../Model/product/pets_category.js";

//Get
export const GetCategory = async (req,res) =>{
    const Get_Category = await Category.find().sort({createdAt:'-1'});
        res.render('product/category.ejs', {category : Get_Category});
};

export const GetPets = async (req,res) =>{
    const Get_Pets = await Pets.find().sort({createdAt:'-1'});
    res.render('product/pets.ejs', {pet : Get_Pets});
};

export const GetProduct = async (req,res) =>{
    const Get_Product = await Product.find().sort({createdAt:'-1'});
    res.render('product/product.ejs', {product : Get_Product});
};

export const GetAPage = (req,res)=>{
    // let categorytitle = req.params.category;

    // Category.findOne({title:categorytitle},function(err , c){
    //     Product.find({category:categorytitle},function(err , products){
    //         if(err) console.log(err)

    //         res.render('cat_products',{
    //             title: c.title,
    //             products:products
    //         })
    //     })
    // })

}