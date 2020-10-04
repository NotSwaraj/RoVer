const Discord = require('discord.js')
const ms = require('parse-ms')
const config = require('../config.json')
module.exports = {
  name: "bigbruh",
  aliases: ["bruh"],
  description: "shows the stats of Advice Bot.",
  execute: async(client, message, args, data, db) => {
   


   
   // let usersCount = await client.shard.fetchClientValues("users.size")
    
  //  let serverCount = await client.shard.fetchClientValues('guilds.size') 
    
    let uptime = [] 
    
    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`) 
    })
    
    let embed = new Discord.MessageEmbed()
    .setColor(config.embedColor)
    .setTitle(`${client.user.username} Info/Stats`)
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`Owners `,  "," + client.users.cache.get('489366265786269704').tag, false)
    .addField(`Library `, `Discord.js - v12.2.0`, false)
    .addField(`Servers Count `, client.guilds.cache.size.toLocaleString(), false)
    .addField(`Users Count `, client.users.cache.size.toLocaleString(), false) 
    .addField(`Uptime `, uptime.join(", "), false) 
    message.channel.send(embed) 
  } 
} 