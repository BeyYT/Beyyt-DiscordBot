const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "Bey!yt") {
    msg.reply("https://www.youtube.com/channel/UCRc8P8M4t_Js84TNdtoEyPg")
  if (msg.content === "Bey!git") {
	msg.reply("https://github.com/BeyYT/Beyyt-DiscordBot")
	if (msg.content === "Bey!ver") {
	msg.reply("0.1 Alpha")
	}
})
client.login("NzI4MzM1NDUwNTk4NjcwMzM3.Xv45TQ.2H8aNceruLzMTLZCfyZz7IddiqU")