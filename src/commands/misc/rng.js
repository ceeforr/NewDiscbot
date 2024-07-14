module.exports =  {
    name: 'rng',

    description: 'does rng stuff',



        callback: async (client, interaction) => {

        let names = ["Con", "Kyle", "Ofentse", "Caleb", "JJ", "Michael", "Max"]
        let main  = [
            "loves __",
            "really wants to eat __",
            "absolutely hates the show __",
            "loves this subject:",
            "rages at this game, but cant stop playing it:",
            "'s favourite pet is __",
            "has this rating on Fortnite:",
            "is addicted to",
            "would probably eat __ for breakfast",
            "wishes that they could do this:",
            "OOH! SECRET EASTER EGG! WOW! jk get scammed, anyways this person hates __",
            "ok heres the actual easter egg",
            "would probably play for __ this team if they could",
            "Has an addiction to what game __",
            
            
        ]
         

        
        function getRandomItem(arr) {

    
            const randomIndex = Math.floor(Math.random() * arr.length);
        
            
            const item = arr[randomIndex];
        
           return item;
        }
        
        const resultMain  = getRandomItem(main)
        const resultNames = getRandomItem(names)

        const {
            Client,
            IntentsBitField,
            ActionRowBuilder,
            ButtonBuilder,
            ButtonStyle,
            Component,
            ComponentType,
          } = require('discord.js');
    
          try {
    
    
            const row = new ActionRowBuilder();
    
            
              const button =    new ButtonBuilder()
                  .setCustomId('1324312455686')  
                  .setLabel('Play again')
                  .setStyle(ButtonStyle.Primary)
              
            const buttonRow = new ActionRowBuilder().addComponents(button)
    
             const reply = await interaction.reply({
                content: `${resultNames} ${resultMain}`,
                components: [buttonRow]
              });

              

              

              
                 
    
    
          } catch (error) {
            console.log(error)
          }
        

    
        }
    }