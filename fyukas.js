const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " zNexusPublic | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username}`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("d") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("Done")      
      }
      }
    }
  }
})


client.on("guildCreate", fyukas => {
  sleep(1000);
  if (
    fyukas.id === "784668907264147477" ||  // j4j sunucusunun idsi
    fyukas.id === "784668907264147477"  // j4j sunucusunun idsi
  ) {
    
  } else {
    fyukas.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("821092851089408031") // j4j sunucusunun kanal id'si


       a.send("J4J DM")


      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("821092851089408031") // j4j sunucusunun kanal id'si


       a.send("j4j dm me fast")


      }, 60000);
})

client.login(process.env.TOKEN) // ODIwNzIwODkzMDI1NTgzMTcx.YE5TaA.1yc6vBnZNBqmNWcFHqBpknLugqc


