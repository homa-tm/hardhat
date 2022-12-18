const { Toast } = require("reactstrap");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");




task("accounts", "Prints the list of accounts", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
     console.log(account.address);
  }
});

const PRIVATE_KEY = "8b226d849dadcf76d886067a6099243b2f360239fc41eb7bd67a56d97645609c";
const MUMBAI_NETWORK_URL = "https://matic-testnet-archive-rpc.bwarelabs.com";
const POLYGONSCAN_API_KEY = "S92MTFKR98SXDBEWPNSSQH1XV1G35ANBRT";

/** 
 *@type import('hardhat/config').HardhatUserConfig 
 */
 module.exports = {
  solidity: "0.8.15",
  networks: {
    mumbai: {
      url: MUMBAI_NETWORK_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY 
  }
};
