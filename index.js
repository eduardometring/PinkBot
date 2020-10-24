const express = require('express')
const pink = express()
pink.get("/", (request, response) => {
  const ping = new Date()
  ping.setHours(ping.getHours() - 3)
  console.log(`I woke up at ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
  response.sendStatus(200)
})
pink.listen(process.env.PORT)
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
client.on('message', message => {
     if (message.author.bot) return
     if (message.channel.type == 'dm') return
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return 

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase()

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args)
    } catch(err) {
      message.channel.send('• <@'+ message.author.id +'> Command not found, use `pink help` to see all my commands!');
    }
})
client.login(process.env.LMAO)
