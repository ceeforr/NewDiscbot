module.exports = {
    name: "button",
    description: "does button stuff",
    // devOnly: Boolean,
    //testOnly: Boolean,
    // options: Object[],
    // deleted: 


    callback: async (client, interaction) => {
        
        const {
            Client,
            IntentsBitField,
            ActionRowBuilder,
            ButtonBuilder,
            ButtonStyle,
          } = require('discord.js');
    
          try {
    
    
            const row = new ActionRowBuilder();
    
            row.components.push(
                new ButtonBuilder()
                  .setCustomId('1324312455686')  
                  .setLabel('Green')
                  .setStyle(ButtonStyle.Primary)
              );
    
    
              await interaction.reply({
                content: 'Claim or remove a role below.',
                components: [row],
              });
              process.exit();
    
              
          } catch (error) {
            console.log(error)
          }


    }
}