const CategoryModel = require('../models/CategoryModel');

const SubCategoryModel = require('../models/SubCategoryModel');

const subCategoryPage = async(req,res) => {
    try {
        let subcategory = await SubCategoryModel.find({}).populate("categoryId");
    
        return res.render('view_subcategory',{
            subcategory
        });
    }catch(err){
        console.log(err);
        return false;
    }
}

const addsubCategoryPage = async(req,res) => {
    try {
        let category = await CategoryModel.find({status:"active"});
        return res.render('add_subcategory',{
            category
        });
    }catch(err){
        console.log(err);
        return false;
    }
}

const insertSubcategory = async(req,res) => {
    try {
        const {category,subcategory} = req.body;
        await SubCategoryModel.create({
            categoryId : category,
            subcategory : subcategory
        })
        console.log("Subcategory Create");
        return res.redirect('/subcategory/addsubcategory');
    }catch(err){
        console.log(err);
        return false;
    }
}

const viewSubcategory = async(req,res) => {
    try {
        let categories = await SubCategoryModel.find({}).populate("categoryId");
        return res.render('view_subcategory',{
            categories
        })
    }catch(err) {
        console.log(err);
        return false;
    }
}

const editSubcategory = async(req,res) => {
    try {
        let id = req.query.id;
        let category = await CategoryModel.find({status:"active"});
        let single = await SubCategoryModel.findById(id).populate("categoryId");
        console.log(single);
        return res.render('edit_subcategory',{
            category,single
        });
    }catch(err) {
        console.log(err);
        return false;
    }
} 

module.exports = {
    subCategoryPage, addsubCategoryPage, insertSubcategory, viewSubcategory, editSubcategory
}