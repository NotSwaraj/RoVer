 const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const config = require('../config.json')
module.exports = {
  name: "link",
  aliases: ["invite"],
  description: "returns the bot invite link.",
  execute: async(client, message, args, data, db) => {
   
    let embed = new MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .addField('***READY TO GET MEMBERS*** ',`Invite The Bot (https://discord.com/oauth2/authorize?client_id=761649565274734603&permissions=8&scope=bot)`)    
    .setFooter(`${client.user.username} Bot`)
    .setColor(config.embedColor)

    message.channel.send(embed)
      
    
  } 
} 