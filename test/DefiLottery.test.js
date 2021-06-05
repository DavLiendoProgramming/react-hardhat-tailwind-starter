const DefiLottery = artifacts.require('DefiLottery');

const truffleAssert = require('truffle-assertions');
const { assert, web3 } = require('hardhat');
const {
  expectRevert,
  expectEvent,
  time,
} = require('@openzeppelin/test-helpers');

//Accounts with funds for transactions.
// For example: 17th place of the accounts with more ether according to etherscan
const ADMIN = '0x1b3cb81e51011b549d78bf720b0d924ac763a7c2';

//Utility functions
const toWei = (value, type) => web3.utils.toWei(String(value), type);
const fromWei = (value, type) =>
  Number(web3.utils.fromWei(String(value), type));
const toBN = (value) => web3.utils.toBN(String(value));

// DefiLottery Test
contract('Defi Lottery', () => {
  let defiLottery;

  //impersonating accounts and deploying
  before(async () => {
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [ADMIN],
    });
    defiLottery = await DefiLottery.new();

    //Initialize variables
    defiLottery.initialize('Im message');
  });
  it('Deploys a contract', async function () {
    console.log(await defiLottery.helloWorld());
    assert.equal('Im message', await defiLottery.helloWorld());
  });
});
