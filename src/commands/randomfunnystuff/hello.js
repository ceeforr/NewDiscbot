const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");

module.exports = {
    name: "hello",
    description: "hello",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: (client, interaction) => {
        interaction.reply(`🚀 We are going on a trip in our favourite rocketship! It seems I have responded in ${client.ws.ping}ms`)
        


    }
}