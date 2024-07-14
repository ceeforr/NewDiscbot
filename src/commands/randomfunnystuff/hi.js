const {
    Client,
    IntentsBitField,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
  } = require('discord.js');

module.exports = {
    name: "hi",
    description: "testing",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: async (client, interaction) => {
        interaction.reply(`Why hello there! It seems I have responded in ${client.ws.ping}ms`)

    }


}
