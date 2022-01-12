const profile = artifacts.require("profile");

module.exports = function (deployer) {
  deployer.deploy(profile);
};
