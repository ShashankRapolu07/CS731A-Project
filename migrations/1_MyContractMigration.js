// SPDX-License-Identifier: MIT
const ElectionSystem = artifacts.require("ElectionSystem"); 
// arg inside require should be same as the name of the smart contract
// The above code line imports the contract (compiled one)


module.exports = function (deployer) {
  deployer.deploy(ElectionSystem);
};
//This code snippet exports the imported contract to the corresponding blockchain