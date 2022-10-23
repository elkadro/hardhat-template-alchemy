const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  // Deploy First
  const First = await ethers.getContractFactory("Greeter");
  const first = await First.deploy("Hello friends");
  await first.deployed();
  console.log("First: " + first.address);
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
