const splasheNn = require("discord.js");
const splashen35 = new splasheNn.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
const db = require('quick.db')
require("./util/eventLoader")(splashen35);
const express = require("express");
const app = express();
let prefix = ayarlar.prefix

const http = require("http");
app.get("/", (request, response) => {//splashen
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};

splashen35.commands = new splasheNn.Collection();
splashen35.aliases = new splasheNn.Collection();
fs.readdir("./komutlar/", (err, files) => {//splashen
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    splashen35.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      splashen35.aliases.set(alias, props.help.name);
    });
  });
});

splashen35.reload = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      splashen35.commands.delete(command);
      splashen35.aliases.forEach((cmd, alias) => {
        if (cmd === command) splashen35.aliases.delete(alias);
      });
      splashen35.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        splashen35.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

splashen35.load = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      let cmd = require(`./komutlar/${command}`);
      splashen35.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        splashen35.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

splashen35.unload = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      splashen35.commands.delete(command);
      splashen35.aliases.forEach((cmd, alias) => {
        if (cmd === command) splashen35.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////

splashen35.elevation = message => {//splashen
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

splashen35.login(ayarlar.token);


splashen35.on("ready", () => {//splashen
  splashen35.user.setPresence({
    game: { name: `SPLASHEN PUBLİC MODERASYON ALTYAPI`, type: "WATCHING" },
    status: "online"
  });
});



// OTOROL
//splashen35.on("guildMemberAdd", (member) => {
  //let otorol = ayarlar.otorol
  //if(!otorol) return
  //let rol = member.guild.roles.get(otorol)
  //member.addRole(rol)
//})