const express=require('express')
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/user')

const router=express.Router()

router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
module.exports=router