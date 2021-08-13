const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'IU') {
    msg.channel.send('國民女神');
    msg.channel.send({
      files: ['https://img.ltn.com.tw/Upload/ent/page/800/2021/03/28/phpkgbREg.jpg'],
    });
  }

  if (msg.content === '@dice') {
    var dice = Math.floor(Math.random() * 6) + 1;

    msg.reply(`擲出了 ${dice} 點` );
    console.log(`擲出了 ${dice} 點`);
  }
});

client.login(process.env.DISCORD_TOKEN);