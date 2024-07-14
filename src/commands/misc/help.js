const { MessageEmbed } = require('discord.js')
const { MessageActionRow } = require("discord.js");
const { ApplicationCommandType, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

    


    module.exports = {
        name: 'help',
    
        description: 'Is fairly helpful',
    
        
            
            
        
    
         
    
        callback: (client, interaction) => {

            const { EmbedBuilder } = require('discord.js')
            

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`
            # Commands!
    
            Here's a list of commands :D
            By the way, commands in ***bold italic*** are works in progress!
    
            ## 🔨 Moderation Commands! 🔨
            These commands are very **spooky**! 🎃
            *ban* - Bans someone from the server. Only special people can use this!
            *kick* - Kicks someone from Hello, but they can rejoin though
            *warn* - Warns someone from Hello! This could also be used to punish people for example timing out someone(you still need to time them out yourself, the bot will be able to do it very soon)
    
            ## 🎋 Fun Commands 🎋
            *butt* - Only **Con** shall know the truth of this command
            *sport* - Ok, lets play ping pong!
            *name* - Generates an AI generated username
            *rng* - The Truth or Dare bot, but way better!
            *ping* - Checks the bots ping, not very accurate milisecond measurement though
            *chicken* - Chicken!
            *rps* - Rock, paper, scissors, shoot!

            you also cant forget *help*!
            `)
            
          
            interaction.reply({embeds: [embed]})
            
        }
    }
            
        
    
        
    
        
    