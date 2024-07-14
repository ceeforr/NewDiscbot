const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");

module.exports = {
    name: "secrets",
    description: "super secret",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: (client, interaction) => {
        interaction.reply(`Mr. Flemmer my beloved`)
        


    }
}