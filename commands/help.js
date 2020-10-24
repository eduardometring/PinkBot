const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  let helper = new Discord.MessageEmbed()
  .setTitle(`Need help?`)
  .setDescription(`\`Avatar\`, \`helloworld\`, \`Punch\`, \`Say\`, \`Penis\``)
  .setColor("#ff375a")
  .setTimestamp()
  message.channel.send(`${message.author}`, helper)
}
