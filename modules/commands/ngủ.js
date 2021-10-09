module.exports.config = {
    name: "ngủ",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bye.gif")) request("https://data.whicdn.com/images/312923454/original.gif").pipe(fs.createWriteStream(dirMaterial + "bye.gif"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngủ")==0 || (event.body.indexOf("Ngủ")==0) || (event.body.indexOf("sleep")==0) || (event.body.indexOf("Sleep")==0) || (event.body.indexOf("Đi ngủ")==0) || (event.body.indexOf("đi ngủ")==0)) {
		var msg = {
				body: "Bye ${name} chúc bạn ngủ ngon ❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/bye`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
