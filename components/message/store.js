const Model = require('./model')

const addMessage = (message) => {
    const myMessage = new Model(message)
    myMessage.save()
}

const getMessage = async (filterUser) => {
    let filter = {}
    if(filterUser != null) {
        filter = {user: filterUser}
    }
    return await Model.find(filter)
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
    // const foundMessage = await Model.findOne({
    //     _id: id
    // })
    // foundMessage.message = message
    // const newMessage = await foundMessage.save()
    // return newMessage
}

function removeMessage(id) {
    return Model.findByIdAndDelete(id)
}

// module.exports = {
//     add: addMessage, 
//     list: getMessage
// }

// const list = []

// function addMessage(message) {
//     list.push(message);
// }

// function getMessage() {
//     return list
// }

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
}