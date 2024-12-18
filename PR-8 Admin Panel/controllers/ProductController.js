const CategoryModel = require('../models/CategoryModel');
const SubCategoryModel = require('../models/SubCategoryModel');
const ExtraSubCategoryModel = require('../models/ExtraSubCategoryModel');
const ProductModel = require('../models/ProductModel');

const path = require('path');
const fs = require('fs');

const productPage = async (req, res) => {
    try {
        let product = await ProductModel.find({}).populate("categoryId").populate("subcategoryId").populate("extrasubcategoryId");
        return res.render('view_product', {
            product: product
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addProductPage = async (req, res) => {
    try {
        let category = await CategoryModel.find({});
        let subcategory = await SubCategoryModel.find({});
        let extrasubcategory = await ExtraSubCategoryModel.find({});
        return res.render('add_product', {
            category: category,
            subcategory: subcategory,
            extrasubcategory: extrasubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertProduct = async (req, res) => {
    try {
        let { category, subcategory, extrasubcategory, product, price, description } = req.body;
        let productdata = await ProductModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            extrasubcategoryId: extrasubcategory,
            name: product,
            price: price,
            description: description,
            image: req.file.path
        })
        console.log("Product Insert");
        req.flash("success", "Product Successfully Register");
        return res.redirect('/product/addproduct');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteProduct = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await ProductModel.findById(id);
        fs.unlinkSync(single.image);
        await ProductModel.findByIdAndDelete(id);
        console.log('Product Deleted...');
        req.flash("danger", "Product Successfully Delete");
        return res.redirect('/product')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editProduct = async (req, res) => {
    try {
        let id = req.query.id;
        const category = await CategoryModel.find({})
        const subcategory = await SubCategoryModel.find({}).populate("categoryId")
        const extrasubcategory = await ExtraSubCategoryModel.find({}).populate("categoryId").populate("subcategoryId")
        const single = await ProductModel.findById(id).populate("categoryId").populate("subcategoryId").populate("extrasubcategoryId");
        return res.render('edit_product', {
            single: single,
            category: category,
            subcategory: subcategory,
            extrasubcategory: extrasubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateProduct = async (req, res) => {
    try {
        const { editid, category, subcategory, extrasubcategory, product, description, price } = req.body;
        console.log(req.body);
        if (req.file) {
            let single = await ProductModel.findById(editid);
            fs.unlinkSync(single.image);
            let update = await ProductModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategoryId: subcategory,
                extrasubcategoryId: extrasubcategory,
                name: product,
                description: description,
                price: price,
                image: req.file.path
            })
            console.log("Product Updated..");
            return res.redirect('/product');
        } else {
            let single = await ProductModel.findById(editid);
            let update = await ProductModel.findByIdAndUpdate(editid, {
                categoryId: category,
                subcategoryId: subcategory,
                extrasubcategoryId: extrasubcategory,
                name: product,
                description: description,
                price: price,
                image: single.image
            })
            console.log("Product Updated..");
            return res.redirect('/product');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ChangeStatus = async (req, res) => {
    try {
        let st = req.query.status;
        let id = req.query.id;
        if (st == "active") {
            await ProductModel.findByIdAndUpdate(id, {
                status: "deactive"
            })
            console.log('Product Status Changed To Deactive...');
            req.flash('success', 'Product Status Successfully Changed!');
            return res.redirect('/product')
        } else {
            await ProductModel.findByIdAndUpdate(id, {
                status: "active"
            })
            console.log('Product Status Changed To Active...');
            req.flash('success', 'Product Status Successfully Changed!');
            return res.redirect('/product')
        }
    } catch (err) {
        console.log(err);
        return res.redirect('/product');
    }
}

const ajaxGetCategory = async (req, res) => {
    try {
        let id = req.query.id;
        let category = await SubCategoryModel.find({ categoryId: id });
        return res.send({
            success: true,
            message: "Record Successfully Fetch",
            category
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ajaxSubcategoryWiseRecord = async (req, res) => {
    try {
        let id = req.query.id;
        let extrasubcategory = await ExtraSubCategoryModel.find({
            subcategoryId: id
        });
        return res.send({
            success: true,
            message: "Record Fetch",
            extrasubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = { productPage, addProductPage, insertProduct, deleteProduct, editProduct, updateProduct, ChangeStatus, ajaxGetCategory, ajaxSubcategoryWiseRecord, }