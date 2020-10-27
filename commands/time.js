const discord = require('discord.js')
exports.run = async(client, message, args) => {
  let itBe = new discord.MessageEmbed()
  .setFooter(`ok`)
  .setTimestamp()
  message.channel.send(itBe)
}
