const BlogModel = require('../models/blogModel');

const fs = require('fs');

const path = require('path');

const AddBlog = (req, res) => {
    return res.render("Addblog")
}

const Showblog = async (req, res) => {
    try {
        const blog = await BlogModel.find()
        res.render('Showblog', { blog: blog })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const insertBlog = async (req, res) => {
    try {
        const { title, description } = req.body
        BlogModel.create({
            title: title,
            description: description,
            image: req.file.path
        })
        console.log("Add Successsfully");
        return res.redirect('/admin')
    } catch (err) {
        console.log(err);
        return false
    }
}

const deleteBlog = async (req, res) => {
    try {
        const deid = req.query.deletId;
        let single = await BlogModel.findById(deid);
        fs.unlinkSync(single.image);
        await BlogModel.findByIdAndDelete(deid);
        console.log("User Deleted");
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
        return false;
    }
}

const editBlog = async (req, res) => {
    try {
        const eid = req.query.editId
        const single = await BlogModel.findById(eid)
        return res.render('Editblog', {
            single
        }
        )
    } catch (error) {
        console.log(error);
        return false;
    }
}

const UpdateBlog = async (req, res) => {
    try {
        const { editid, title, description } = req.body;
        if (req.file) {
            const single = await BlogModel.findById(editid);
            fs.unlinkSync(single.image);
            await BlogModel.findByIdAndUpdate(editid, {
                title: title,
                description: description,
                image: req.file.path
            })
            console.log("User Updated");
            return res.redirect('/admin')
        } else {
            const single = await BlogModel.findById(editid);
            await BlogModel.findByIdAndUpdate(editid, {
                title: title,
                description: description,
                image: single.image
            })
            console.log("User Updated");
            return res.redirect('/admin')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const readMore = async(req,res)=>{
    try{
        let id = req.query.id;
    let single = await BlogModel.findById(id)
    return res.render('readmore',{
        single
    })
    }catch(err){
        console.log(err);
        return false
    }
}

module.exports = {
    AddBlog, insertBlog, Showblog, deleteBlog, editBlog, UpdateBlog, readMore
}