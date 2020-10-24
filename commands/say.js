exports.run = async (client, message, args) => {
  if(!args.join(" ")) {
    message.channel.send(`• ${message.author} Give me something to say 🤦‍♂️`)
  } else {
    message.channel.send(`${args.join(" ")} \n \n - ${message.author.username}`)
  }
}
