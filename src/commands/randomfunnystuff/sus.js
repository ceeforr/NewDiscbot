const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");

module.exports = {
    name: "suss",
    description: "Pong! Showcases the ping of the bot!",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms, nah im lying it was actually 0 ms`)
        


    }
}