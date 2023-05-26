const express = require('express')
const {getTodo,saveTodo,updateTodo,deleteTodo} = require('../controllers/todoController.js')

const router = express.Router()

router.get('/',getTodo);
router.post('/save',saveTodo);
router.post('/update',updateTodo);
router.post('/delete',deleteTodo);



module.exports = router