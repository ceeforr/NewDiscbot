const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    name: "rps",
    description: "Rock Paper or Scissors",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: (client, interaction) => {
    
    const row = new ActionRowBuilder()
        
        new ButtonBuilder().setLabel("Rock").setStyle(ButtonStyle.Primary)
        
        

    }
}