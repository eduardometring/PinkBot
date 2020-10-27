const discord = require('discord.js')
exports.run = async(client, message, args) => {
  let itBe = new discord.MessageEmbed()
  .setTimestamp()
  message.channel.send(itBe)
}
