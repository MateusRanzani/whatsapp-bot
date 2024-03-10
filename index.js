const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  // MESSAGES WITH MENTIONS

  // const chat = await msg.getChat();
  // let user = await msg.getContact();
  // await chat.sendMessage(`Olá @${user.id.user}`, {
  //   mentions: [user],
  // });
  
  if (msg.body) {
		await client.sendMessage(msg.from, 'Olá, tudo bem? Essa é uma mensagem teste do chat bot, espero que dê certo');
	}
});

client.initialize();
