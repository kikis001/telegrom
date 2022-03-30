const db = require('mongoose')

db.Promise = global.Promise

function connect(url){
    db.connect(url, {useNewUrlParser: true})
    .then(() => console.log('[db] Conectada con éxito'))
    .catch((error) => console.error(`${error}`))
}

module.exports = connect