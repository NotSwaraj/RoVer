const Discord = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')

module.exports = {
  name: "find",
  description: "displays 3 servers to join in and gain coins.",
  aliases: ["f"],
  execute: async (client, message, args, data, db) => {

    console.log(db.all())

    let orders = db.all().filter(x => x.ID.startsWith(`orders_`, { sort: ".data" }))

    db.get(`code_${message.guild.id}`)

  

    let length = 1

    orders = orders.filter(x => x.data > 0 && client.guilds.cache.get(x.ID.split("_")[1]) && client.guilds.cache.get(x.ID.split("_")[1]).members.cache.get(message.author.id) === undefined)
    console.log(orders)
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`__Servers to join and Earn Coins__`)
      .setDescription(`You'll get 1 coins per server joined,  if you leave before 3 days have passed you will lose 2 coins.\n\n **__List Of Servers__** `)
    for (let i = 0; i < orders.length; i++) {

      let handler = true

      if (length > 3) { } else {

        let id = orders[i].ID.split("_")[1]

        let guild = client.guilds.cache.get(orders[i].ID.split("_")[1]).name

        let code = await db.fetch(`code_${id}`)

        


        await client.fetchInvite("https://discord.gg/" + code).catch(() => {})
        

        if (handler) {
          let description = await db.fetch(`description_${id}`)

          embed.addField(` **__${guild}__** `, description, false)
          length++
        }
      }
    }

    embed.addField(`There is no servers to join ?`, `There probably isn't any guild available for you to join, Try after 5 mins later`, false)

    message.channel.send(embed)
  }
} 