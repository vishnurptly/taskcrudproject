const express = require('express');
const {createPost,getAllList,updateUser,getbyid,deleteUser} = require('../controller/userController')
const router = express.Router()



router.post('/create',createPost);
router.get('/getall',getAllList)
router.put('/update/:id',updateUser)
router.get('/getbyid/:id', getbyid)
router.delete('/remove/:id',deleteUser)

module.exports =router