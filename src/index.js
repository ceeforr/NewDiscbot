const {Client, IntentsBitField} = require('discord.js')
const eventHandler = require('./handlers/eventHandler')

const client = new Client({

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
        
    


})


    



eventHandler(client)


client.login('MTE1NTE5MTAzNDA2Njc4MDE5Mg.GoNOuN.M2avxj3d_-qATWeESb3yP7gHziRSaSq68ObKCg')