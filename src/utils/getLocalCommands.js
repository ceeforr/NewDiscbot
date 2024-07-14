const path = require('path')
const getAllfiles = require('./getAllFiles')

module.exports = (exceptions = []) =>{
    let localCommands = []

    const commandCatorgories = getAllfiles(
        path.join(__dirname, '..', 'commands'),
        true
    )

    for (const commandCatorgorie of commandCatorgories){
        const commandFiles = getAllfiles(commandCatorgorie)

        for (const commandFile of  commandFiles){
            const commandObject = require(commandFile)

            if (exceptions.includes(commandObject.name)){
                continue
            }
            localCommands.push(commandObject)
        }
    }

    
        
    return localCommands
}