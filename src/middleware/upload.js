/* const multer = require('multer');
const path = require('path')
const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupsController')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
       let folder = path.join(__dirname,'../public/images/products');
       cb(null, folder);
    },
    filename :(req,file,cb) =>{
        console.log(file)
        
       const NewFileName = Date.now() + path.extname(file.originalname);
       cb(null, NewFileNameeName);
    }
})

const fileUpload = multer({
    storage: multerDiskStorage
});
 const upload = multer ({ storage })

 module.exports = upload */

 const multer = require('multer')
const path = require('path')
 
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        return cb(null, './public/images/products')
    },
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}_images_${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage
})

module.exports = upload