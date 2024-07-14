const { testServer } = require('../../config.json')
const areCommandsDiffrent = require('../../utils/areCommandsDiffrent')
const getApplicationCommands = require('../../utils/getApplicationCommands')
const getLocalCommands = require('../../utils/getLocalCommands')

module.exports = async (client) => {
    
    
    try {

        const localCommands = getLocalCommands()
        const applicationCommands =  await getApplicationCommands(client, testServer)

        for (const localCommand of localCommands){
            const { name, description, options } = localCommand

            const existingCommand = await applicationCommands.cache.find(
                (cmd) => cmd.name === name
            )

            if (existingCommand){
                if (localCommand.deleted) {
                    await applicationCommands.delete(existingCommand.id)
                    console.log(`Deleted command "${name}".`)
                    continue
                }

                if (areCommandsDiffrent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    })

                    console.log(`Edited command "${name}" .`)
                }

            } else {
                if (localCommand.deleted) {
                    console.log(`Skipping registering this command "${name}" as it is set to delete.`)
                    continue
                }
                await applicationCommands.create({
                    name,
                    description,
                    options,
                })

                console.log(`Command was registerd "${name}".`)
            }
        }
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }

    
}