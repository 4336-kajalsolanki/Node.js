const CategoryModel = require('../models/CategoryModel');
const SubCategoryModel = require('../models/SubCategoryModel');
const ExtraSubCategoryModel = require('../models/ExtraSubCategoryModel');

const viewExtrasubcategoryPage = async (req, res) => {
    try {
        let extrasubcategory = await ExtraSubCategoryModel.find({}).populate("categoryId").populate("subcategoryId");
        return res.render('view_extrasubcategory', {
            extrasubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addExtrasubcategoryPage = async (req, res) => {
    try {
        let category = await CategoryModel.find({});
        let subcategory = await SubCategoryModel.find({});
        return res.render('add_extrasubcategory', {
            category, subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertExtraSubcategory = async (req, res) => {
    try {
        const { category, subcategory, extrasubcategory } = req.body;
        await ExtraSubCategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            extrasubcategory: extrasubcategory
        })
        console.log("Extrasubcategory Is Add");
        return res.redirect('/extrasubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteExtraSubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        await ExtraSubCategoryModel.findByIdAndDelete(id);
        console.log('ExtrasubCategory Successfully Deleted...');
        return res.redirect('/extrasubcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editExtraSubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        const category = await CategoryModel.find({});
        const subcategory = await SubCategoryModel.find({}).populate("categoryId");
        const single = await ExtraSubCategoryModel.findById(id).populate("categoryId").populate("subcategoryId");
        console.log(single);
        return res.render('edit_extrasubcategory', {
            single: single,
            category: category,
            subcategory: subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateExtraSubcategory = async (req, res) => {
    try {
        const { editid, category, subcategory, extrasubcategory } = req.body;
        await ExtraSubCategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategoryId: subcategory,
            extrasubcategory: extrasubcategory
        })
        console.log('ExtraSubcategory Is Updated...');
        return res.redirect('/extrasubcategory')
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
            await ExtraSubCategoryModel.findByIdAndUpdate(id, {
                status: "deactive"
            })
            console.log('Category Status Changed To Deactive...');
            return res.redirect('/extrasubcategory')
        } else {
            await ExtraSubCategoryModel.findByIdAndUpdate(id, {
                status: "active"
            })
            console.log('Category Status Changed To Active...');
            return res.redirect('/extrasubcategory')
        }
    } catch (err) {
        console.log(err);
        return false;
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

module.exports = {
    viewExtrasubcategoryPage, addExtrasubcategoryPage, insertExtraSubcategory, deleteExtraSubcategory, editExtraSubcategory, updateExtraSubcategory, ChangeStatus, ajaxGetCategory
}