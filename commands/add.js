const Discord = require('discord.js')
const config = require('../config.json')

module.exports = {
  name: "addbal",
  aliases: ["addcoins"],
  description: "add coins from a user, owner only.",
  execute: async(client, message, args, data, db) => {
   
    let owners = config.ownersID;
    
    if (!owners.includes(message.author.id)) return
  
    let pay = Number(args[1])
    
    if (!pay || isNaN(pay)) return message.channel.send(`Invalid amount of coins were provided.`)
    
    let user = client.users.cache.find(user => args.length && message.mentions.users.size < 1 && user.username.toLowerCase().startsWith(args.slice(0, user.username.split(" ").length).join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first()
    
    message.channel.send(`You've added ${pay} coins to ${user.tag}.`)
    
    db.add(`coins_${user.id}`, pay)
  } 
}