/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-web3');
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');
module.exports = {
  networks: {
    hardhat: {
      // Uncomment these lines to use mainnet fork
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
        blockNumber: 12573424,
      },
    },
    // live: {
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
    //   accounts: [process.env.MAINNET_PRIVKEY],
    // },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: 'USD',
    excludeContracts: [],
  },
  mocha: {
    timeout: 240000,
  },
};
