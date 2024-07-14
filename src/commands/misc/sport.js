const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");

module.exports = {
    name: "sport",
    description: "plays sport",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: (client, interaction) => {
        const { Client, Interaction, ApplicationCommandType, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

        let chance = Math.floor(Math.random() * 4) +1

    if (chance === 1){
        interaction.reply("I just hit the ball, but you managed to hit it back, dang it!")
    }else if(chance === 2){
        interaction.reply("You just hit the ball, but I managed to hit it back, thats crazy!")
    }else if(chance === 3){
        interaction.reply("I hit the ball and you missed, hahaha you lost!")
    }else if(chance === 4){
        interaction.reply("How did you do that you destroyed me 138485 to 0 🤯")
    }
    

    }
}




    
