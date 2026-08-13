const express=require('express');
const router=express.Router();
const token_auth=require('../middlewares/tokenauth.middleware')
const {create_task,
    get_tasks,
    delete_all_tasks,
    delete_task,
    update_task}=require('../controllers/dashboard.controller')

router.post('/createTask',token_auth,create_task)
router.get('/getTask',token_auth,get_tasks)
router.delete('/delete_all_Tasks',token_auth,delete_all_tasks)
router.put('/updateTask/:id',token_auth,update_task)
router.delete('/deleteTask/:id',token_auth,delete_task)
router.get('/',token_auth,(req,res)=>{
    res.status(200).json({
        message:"Dashboard Access Granted"
    })
})

module.exports=router