// capa de red, se encarga de recibir la petición http y se la manda al controlador
const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get("/", (req, res) => {
  console.log(req.query.user)
  const filterMessages = req.query.user || null
  controller.getMessage(filterMessages)
  .then((messageList) => {
    response.success(req, res, messageList, 200)
  })
  .catch(e => {
    response.error(req, res, 'Unexpected Error', 500, e)
  }) 
});
  
router.post("/", (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
  .then((fullMessage) => {
    response.success(req, res, fullMessage, 201);
    })
  .catch(e => {
    response.error(req, res, "Información invalida", 400, 'error en el controlador');      
  })
});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
  .then((data) => {
    response.success(req, res, data, 200)
  })
  .catch(e => {
    response.error(req, res, 'Error interno', 500, e)
  })
})

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
   .then(() => {
     response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
   })
   .catch(e => {
     response.error(req, res, 'Error interno', 500, e)
   })
})

module.exports = router;