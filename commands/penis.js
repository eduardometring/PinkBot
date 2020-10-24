const discord = require('discord.js')
exports.run = async(client, message, args) => {
  var user = message.mentions.users.first() || message.author
  const penis = new discord.MessageEmbed()
  .setDescription(`**${user}'s penis** \n 8${"=".repeat(Math.floor(Math.random() * 12))}D`)
  message.channel.send(`${message.author}`, penis)
}
