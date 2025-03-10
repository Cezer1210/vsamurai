// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function deployBreedingManager(breedingManagerInstance) {
  const _breddingManagerAddress = breedingManagerInstance.address;
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const BreedingManagerFactory = await hre.ethers.getContractFactory("BreedingManager");

  const _owner = "0xb0043558C4F2399Bb564B20F30a5Dc1Fb2d6e0Fd"; // test account 2

  const _signer = "0xeAB1e71AF80a159f6A03c6Ab4BEB52356f7d6dB4"; // Backend signer pubkey

  const BreedingManagerInstance = await BreedingManagerFactory.deploy(_breddingManagerAddress, _owner, _signer);
  await BreedingManagerInstance.deployed();

  console.log("BreedingManager deployed to:", BreedingManagerInstance.address);
  return BreedingManagerInstance;
}


module.exports = deployBreedingManager;