module.exports =  {
    name: 'Counting',

    description: 'helps count, what else did you expect',
// Notes: 
    options: [
        {
            name: 'number',
            description: 'what number to count to',
            required: true,
        },
    ],
        callback: async (client, interaction) => {
            const numberToUse = interaction.options.get('number').value;

            parseInt(numberToUse)
            interaction.reply(numberToUse)
        }
}