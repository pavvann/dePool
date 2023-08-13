
const {ethers, upgrades} = require("hardhat");

async function main() {
  try {
    const factory = await ethers.getContractFactory("dePool");
    const deployed = await ethers.deployContract(factory);
    await deployed.deployed();
    console.log("dePool deployed to:", deployed.address);
  } catch (err) {
    console.log(err)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
