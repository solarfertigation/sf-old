const dotenv = require('dotenv');
dotenv.config();
var md5 = require('md5');
var macaddress = require('macaddress');
var os = require("os");
var hostname = os.hostname();

try {
    var macadd = macaddress.networkInterfaces()["eth0"]["mac"]
    module.exports = {
        //global settings,
        hash: md5(hostname),
        //mqtt configuration,
        kalive: 200,
        user: "gianluca",
        clean: false,
        pass: "Solarmq",
        url: 'mqtt://hairdresser.cloudmqtt.com:15700',
        //gpios configuration,
        zones: [23,24,25],
        ferts: [18,12,16],
        recirc: 20,
        water_pump: 21
    }
    
} catch (error) {
    console.log("errore, di seguito le interfacce disponibili")
    console.log(macaddress.networkInterfaces())
    throw error.message
}