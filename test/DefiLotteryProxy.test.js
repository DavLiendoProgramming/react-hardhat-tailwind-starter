const truffleAssert = require('truffle-assertions');
const { assert, upgrades, ethers } = require('hardhat');
const {
  expectRevert,
  expectEvent,
  time,
} = require('@openzeppelin/test-helpers');

//Accounts with funds for transactions.
// For example: 17th place of the accounts with more ether according to etherscan
const ADMIN = '0x1b3cb81e51011b549d78bf720b0d924ac763a7c2';

// DefiLottery Test
contract('Defi Lottery Upgradeable', () => {
  let defiLottery, admin, proxyAdmin, instance;

  //impersonating accounts and deploying
  before(async () => {
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [ADMIN],
    });
    console.log(ethers.getContractFactory, 'imethers');

    //Initialize variables
    admin = await ethers.getSigner(ADMIN);
    defiLottery = await ethers.getContractfactory('DefiLottery', admin);
    instance = await upgrades.deployProxy(defiLottery, ['Hello world!']);
    proxyAdmin = await upgrades.admin.getInstance();
  });

  it('Contract Exists', async function () {
    assert.equal(await instance.helloWorld(), 'Hello world!');
  });
});
