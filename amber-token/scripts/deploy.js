const hre = require("hardhat");

async function main() {
  const AmberToken = await hre.ethers.getContractFactory("AmberToken");
  const amberToken = await AmberToken.deploy(100000000, 50);

  await amberToken.deployed();

  console.log("Amber Token deployed : ", amberToken.address);
}

//npx hardhat run scripts/deploy.js --network polygon_amoy (no need to run local hardhat node)

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


