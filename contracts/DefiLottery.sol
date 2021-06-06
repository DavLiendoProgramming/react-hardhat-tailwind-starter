//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";
/**
 @title Contract for making a lottery
 @author David Liendo
 */
contract DefiLottery is Initializable, ContextUpgradeable, OwnableUpgradeable {
    string public helloWorld;

    
    /**
     * @dev Initializes the values for the upgradeable contract
     */
     function initialize(string memory _helloWorld) external initializer {
        helloWorld = _helloWorld;
     }
}
