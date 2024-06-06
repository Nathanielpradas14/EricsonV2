const axios = require("axios");

module.exports = new Object ({
  config: new Object ({
    name: "feitan",
    version: "1.0.0",
    author: "AkhiroDEV",
    description: "Talk to AkhiroAI",
    usage: "{p}feitan [query]"
  }),
  async onRun({ message, args }){
    const question = args.join(" ");
    if (!question){
      return message.reply("ℹ️ | Provide a question.",)
    };
    try {
      const response = await axios.get(`https://akhiro-rest-api.onrender.com/api/akhiro?q=${encodeURIComponent(args)}`);
      const msg = response.data.content

      message.reply(`${msg}`);
      await message.send(`Please Contact The API Developer If There Would Be An Error.
      https://www.facebook.com/ericsonpascua6,
      ,
      `)
    } catch (error) {
      console.log(error);
      message.send(`ERROR: ${error.message}`)
    }
  }
})
