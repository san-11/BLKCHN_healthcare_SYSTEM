var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "wheel dice little coach silent banana kiwi auction abandon hover useful vast";
const path = require("path");

module.exports = {
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        goerli: {
            provider: () => new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/54c6f6b07092492e9cf035c3fd640297"),
            network_id: 5,
            networkCheckTimeout: 10000
        }
    }
};