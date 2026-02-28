
const express = require('express');
const router =express.Router();
const postsController =require('../controllers/postsController');
const checkId= require('../middlewares/checkId')

//index(cRud) "visualizzare tutti gli elementi"
router.get('/',postsController.index)

//Show(cRud) visualizzare singolo elemento
router.get('/:id',checkId, postsController.show)

//Store(Crud) per aggiungere un elemento
router.post('/', postsController.store)

//Update(crUd) serve per MODIFICARE un INTERO ELEMENTO
router.put('/:id', checkId, postsController.update)

//Modify (crUd) serve  MODIFICARE (parzialmente) un elemento
router.patch('/:id',checkId, postsController.modify)

// Destroy (cruD) serve per ELIMINARE un elemento
router.delete('/:id',checkId, postsController.destroy)

module.exports = router;