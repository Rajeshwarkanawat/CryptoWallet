require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/q3gnqo8qc5KJ74Fc9PArDoe8wzJDthhp',
      accounts:['bb5a455abb203854f318b257e16a716f1b67cdbcac4cf25a22a86a8f906123ee'],
    },
  },
};
