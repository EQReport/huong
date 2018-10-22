const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const Enmap = require('enmap');
const Version = "1.0.1";
const PrevVersion = "0.0.1 DEV"
const FileName = "huong.js";
const LineCount = 1697;
const CharacterCount = 69915;
const GiveAndFeed = 0;
const Commands = 0;

const LastUpdated = "2018-10-17 23:03 EDT";
const BotCreated = "2018-10-17 23:02 EDT"

const myEnmap = new Enmap({
  name: 'yandere',
  "toggle": false
});

const toggle = new Enmap({
  name: 'toggle',
  "toggle": false
})

myEnmap.defer.then( () => {
  console.log(myEnmap.size + " keys loaded");
  myEnmap.set("toggle", "false")
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} Version ` + Version);
  setInterval(function() {
    var game = ["in Viet Nam!","with the TV!","on my laptop!"]
    var eeee = game[Math.floor(Math.random()*game.length)]
    client.user.setPresence({ game: { name: eeee, type: 0 } });
  }, 10000);
  client.user.setStatus("online");
});

client.on('message', msg => {
  if (msg.author == client.user) return;
  var msg_content = msg.content.toLowerCase();
  var delay = (Math.floor(Math.random()*1200+1000))
  var delay2 = (Math.floor(Math.random()*1200+1000))
  var arg = msg_content.split(" ").slice(1).join(" ")
  var authorID = msg.member.user.id

  if (msg.content.toLowerCase() == "h_yandere true") {
    if(authorID == 465976254714347549 || authorID == 269273494733324308) {
      msg.channel.send("Now overriding permissions.")
      if(myEnmap.get(msg.guild.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("Silly! You're already *my love~!*")}, delay)
        msg.channel.stopTyping()
        return
      }
      else {
        myEnmap.set(msg.guild.id, true)
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("*My love*!")}, delay)
        msg.channel.stopTyping()
        return
      }
    }
    if(!msg.member.permissions.has('ADMINISTRATOR')) {
      if(myEnmap.get(msg.guild.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("You can't change me, *my love*!")}, delay)
        msg.channel.stopTyping()
        return
      }
      else {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("P-Please d-don't do t-that, " + msg.author.toString())}, delay)
        msg.channel.stopTyping()
        return
      }};
    if(myEnmap.get(msg.guild.id)) {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("Silly! You're already *my love~!*")}, delay)
      msg.channel.stopTyping()
      return
    }
    else {
      myEnmap.set(msg.guild.id, true)
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("*My love*!")}, delay)
      msg.channel.stopTyping()
    }
  }
  if (msg.content.toLowerCase() == "h_yandere false") {
    if(authorID == 465976254714347549 || authorID == 269273494733324308){
      msg.channel.send("Now overriding permissions.")
      if(myEnmap.get(msg.guild.id)) {
        myEnmap.set(msg.guild.id, false)
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("O-Oh... No! I-I d-don't know w-what happened... P-Please d-don't do t-that a-again...")}, delay)
        msg.channel.stopTyping()
        return
      }
      else {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I'm n-not... *that way*, o-okay...")}, delay)
        msg.channel.stopTyping()
        return
      }
    }
    if(!msg.member.permissions.has('ADMINISTRATOR')) {
      if(myEnmap.get(msg.guild.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I don't like what you're doing *my love*, so I blocked you from doing it!")}, delay)
        msg.channel.stopTyping()
        return
      }
      else {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("I-I'm sorry, b-but you don't have p-permission!")}, delay)
        msg.channel.stopTyping()
        return
      }
    }
    if(myEnmap.get(msg.guild.id)) {
      myEnmap.set(msg.guild.id, false)
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("O-Oh... No! I-I d-don't know w-what happened... P-Please d-don't do t-that a-again...")}, delay)
      msg.channel.stopTyping()
      return
    }
    else {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("I-I'm n-not... *that way*, o-okay...")}, delay)
      msg.channel.stopTyping()
      return
    }
  }

  if (msg.content.toLowerCase() == "h_yandere") {
    if(myEnmap.get(msg.guild.id)) {
      msg.channel.send("Yandere mode is active")
    }
    else {
      msg.channel.send("Yandere mode is inactive")
    }
  }

  if (msg_content == "h_info") {
    msg.channel.send(msg.author.toString() + ", You are using ``" + client.user.tag + "`` hosting **Huong**, with the file ``" + FileName + "`` version **" + Version + "**\nUtilizing **" + LineCount + "** lines of code containing **" + CharacterCount + "** charcters")
  }
  if (msg.content.toLowerCase() == 'h_credits') {
    msg.channel.send ({embed: {
      color:14352128,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Credits",
      description: "Thanks to all of these people who I am about to list, without them the Huong Bot would have never been possible!",
      fields: [{
        name: "Writer",
        value: "EQReport#0968 (<@269273494733324308>)"
      },
      {
        name: "Coder",
        value: "EQReport#0968 (<@269273494733324308>)"
      },
      {
        name: "Assistant Coder",
        value: "zBlake#0007 (<@246574843460321291>), vicr123#4567(<@278805875978928128>)"
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Huong Version " + Version
    }
    }})
  }
  if (msg.content.toLowerCase() == 'h_help') {
    msg.channel.send({embed: {
      color: 14352128,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Help Command",
      description: "Here is a list of commands! Do ``h_help [Command]`` for more information on the specified command",
      fields: [{
        name: "Basic Commands",
        value: "`h_help`,`h_ping`"
      },
      {
        name: "Functions",
        value: "`h_ask`,`h_slap`,`h_give`,`h_tags`,`h_roll`,`h_motivate`,`h_hug`,`h_yandere`,`h_spook`,`h_scold`"
      },
      {
        name: "Information Commands",
        value : "`h_info`,`h_credits`,`h_triggers`"
      }],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Huong Version " + Version
      }
    }})
  }

  //help command
  if(myEnmap.get(msg.guild.id)) {

    //Yandere commands
    if (msg_content == 'h_ping') {
      msg.channel.startTyping()
      setTimeout(function(){msg.reply("I'm online, *my love!*")}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.startsWith("h_ask")) {
      var sentences = ["Yes, *my love*!","No, *my love*!","*My love*, you're so silly for asking that...! Of course the answer is yes!","*My love*, you're so silly for asking that...! Of course the answer is no!","*My love*, I don't even know what to say!","*My love*, you know I would always say yes to that!","*My love*, you know I would always say no to that!","Of course, *my love~*","*My love*, I must decline!","*My love* I don't know what you mean!","*My love* it's not a yes or no question!","*My love*, you can't get me to answer that!"];
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random);}, delay)
      msg.channel.stopTyping()
      return
    }
    if (msg_content.startsWith('h_roll')) { //6
      var number2 = [msg_content.split(" ").slice(1).join(" ")] //5
      if (number2 == "")
        msg.channel.send("I can't do 0, *my love~*!")
        return
      if (number2 == 0)
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I can't do 0, *my love~*!")}, delay)
        msg.channel.stopTyping()
        return
      if (number2 == 1)
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("You know it will always be 1, *my love~*!")}, delay)
        msg.channel.stopTyping()
        return
      var random2 = [Math.floor(Math.random()*number2)+1] //6
      var sentences = ["*My love*, you rolled **" + random2 + "**!", "Your number is **" + random2 + "**, *my love~*!", "It's **" + random2 + "**, *my love~*!"];
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      if (isNaN(random2))
        return msg.channel.send("This isn't a number, *my love~*!")
      msg.channel.send (random)
    }
    if (msg.content.toLowerCase() == 'h_spook') {
      var sentences = ["*My love*, you think you can scare me?","I love it when you try that, *my love~*","*giggles* \n*My love,* you know that doesn't get me!"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_toggle') {
      if(authorID == 465976254714347549 || authorID == 269273494733324308) {
        msg.channel.send("Now overriding permissions...")
        if(toggle.get(msg.guild.id)) {
          toggle.set(msg.guild.id, false)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("*My love*, I won't react to those pesky triggers anymore!")}, delay)
          msg.channel.stopTyping()
          return
        }
        else {
          toggle.set(msg.guild.id, true)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("*My love*, I will now react to my triggers!")}, delay)
          msg.channel.stopTyping()
          return
        }
      }
      if(!msg.member.permissions.has('ADMINISTRATOR')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("*My love*, you can't change me!")}, delay)
        msg.channel.stopTyping()
        return
      }
      else {
        if(toggle.get(msg.guild.id)) {
          toggle.set(msg.guild.id, false)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("*My love*, I won't react to those pesky triggers anymore!")}, delay)
          msg.channel.stopTyping()
        }
        else {
          toggle.set(msg.guild.id, true)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("*My love*, I will now react to my triggers!")}, delay)
          msg.channel.stopTyping()
        }
      }
    }
    if (msg_content.startsWith("h_slap")) {
      if (msg_content.split(" ").slice(1).join(" ") == ("")) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I can't slap n-nobody...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      var sentences = [" Stay away from *my love*"," D-Don't go near *my love*!"," Get away from *my love*!"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      let user = msg.member.user.id
      let mention = msg.mentions.users.first()
      if(!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("Who do you want me to slap?")}, delay)
        msg.channel.stopTyping()
        return
      }
      let member = msg.mentions.users.first().id;
      if(member == user) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("Well, I can if that's what you like, *my love~*")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == ('<@465976254714347549>')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("Is that what you like, *my love*?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      if (member == (client.user.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("Is that what you like, *my love*?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("*slaps " + msg.mentions.members.first() + "*!" + random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg_content.startsWith("h_hug")) {
      var sentences3 = ["No one but *my love* deserves a hug!", "Silly! You think I'd hug someone who's not *my love~*?","*My love,* I'm not hugging them."]
      var random3 = sentences3[Math.floor(Math.random()*sentences3.length)]
      if (msg_content.split(" ").slice(1).join(" ") == ("")) {
        var sentences = ["*hugs* " + msg.author.toString(), "*My love~!* You're so warm!" + "! *hugs " + msg.author.toString() + "*", "I thought you would never ask *my love~* *hugs " + msg.author.toString() + "*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      let user = msg.member.user.id
      let mention = msg.mentions.users.first()
      if(!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("What does it matter? I only want to hug *my love*")}, delay)
        msg.channel.stopTyping()
        return;
      }
      let member = msg.mentions.users.first().id
      if(member == user) {
        var sentences = ["*hugs* " + msg.author.toString(), "*My love~!* You're so warm!" + "! *hugs " + msg.author.toString() + "*", "I thought you would never ask *my love~* *hugs " + msg.author.toString() + "*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (member == (client.user.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("I can't hug myself, silly!")}, delay)
        msg.channel.stopTyping()
        return;
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random3)}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_motivate') {
      var sentences = ["*My love*, you make the world go round!","*My love*, you're the only thing I need","*My love*, my love for you should be enough!"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
      return
    }
    if (msg_content.startsWith('h_motivate')) {
      var user = msg.author.id
      var sentences = ["Only *my love* needs motivation!","Why do you need me to motivate someone else, *my love*?"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      let mention = msg.mentions.users.first()
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg_content.startsWith("h_scold")) {
      if (msg_content.split(" ").slice(1).join(" ") == ("")) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I can't scold n-no one!")}, delay)
        msg.channel.stopTyping()
        return
      }
      let user = msg.member.user.id
      let mention = msg.mentions.users.first()
      var sentences = ["Don't do that, " + mention, "Stop it...! " + mention + "...!", "Whatever it is you're doing, **stop it**, " + mention, "**Get away from** *my love*, " + mention, "**STOP IT, " + mention + "!**"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      if(!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("Who should I scold?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      let member = msg.mentions.users.first().id;
      if (msg_content.split(" ").slice(1).join(" ") == ('<@465976254714347549>')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("I can scold myself for you, if that's what you like, *my love~*")}, delay)
        msg.channel.stopTyping()
        return;
      }
      if (member == (client.user.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I can scold myself for you, if that's what you like, *my love~*")}, delay)
        msg.channel.stopTyping()
        return
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }


    //Yandere help commands
    if (msg.content.toLowerCase() == 'h_help ping') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_ping",
        description: "Ping me, *my love*! Tell me you want to see me!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help motivate') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_motivate",
        description: "If you ever need it, I can provide motivation, *my love~*",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help roll') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_roll",
        description: "I can roll you a random number, *my love*",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help spook') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_spook",
        description: "Haha. How cute. You think you can scare me?",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help scold') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_scold",
        description: "I can scold someone!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help hug') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_hug",
        description: "I can hug you!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help ask') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_askg",
        description: "Ask me **anything** and I'll answer, *my love~*!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help slap') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_slap",
        description: "I can slap someone for trying to get with me, *my love*",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help credits') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_credits",
        description: "Credits, not like any of them matter though...",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help info') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_info",
        description: "Information about me!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help give') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_give",
        description: "Give me something \"h_give [Thing]\", but why do I need anything? All I need is you, *my love~*",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help tags') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_tags",
        description: "Tag me with something, *my love~*",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help yandere') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_yandere",
        description: "Add true or false to make me a yandere, but why would you need to change me, *my love~*?",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }

    if (msg.content.toLowerCase() == 'h_give') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Here is a list of things you can give me t-that I'll give a unique response for...!",
        description: "This list is separated into two parts, *my love*, Emoji Responses, and Text Responses...!",
        fields: [{
          name: "Emoji Responses",
          value: "Nothing here yet"
        },
        {
          name: "Text Responses",
          value: "Nothing here yet"
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Huong Version " + Version
      }}})}, delay)
      msg.channel.stopTyping()
    }

    //Yandere give command
    if (msg_content.startsWith('h_give ')) {
      var sentences = ["Thanks for the gift, *my love~*", "*My love*, I appreciate your kindness!","No gift could make me happier than you make me, *my love~*"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }

    if (msg.content.toLowerCase() == 'h_triggers') {
      msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "T-This is a list o-of triggers I w-will respond to...",
        description: "`Syringe`,`Needle`",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})
    }

    //tags help
    if (msg.content.toLowerCase() == 'h_tags') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Here is a list of tags, *my love*",
        description: "Make sure you do `@Huong#5272 [Phrase]`",
        fields: [{
          name: "Tags",
          value: "`I love you`,`I hate you`"
        }
      ],
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (toggle.get(msg.guild.id)) {
      //triggers
      if (msg_content.includes("syringe")) {
        var sentences = ["Anything for you, *my love~*", "For you, *my love*", "Maybe I can give it to you, *my love~*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
      }
      if (msg_content.includes("needle")) {
        var sentences = ["Anything for you, *my love~*", "For you, *my love*", "Maybe I can give it to you, *my love~*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
      }
      if (msg_content.includes("💉")) {
        var sentences = ["Anything for you, *my love~*", "For you, *my love*", "Maybe I can give it to you, *my love~*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
      }
    }
    else {

    }
    //Generic Tag
    if (msg.mentions.users.first() == client.user) { //Generic tag
      var sentences = ["Hm?","What?","I don't understand, *my love*",'What do you m-mean, *my love*?',"?","What was that, *my love*?","I don't understand that, *my love*"]
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      if (msg_content.split(" ").slice(1).join(" ") == ('i love you')) {
        var sentences = ["I knew all along, *my love~*", "I knew you did, *my love~*"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == ('i hate you')) {
        var sentences = ["*My love*, you try, don't you", "Hahahaha. You think I believe you'd *actually* hate me, *my love*?"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == client.user) return
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
  }
  //NON YANDERE
  else {


    //commands
    if (msg_content == 'h_ping') {
      msg.channel.startTyping()
      setTimeout(function(){msg.reply("H-Hello! I-I'm online!")}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.startsWith("h_ask")) {
      var sentences = ['I-I don\'t know!',"N-No...","Y-Yes...","I-I don't t-think so...","M-Maybe...","S-Sure...!"];
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random);}, delay)
      msg.channel.stopTyping()
      return
    }
    if (msg_content.startsWith('h_roll')) { //6
      var number2 = [msg_content.split(" ").slice(1).join(" ")] //5
      if (number2 == "") {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I can't d-do 0!")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (number2 == 0) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I can't d-do 0!")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (number2 == 1) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("Y-You know i-it'll always be 1...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      var random2 = [Math.floor(Math.random()*number2)+1] //6
      var sentences = ["O-Okay you rolled **" + random2 + "**!", "Y-Your number i-is **" + random2 + "**...", "I-It's **" + random2 + "**!"];
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      if (isNaN(random2)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("T-This isn't a number!")}, delay)
        msg.channel.stopTyping()
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send (random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_spook') {
      var sentences = ["**AH!**","A-AH!","*screams*","**AGHH!!**"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_toggle') {
      if(authorID == 465976254714347549 || authorID == 269273494733324308) {
        msg.channel.send("Now overriding permissions...")
        if(toggle.get(msg.guild.id)) {
          toggle.set(msg.guild.id, false)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("O-Okay... I w-won't react to m-my triggers anymore...")}, delay)
          msg.channel.stopTyping()
          return
        }
        else {
          toggle.set(msg.guild.id, true)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("I-I'll react to my t-triggers now...")}, delay)
          msg.channel.stopTyping()
          return
        }
      }
      if(!msg.member.permissions.has('ADMINISTRATOR')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I'm s-sorry... B-But you don't have p-permission...")}, delay)
        msg.channel.stopTyping()
        return
      }
      else {
        if(toggle.get(msg.guild.id)) {
          toggle.set(msg.guild.id, false)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("O-Okay... I w-won't react to m-my triggers anymore...")}, delay)
          msg.channel.stopTyping()
        }
        else {
          toggle.set(msg.guild.id, true)
          msg.channel.startTyping()
          setTimeout(function(){msg.channel.send("I-I'll react to my t-triggers now...")}, delay)
          msg.channel.stopTyping()
        }
      }
    }
    if (msg_content.startsWith("h_slap")) {
      if (msg_content.split(" ").slice(1).join(" ") == ("")) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I can't slap n-nobody...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      var sentences = [" Y-You were bad!"," D-Don't do that!"," S-Stop it!"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      let user = msg.member.user.id
      let mention = msg.mentions.users.first()
      if(!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("W-Who should I s-slap?")}, delay)
        msg.channel.stopTyping()
        return
      }
      let member = msg.mentions.users.first().id;
      if(member == user) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I don't w-want to slap y-you, " + msg.author.toString() + "...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == ('<@465976254714347549>')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("B-But! W-Why me...?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      if (member == (client.user.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("B-But! W-Why me...?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("*slaps " + msg.mentions.members.first() + "*!" + random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg_content.startsWith("h_hug")) {
      var sentences3 = ["*hugs " + msg.mentions.members.first() + "*", "S-Sure t-they can have one...! *hugs " + msg.mentions.members.first() + "*", "O-Okay...! *hugs " + msg.mentions.members.first() + "*", msg.author.toString() + " thinks you need a hug, " + msg.mentions.members.first() + "! *hugs " + msg.mentions.members.first() + "*"]
      var random3 = sentences3[Math.floor(Math.random()*sentences3.length)]
      if (msg_content.split(" ").slice(1).join(" ") == ("")) {
        var sentences = ["*hugs* " + msg.author.toString(), "I-I'll hug you... " + msg.author.toString() + "! *hugs " + msg.author.toString() + "*", "O-Okay...! *hugs " + msg.author.toString() + "*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      let user = msg.member.user.id
      let mention = msg.mentions.users.first()
      if(!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("W-Who should I hug?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      let member = msg.mentions.users.first().id
      if(member == user) {
        var sentences = ["*hugs* " + msg.author.toString(), "I-I'll hug you... " + msg.author.toString() + "! *hugs " + msg.author.toString() + "*", "O-Okay...! *hugs " + msg.author.toString() + "*"]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (member == (client.user.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("I-I can't hug myself, silly!")}, delay)
        msg.channel.stopTyping()
        return;
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random3)}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_motivate') {
      var sentences = ["Y-You can do it... " + msg.author.toString() + "!", "I-I know y-you can... " + msg.author.toString() + "!", "I-I believe in y-you... " + msg.author.toString() + "!", "L-Let your d-dreams come true... " + msg.author.toString() + "!"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg_content.startsWith('h_motivate')) {
      var user = msg.author.id
      var sentences = [msg.author.toString() + " t-thinks you can, " + msg.mentions.members.first() + "!", "D-Do it f-for " + msg.author.toString() + ", " + msg.mentions.members.first() + "!", msg.author.toString() + " b-believes in y-you, " + msg.mentions.members.first() + "!"]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      let mention = msg.mentions.users.first()
      if (!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("I-I can't motivate t-this...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      let member = msg.mentions.members.first().id;
      if (member == user) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("w-why motivate yourself w-when you can just do 'h_motivate' and h-have me motivate y-you!?")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == (client.user)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("I-I don't n-need motivation...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
    if (msg_content.startsWith("h_scold")) {
      if (msg_content.split(" ").slice(1).join(" ") == ("")) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I can't scold n-no one...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      let user = msg.member.user.id
      let mention = msg.mentions.users.first()
      var sentences = ["D-Don't do that, " + mention, "S-Stop it...! " + mention + "...!", "W-Whatever it is y-you're doing, y-you should stop it, " + mention, "Don't do that, " + mention, "Y-You better stop it, " + mention]
      var random = sentences[Math.floor(Math.random()*sentences.length)]
      if(!mention) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("W-Who should I s-scold?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      let member = msg.mentions.users.first().id;
      if (msg_content.split(" ").slice(1).join(" ") == ('<@465976254714347549>')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.reply("W-Why d-do I need it...?")}, delay)
        msg.channel.stopTyping()
        return;
      }
      if (member == (client.user.id)) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("W-Why do I n-need to be s-scolded...?")}, delay)
        msg.channel.stopTyping()
        return
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }

    //test commands
    /*if (msg.content.toLowerCase() == 'h_delay') {
      console.log(delay)
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send("hello")}, delay)
      msg.channel.stopTyping()
    }*/

    //Help commands
    if (msg.content.toLowerCase() == 'h_help ping') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_ping",
        description: "T-This is s-so you can see i-if I'm online and working c-correctly",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help motivate') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_motivate",
        description: "I-I can motivate y-you or s-someone else...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help roll') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_roll",
        description: "G-Give me a number a-and I'll g-give you a random number between 1 a-and that number...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help spook') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_spook",
        description: "Y-You can s-scare me with th-this...",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help scold') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_scold",
        description: "I-I can scold someone f-for you with this...",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help hug') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_hug",
        description: "I-I can hug y-you or s-someone else...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help ask') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_askg",
        description: "A-Ask me a question a-and I'll answer a-as best I can...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help slap') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_slap",
        description: "I-If someone's being b-bad... I-I can slap t-them for you...",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help credits') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_credits",
        description: "S-Some credits...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help info') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_info",
        description: "S-Some i-information a-about me...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help give') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_give",
        description: "Y-You can g-give me something w-with this...! J-Just do \"h_give [Thing]\"\nI-If you j-just say \"h_give\",I-I can give you a-a list of things you c-can give me...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help tags') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_tags",
        description: "You c-can tag m-me a-and I might respond...!",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }
    if (msg.content.toLowerCase() == 'h_help yandere') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Command h_yandere",
        description: "Y-You can add t-true or f-false at the end and c-change how I act... O-Or you can c-check b-by just sending `h_yandere`...",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }


    //Feed and Give commands

    if (msg.content.toLowerCase() == 'h_give') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "H-Here is a list of th-things you can give me t-that I'll g-give a unique response for...!",
        description: "T-This list is s-separated into two parts, Emoji R-Responses, and Text Responses...!",
        fields: [{
          name: "Emoji Responses",
          value: "💊 🍪 💉 🍇 🍈 🍉 🍊 🍋 🍌 🍎 🍏 🍐 🍒 🍓 🥝 🍅 🥔 🥕 🌽 🥒 🍄 🥓🍔 🍕 🌭 🌮 🌯 🍿 🍘 🍱 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍤 🍣 🍥 🍡 🎂 🍼 ☕ 🍵 🍶 🍾 🍸 🍷 🍺 🍻 🥂 🥃 🍳 🥘 👁️ 👀 👓 🕶️ 👔 👕 👖 🧣 👗 👙 👚 🎒 👞 👟 👠 👑 👒 🎓 💄 💍 ☂️ 🐶 🐩 🐈 🐕 🦐 💐 🌹 🌻 🌼 🌷 🔥 💎"
        },
        {
          name: "Text Responses",
          value: "`nothing`,`cola`,`sprite`,`mountain dew`,`pepsi`,`soda`,`dr pepper`"
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Huong Version " + Version
      }}})}, delay)
      msg.channel.stopTyping()
    }

    if (msg.content.toLowerCase() == 'h_triggers') {
      msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "T-This is a list o-of triggers I w-will respond to...",
        description: "`Syringe`,`Needle`",
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})
    }

    //tags help
    if (msg.content.toLowerCase() == 'h_tags') {
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send({embed: {
        color: 14352128,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Here i-is a list of t-tags!",
        description: "Y-You can g-give me something w-with this...! J-Just do \"h_give [Thing]\"\nI-If you j-just say \"h_give\",I-I can give you a-a list of things you c-can give me...!",
        fields: [{
          name: "Y-You can do `@Huong#5272 [Phrase]`",
          value: "`I love you`,`I hate you`"
        }
      ],
        footer: {
          icon_url: client.user.avatarURL,
          text: "Huong Version " + Version
        }
      }})}, delay)
      msg.channel.stopTyping()
    }

    //generic commands
    if (msg_content.startsWith('h_give ')) {
      var sentences = [("Th-thank you...", "T-Thank you, " + msg.author.toString())];
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      const bricc = client.emojis.find(emoji => emoji.name === "s_brick");
      const coke = client.emojis.find(emoji => emoji.name === "coke");
      const self = client.emojis.find(emoji => emoji.name === "huong");
      if (arg == ('💊')) {
        var sentences = ["W-Why do I n-need this...?","D-Do I need t-this...?","W-What...?","I-I don't need this...","I-I'm sorry... B-But I d-don't need that..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('💉')) {
        var sentences = ["N-No!","I-I don't want it!","Get it a-away from me!","D-Don't give me this!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🍪')) {
        var sentences = ["I-I love cookies...!","T-Thank you!","Cookies are th-the best...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🍅')) {
        var sentences = ["Th-thank you... B-But I think I n-need to cook something w-with this...", "T-Thank you, " + msg.author.toString(), "T-Tomatos a-are good, b-but I might use it to c-cook something...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🌶️')) {
        var sentences = ["T-This would g-go good with something...","I-I could use this w-with something...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🥒')) {
        var sentences = ["Th-thank you...!", "T-Thank you, " + msg.author.toString(),"I-I think I'll c-cut this up first..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🍿')) {
        var sentences = ["Th-thank you...!", "T-Thank you, " + msg.author.toString(),"I-I love popcorn..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🍵')) {
        var sentences = ["Th-thank you...!", "I-I love tea...!","T-Thanks for the tea...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🍜')) {
        var sentences = ["I-It's a little plain, b-but I'll still eat it...","T-Thank you..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.send(random);
        return
      }
      if (arg == ('🎂')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("B-But... I-It's not my birthday...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('🍼')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("I-I'm not a baby...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('☕')) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("T-Thanks... B-But I'm n-not a fan of coffee...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('nothing')) {
        var sentences = ["W-Why nothing...?","N-Nothing...?","W-Why are y-you giving me nothing...?"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('👓')) {
        var sentences = ["S-Sorry... B-But I don't n-need glasses...","I-I don't n-need these...","M-My vision is fine..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == bricc) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("BRICKIFY")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == "💄") {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("T-Thank you, b-but I don't n-normally use makeup...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == "☂️") {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("T-Thank you, b-but i-it's not raining right now...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == "🔥") {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("A-Ah I d-don't need that...!")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == "💍", arg == "💎") {
        var sentences = ["D-Did you r-really buy this f-for me...?!","A-Am I r-really worth t-this much...?","I-Is this for me...?"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == "💐" || arg == ("🌹") || arg == ("🌻") || arg == ("🌼") || arg == ("🌷")) {
        var sentences = ["T-This is for m-me!?","Y-You're too kind " + msg.author.toString(),"T-Thank you, " + msg.author.toString()];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == '🕶️'  || arg == ("👒")) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("T-Thanks...! B-But it's a l-little dark in here...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == '🎒' || arg == ("🎓")) {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("T-Thanks...! B-But I-I'm not in school...")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == '🦐') {
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send("C-Can I c-cook and eat it...?")}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == '👘') {
        var sentences = ["R-Reminds me o-of Asia...","S-Sorta reminds me of home...!","T-Thanks f-for this...!"]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == '👑') {
        var sentences = ["T-Thanks... B-But I'm n-not worthy...","T-Thanks... B-But I'm n-not royalty, " + msg.author.toString()]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == '🐩' || arg == ("🐶") || arg == ("🐈") || arg == ("🐕") || arg == ("")) {
        var sentences = ["I-I love pets...!", "T-Thank you s-so much...!"]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (arg == ('👙')) {
        var sentences = ["T-Thanks... B-But I should p-probably not w-wear this...","T-Thanks... B-But I d-don't want to put it on..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //I prefer white dresses
      if (arg == '👕' || arg == ("👖") || arg == ("👗") || arg == ("👚")) {
        var sentences = ["T-Thanks... B-But I p-prefer white dresses...","T-Thanks... B-But I won't u-use this...","T-Thanks... B-But I d-don't really need this..."]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      // I don't need this
      if (arg == '👔' || arg == ("🧣") || arg == ("👞") || arg == ("👟") || arg == ("👠")) {
        var sentences = ["T-Thanks... B-But I d-don't need this...","T-Thanks... B-But I won't u-use this...","T-Thanks... B-But I d-don't really need this..."]
        var random = sentences[Math.floor(Math.random()*sentences.length)]
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //I can cook for you
      if (arg == ('🍳') || arg == ("🥘")) {
        var sentences = ["S-So you want me to c-cook for you...?","Y-You want me to cook...?","I-I can cook for you...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //Ew
      if (arg == ('👁️') || arg == ("👀") || arg == ("🧠") || arg == ("👅") || arg == ("")) {
        var sentences = ["AGH! W-WHY WOULD YOU GIVE M-ME THIS...!?","W-WHAT IS THIS FOR!","W-WHY ARE YOU GIVING ME T-THIS!?"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //Food Huong likes
      if (arg == ('🍱') || arg == ('🍘') || arg == ('🍙') || arg == ('🍚') || arg == ('🍤')) {
        var sentences = ["Thank you!", "S-Some food th-that I love...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //Asian Food
      if (arg == ('🍢') || arg == ('🍣') || arg == ('🍛') || arg == ('🍥') || arg == ('🍡') || arg == ('🍣')) {
        var sentences = ["S-Some food of Asia...!","I-I think I recognize this...!"];
        var random = sentences[Math.flood(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //I've never eaten this before
      if (arg == ('🍔') || arg == ('🍕') || arg == ('🥓') || arg == ('🌮') || arg == ('🌯') || arg == ('🥙') || arg == ('🍝') || arg == ('🍠') || arg == ('') || arg == ('')) {
        var sentences = ["Th-thank you... B-But I've n-never eaten this b-before'...", "T-Thank you, " + msg.author.toString() + ", but I d-don't know if I-I'll like this..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //I like fruit
      if (arg == ('🥝') || arg == ('🍓') || arg == ('🍒') || arg == ('🍑') || arg == ('🍐') || arg == ('🍏') || arg == ('🍎') || arg == ('🍌') || arg == ('🍋') || arg == ('🍊') || arg == ('🍉') || arg == ('🍇')) {
        var sentences = ["Th-thank you...!", "T-Thank you, " + msg.author.toString(), "I-I like f-fruit...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //I like vegetables
      if (arg == ('🥕') || arg == ('🥕') || arg == ('🥕') || arg == ('🥕') || arg == ('🥕') || arg == ('🥕')) {
        var sentences = ["Th-thank you...!", "T-Thank you, " + msg.author.toString(),"I-I like vegetables...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //I need to make something out of this
      if (arg == ('🍄') || arg == ('🌽') || arg == ('🥔') || arg == ('🍄') || arg == ('🍄')) {
        var sentences = ["Th-thank you... B-But I need t-to make something o-out of this...", "T-Thank you, " + msg.author.toString() + ", but I think I'll c-cook this first..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //Soda
      if (arg == ('cola') || arg == ('pepsi') || arg == ('sprite') || arg == ('mountain dew') || arg == ('soda') || arg == ('dr pepper') || arg == (coke)) {
        var sentences = ["S-Sorry, b-but I d-don't drink t-that...!","I-I prefer t-tea, but t-thank you anyways...","I-Isn't this u-unhealthy...?","Y-You really w-want me to drink this...?","I-I'm not sure i-if I should drink this..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      //Alcohol
      if (arg == ('🍶') || arg == ('🍾') || arg == ('🍸') || arg == ('🍷') || arg == ('🍺') || arg == ('🍻') || arg == ('🥂') || arg == ('🥃')) {
        var sentences = ["S-Sorry, b-but I d-don't drink t-that...!","I-I shouldn't drink that...","I-Isn't this u-unhealthy...?","Y-You really w-want me to drink this...?","I-I'm not sure i-if I should drink this..."];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }

    if (toggle.get(msg.guild.id)) {
      //triggers
      if (msg_content.includes("syringe")) {
        var sentences = ["**GET IT AWAY!**","**NO!**","Y-You know I d-don't like those!"]
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
      }
      if (msg_content.includes("needle")) {
        var sentences = ["**GET IT AWAY!**","**NO!**","Y-You know I d-don't like those!"]
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
      }
      if (msg_content.includes("💉")) {
        var sentences = ["**GET IT AWAY!**","**NO!**","Y-You know I d-don't like those!"]
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
      }
    }
    else {

    }
    //Generic Tag
    if (msg.mentions.users.first() == client.user) { //Generic tag
      var sentences = ["Hm?","What?","I-I don't understand",'W-What do you m-mean?',"?","W-What was that?","I-I don't understand..."]
      var random = sentences[Math.floor(Math.random()*sentences.length)];
      if (msg_content.split(" ").slice(1).join(" ") == ('i love you')) {
        var sentences = ["Y-You do...?","I-I love y-you t-too...","A-Are you s-sure...?"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == ('i hate you')) {
        var sentences = ["W-Why...?","D-Do you r-really mean that?","T-That's *really* mean...!"];
        var random = sentences[Math.floor(Math.random()*sentences.length)];
        msg.channel.startTyping()
        setTimeout(function(){msg.channel.send(random)}, delay)
        msg.channel.stopTyping()
        return
      }
      if (msg_content.split(" ").slice(1).join(" ") == client.user) return
      msg.channel.startTyping()
      setTimeout(function(){msg.channel.send(random)}, delay)
      msg.channel.stopTyping()
    }
  }

});

client.login(config.token);
