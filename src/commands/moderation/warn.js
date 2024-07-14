const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");
const { ApplicationCommandType, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
    name: "warn",
    description: "warns people",
    // devOnly: Boolean,
    //testOnly: Boolean,
     options: [
        {
            name: 'target-user',
            description: 'The user you want to warn',
            required: true,
            type: ApplicationCommandOptionType.Mentionable
        },{
            name: 'action-taken',
            description: 'The punishment',
            required: true,
            type: ApplicationCommandOptionType.String
        },{
            name: 'reason',
            description: 'the reason for warning',
            required: true,
            type: ApplicationCommandOptionType.String,
            
        }
     ],

     permissionsRequired: [PermissionFlagsBits.Administrator],
     botPermissions: [PermissionFlagsBits.Administrator],


     /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */

    callback:  async (client, interaction) => {
        
        const targetUserId = interaction.options.get('target-user').value;
        const reason =
        interaction.options.get('reason')?.value || 'No reason provided';
        const ActionTaken = interaction.options.get('action-taken').value

        await interaction.deferReply();
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("That user doesn't exist in this server.");
        return;
      }
  
      if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply(
          "You can't warn that user because they're the server owner."
        );
        return;
      }
  
      const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
      const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
      const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
      if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply(
          "You can't warn that user because they have the same/higher role than you."
        );
        return;
      }
  
      if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply(
          "I can't warn that user because they have the same/higher role than me."
        );
        return;
      }

      try {
     
    let date = new Date()
    const { EmbedBuilder } = require('discord.js')
    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("WARN")
      .setDescription(`**
       User ${targetUser} has been warned.
       Reason: ${reason}
       Action Taken: ${ActionTaken}
       Date: ${date}
      **`)
      .setTimestamp(date)

      interaction.editReply({embeds: [embed]})
        
          
        


      } catch (error) {
        console.log(error)
      }
      

  
    }
}