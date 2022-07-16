const { roleMention, userMention, channelMention } = require("@discordjs/builders");
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});


Client.on("messageCreate", message => {
    if (message.author.bot) return;

    else if(message.content === prefix + "redemare"){
        message.delete({timeout: 0000});
        Client.channels.fetch('995438609752666264').then(channel => channel.send(" <@&992083278305701908> **__Le serveur *redémare*__** ⚙"));
    }
    else if(message.content === prefix + "ON"){
        message.delete({timeout: 0000});
        Client.channels.fetch('995438609752666264').then(channel => channel.send(" <@&992083278305701908> **__Le serveur est *ON*__** :white_check_mark:"));
    }
    else if(message.content === prefix + "OFF"){
        message.delete({timeout: 0000});
        Client.channels.fetch('995438609752666264').then(channel => channel.send(" <@&992083278305701908> **__Le serveur est *OFF*__** :no_entry:"));
    }
    else if(message.content === prefix + "demare"){
        message.delete({timeout: 0000});
        Client.channels.fetch('995438609752666264').then(channel => channel.send(" <@&992083278305701908> **__Le serveur *Démare*__** 🕕"))
    }
});

Client.login("OTkzNTg4NTI0MjUzMTg4MTQ3.GlYqfy.laqmNSHCsLs9v3-rZr3RU7CLvzI52QJdaYeAtM");