import Product from "../../Model/product/product.js";
import Category from "../../Model/product/category.js";
import Pets from "../../Model/product/pets_category.js";

//Get

//頁面
export const GetA_Store = (req,res) =>{
    res.render('admin/store/A_store.ejs');
};

export const GetCategory = async (req,res) =>{
    const Get_Category = await Category.find().sort({createdAt:'-1'});
        res.render('admin/store/category/A_category.ejs', {category : Get_Category});
};

export const GetPets = async (req,res) =>{
    const Get_Pets = await Pets.find().sort({createdAt:'-1'});
    res.render('admin/store/pets/A_pets.ejs', {pet : Get_Pets});
};

export const GetProduct = async (req,res) =>{
    const Get_Product = await Product.find().sort({createdAt:'-1'});
    res.render('admin/store/product/A_product.ejs', {product : Get_Product});
};

//創建
export const GetNewCategory = async (req,res) =>{
    const Get_NewCategory = await Category.find();
    res.render('admin/store/category/new_category.ejs', {category : Get_NewCategory});
};

// export const GetNewPets = async (req,res) =>{
//     const Get_NewPets = await Pets.find();
//     res.render('admin/store/pets/new_pets.ejs', {pet : Get_NewPets});
// };

export const GetNewPets = async (req,res) =>{
    const Get_NewPets = await Pets.find();
    let Get_category = await Category.find();
    res.render('admin/store/pets/new_pets.ejs',{
        categories:Get_category,
        pets:Get_NewPets
    });
};

export const GetNewProduct = async (req,res) =>{
    const Get_NewProduct = await Product.find();
    let Get_category = await Category.find();
    res.render('admin/store/product/new_product.ejs', {
        product : Get_NewProduct,
        categories:Get_category
    });
};

//修改
export const GetEditCategory = async(req,res) =>{
    const EditCategory = await Category.findById(req.params.id)
    res.render('admin/store/category/edit_category.ejs', {category : EditCategory});
};

export const GetEditPets = async(req,res) =>{
    const EditPets = await Pets.findById(req.params.id)
    Category.find((err, categories)=>{
        res.render('admin/store/pets/edit_pets.ejs', {
            categories:categories,
            pet : EditPets
        }); 
    })
};

export const GetEditProduct = async (req,res) =>{
    const EditProduct = await Product.findById(req.params.id)
    Category.find((err, categories)=>{
        res.render('admin/store/product/edit_product.ejs', {
            product : EditProduct,
            categories:categories
        });
    })
};

//Post
export const PostCategory = async (req,res) =>{
    const Get_PostCategory = await Category.find();
    const{title} = req.body;
    let newCategory = new Category({
        title:title,
    });
    try{
        newCategory = await newCategory.save()
        res.redirect('/admin/A_product/category');
    }catch(error){
        res.render('admin/store/A_category.ejs',{category : Get_PostCategory});
    }
    console.log(newCategory);
};

export const PostPets = async (req,res) =>{
    //const {title,category} = req.body;
    const Get_PostPets = await Pets.find();
    const {title,category} = req.body;
    let Post_category = await Category.find();   //shopping carts可以解決的null的問題
    let newPets = new Pets({
        title:title,   // db : html
        category:category,
    });
    try{
        newPets = await newPets.save();
        res.redirect('/admin/A_product/pets');
    }catch(error){
        res.render('admin/store/pets/A_pets.ejs',{
            pet : Get_PostPets,     // html : db
            categories:Post_category
        });
    }
    console.log(newPets);
};


export const PostProduct = async (req,res) =>{
    const Get_PostProduct = await Product.find();
    const {title,price,date,stock,size,category} = req.body;
    let Post_category = await Product.find();
    let newProduct = new Product({
        category:category,
        title:title,
        price:price,
        date:date,
        stock:stock,
        size:size,
    });
    try{
        newProduct = await newProduct.save()
        res.redirect('/admin/A_product/product');
    }catch(error){
        console.log(error)
        res.render('admin/store/product/A_product.ejs',{
            product : Get_PostProduct,
            category : Post_category
        });
    }
    console.log(newProduct);
};

//Put
export const EditCategory = async (req,res) =>{
    const updateCategory = await Category.findByIdAndUpdate(req.params.id)
    .then((data)=>{
        const {title} = req.body;
        
        data.title = title;

        try{
            data.save().then(()=>{
                res.redirect('/admin/A_product/category');
            })
        }catch(error){
            res.redirect('/admin');
            console.log(error);
        }
        console.log(data);
    })
};

export const EditPets = async (req,res) =>{
    const updatePets = await Pets.findByIdAndUpdate(req.params.id)
    .then((data)=>{
        let {title,category} = req.body;
        
        data.title = title;
        data.category = category;

        try{
            data.save().then(()=>{
                res.redirect('/admin/A_product/pets');
            })
        }catch(error){
            res.redirect('/admin');
            console.log(error);
        }
        console.log(data);
    })
}

export const EditProduct = async (req,res) =>{
    const updateProduct = await Product.findByIdAndUpdate(req.params.id)
    .then((data)=>{
        let {category,title,price,date,stock,size} = req.body;

        data.category = category;  //db : html
        data.title = title;
        data.price = price;
        data.date = date;
        data.stock = stock;
        data.size = size;

        try{
            data.save().then(()=>{
                res.redirect('/admin/A_product/product');
            })
        }catch(error){
            res.redirect('/admin');
            console.log(error);
        }
        console.log(data);
    })
}

//Delete
export const DeleteCategory = async (req,res) =>{
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin/A_product/category');
}

export const DeletePets = async (req,res) =>{
    await Pets.findByIdAndDelete(req.params.id);
    res.redirect('/admin/A_product/pets');
}

export const DeleteProduct = async (req,res) =>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/A_product/product');
}