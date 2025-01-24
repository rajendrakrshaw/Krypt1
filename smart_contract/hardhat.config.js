

require('@nomiclabs/hardhat-ethers');

module.exports={
  solidity:'0.8.0',
  networks:{
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/Eozcc0_4-lrOs1sqwY1XPWJzbF2SmE5i',
      accounts:[`d2df56fbb171857bd3d88caf4ac4c864ef02a116be0cb9b73eef89acbfe4f685`]
    }
  }
}