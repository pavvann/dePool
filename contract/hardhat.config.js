require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY = process.env.PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {

    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      blockConfirmations: 6,
    },

    optimism_goerli: {
      url: "https://goerli.optimism.io",
      accounts: [PRIVATE_KEY],
      chainId: 420,
      blockConfirmations: 6,
    },
    base_goerli: {
      url: "https://base-goerli.public.blastapi.io",
      accounts: [PRIVATE_KEY],
      chainId: 84531,
      blockConfirmations: 6,
    },

    zora_goerli: {
      url: "https://testnet.rpc.zora.energy",
      accounts: [PRIVATE_KEY],
      chainId: 999,
      blockConfirmations: 6,
    }
  },
};

