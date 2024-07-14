const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");

module.exports = {
    name: "chicken",
    description: "Is this the freshest chicken?",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: (client, interaction) => {
        interaction.reply(`🐔 Please help me feed my chicken Goeffrey`)
        


    }
}