const config = require('./config.json');
const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: "Hello there, stalker",
        state: "While you're here, check out my GitHub ",
        startTimestamp: new Date(), // Shows the elapsed time
        largeImageKey: "typing", 
        largeImageText: "Text for large image", // Text that shows when you hover over the large image
        smallImageKey: "Small image", 
        smallImageText: "Text for small image", // Text that shows when you hover over the small image
        buttons: [{
            label: "My GitHub", // Title of button 1
            url: "https://github.com/sydyen" // Link of button 1
        }, {
            label: "Button 2", // Title of button 2
            url: "https://youtube.com" // Link of button 2
        }]

    });
    console.log("RPC is running!") //Logs this message when the program is runnuing successfully
})

rpc.login(
    {
        clientId: config.ID //Your application id
    }
)
