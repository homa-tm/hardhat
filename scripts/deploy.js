// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  //const unslockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  //const lockedAmount = hre.ethers.utils.parseEther("1");

  const Metaversear = await hre.ethers.getContractFactory("Metaversear");
  const metaverseAR = await Metaversear.deploy();

  await metaverseAR.deployed();

  console.log("Metaversear deployed to:", metaverseAR.address);

  await metaverseAR.deployTransaction.wait(5);
    
  // We verify the contract
  await hre.run("verify:verify", {
      address: metaverseAR.address,
      constructorArguments: [],
  });

}
    //`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  //);
//}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});

