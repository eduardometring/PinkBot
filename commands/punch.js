const Discord = require('discord.js')
exports.run = async (client, message, args) => {
var list = [
    'https://media.giphy.com/media/SzC42gUrhHopW/giphy.gif',
    'https://media.giphy.com/media/ejV32lvTPfD1e/giphy.gif',
    'https://media.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://media.giphy.com/media/PO9aIzHerOX1S/giphy.gif'

  ]
  const rand = list[Math.floor(Math.random() * list.length)]
  let itBe = message.mentions.users.first() || args.join(" ")
  if(!itBe) {
    message.channel.send(`👊 **|** ${message.author} Do that again, but this time actually, mention someone to punch!`)
  } else {
    let embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author} punched ${itBe}**`)
    .setColor("#ff375a")
    .setImage(rand)
    message.channel.send(embed)
  }
}
