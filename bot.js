const Discord = require("discord.js");
const client = new Discord.Client;

// Reply "Get some real friends" when someone says 'ping'

client.on("message", message => {
  if (message.content == "ping"){
    message.reply("Get some real friends");
  }
});

// Displays every command when "-Help" is said

client.on("message", message => {
  if (message.content == "-Help"){
      var helpLine1 = ("```--Help--\n```");
      var helpLine2  = ("-Help - `Displays all possible commands`\n");
      var helpLine3  = ("-IP - `Informs you of the IP Address and Port of the server`\n");
      var helpLine4  = ("-Apply - `Informs you of how and where to Apply`\n");
      var helpLine5  = ("-Bot - `Tells you how you can get your own custom bot`\n");
      var helpLine6 = ("-8ball - `Answers the question you provided with the original 8ball answers`\n");
      var helpLine7  = ("-Dank - `tells you how dank you are on a scale 0-100`\n");
      var helpLine8 = ("-Meme - `Sends a random meme`\n");
      //var helpLine# = ("");
      return message.channel.send(
        helpLine1 + helpLine2 + helpLine3 + helpLine4 +
        helpLine5 + helpLine6 + helpLine7 + helpLine8);
  }
});

// Informs you of the IP Address and Port of the server when "-IP" is said

client.on("message", message => {
  if (message.content == "-IP"){
    message.reply("Right now the server is not available to the public, try again later");
  }
});

// Informs you how and where to Apply when "-Apply" is said

client.on("message", message => {
  if (message.content == "-Apply"){
    message.reply("Sorry, but Moonlight Realm is not receiving Applications right now");
  }
});

// Answers the question provided with the original Magic 8Ball answers when "-8ball" is said

client.on("message", message => { 
  if (message.author.bot) return
  if (message.content.startsWith = "-8ball");{
  var sayings = ["Most Likely", "Very Doubtful", "Ask Again", "As I see it, Yes", "My Sources say No", "Cannot Predict Now", "Yes",
                   "Don't Count on It", "Without a Doubt"]
    var result = Math.floor((Math.random() * sayings.length) + 0);
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .addField(sayings[result])
    message.channel.send({embed: embed})
  }})
                  
              
client.login(process.env.BOT_TOKEN);
