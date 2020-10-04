const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "help",
  aliases: ["help"],
  description: "displays the bot commands list.",
  execute: async (client, message, args, data, db) => {

    const dnd = client.emojis.cache.find(emoji => emoji.name === "sag");


    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";
    let text = []

    let owners = config.ownersID

    client.commands.map(x => {
      if (!x.description.includes("owner") || owners.includes(message.author.id)) text.push(`**__${prefix}${x.name} - [${x.aliases ? x.aliases : "none"}]__**:\n${x.description}`)
    })

    let embed = new Discord.MessageEmbed()
      .setColor(config.embedColor)
      .setTitle(`LxSw Commands List`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(` 
                           
    \`-bal\` : To get your balance\n**Usage:** \`-bal\`
    \`-find\` : To find some server to join and get coins\n**Usage:** \`-find\`
    \`-pay\` : To pay some coins to user\n**Usage:** \`-pay [User] [Coins]\`
    \`-ad\` : To buy members for your server\n**Usage:** \`-ad [Coins] [Any message]\`
    \`-check\` : To check that you can leave joined server safely without lossing coins\n**Usage:** \`-check\`
    \`-daily\` : To get daily coins\n**Usage:** \`-daily\`
    \`-ticket\` : To buy lottery ticket of 5 coins\n**Usage:** \`-ticket\`
    \`-help\` : To get help message\n**Usage:** \`-help\`
    \`-invite\` : To invite the bot to your server\n**Usage:** \`-invite\`
    \`-report\` : To report any Bug In the bot\n**Usage:** \`-report\`
    \`Support\`=> **__[Support Server](https://discord.gg/MVjgGP6)__** | **__[Invite The Bot](https://discord.com/api/oauth2/authorize?client_id=761649565274734603&permissions=8&scope=bot)__** `)
      .setFooter(`Bot by S_waraj#9999 and Lxtvl#6478`)
    message.channel.send(embed).catch(e => message.channel.send(`Uh, an error D:`))
  }
}