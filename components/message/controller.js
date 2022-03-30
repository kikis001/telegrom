const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            return reject('Los datos son incorrectos')
        }
        
        const fullMessage = {
            user, 
            message, 
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if(!id || !message) {
            return reject('Los datos son invalidos')
        }
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Parametros o id invalido')
        }
        store.remove(id)
        .then(() => {
            resolve()
        })
        .catch(e => {
            reject(e)
        }) 
    }) 
}

module.exports = {
    addMessage, 
    getMessage,
    updateMessage, 
    deleteMessage
}