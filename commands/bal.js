const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')
const config = require('../config.json')


module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "displays the user's balance.",
  execute: async(client, message, args, data, db) => {

    const silver = client.emojis.cache.find(emoji => emoji.name === "GMoney55");
    const dnd = client.emojis.cache.find(emoji => emoji.name === "dnd5"); // first emoji 
    const an = client.emojis.cache.find(emoji => emoji.name === "22"); // second emoji chane name to the emoji name u want it to be used. ty

   
    let user = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first() || message.author
    
    if (user.username === undefined) user = user.user
    
    
    
    data = await get(message, user)
    

    let logs = []
    
    data.logs.map((x, y) => {
      if (y < 10) logs.push(x)
    })
    
    let embed = new Discord.MessageEmbed()
    .setColor(config.embedColor)
    .setTitle(` ${user.username}'s Balance: `)
    .setDescription(` ${user} you currently have  **__${data.coins.toFixed(2)}__**  coins.\n\nIf you want to earn some coins to buy members then do \`-find\`|\`-f\`\n\n you can buy members For your server By :\n\`-ad [Coins] [Message]\``)
    .setThumbnail(message.author.displayAvatarURL())
      .addField(`**__Dont want coins by Joining Server ?__** `, ` JOIN : https://discord.gg/MVjgGP6 and get upto 5000 coins per month to grow your server!! :) \nBuy Lottery Ticket To test Your Luck : \`-ticket\`.`, false) 
    .addField(` **__Transactions__** `, logs.length == 0 ? "No transacations Found" : logs.join("\n"))
    message.channel.send(embed) 
  } 
} 