const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  execute: async(client, db) => {
   
    console.log(`${client.user.tag} Ready`)
 
    client.user.setActivity(`${config.prefix}help | -invite`, { type: "PLAYING"}) 
    
  } 
}
