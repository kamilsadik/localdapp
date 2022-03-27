const { ERC721_ABI } = require("./helpers/ERC721ABI");
const { ERC20_ABI } = require("./helpers/ERC20AVI");
const { AAVE_V2_ABI } = require("./helpers/AAVEV2ABI");
const { ethers } = require("hardhat");

if (process.env.ENDPOINT === undefined) {
  console.error("Please provide ENDPOINT env")
  process.exit(1)
}
const endpoint = process.env.ENDPOINT
const provider = ethers.getDefaultProvider(endpoint);

if (process.env.WALLET_PRIVATE_KEY === undefined) {
  console.error("Please provide WALLET_PRIVATE_KEY env")
  process.exit(1)
}
const wallet = new Wallet(process.env.WALLET_PRIVATE_KEY, provider);
const address = ethers.utils.computeAddress(process.env.WALLET_PRIVATE_KEY);

const GWEI = BigNumber.from(10).pow(9);
const ETHER = BigNumber.from(10).pow(18);

// Contract addresses
const AAVE_V2_ADDRESS = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9";

async function repayLoan(reserve, amount, onBehalfOf) {
  AAVE_V2 = new ethers.Contract(AAVE_V2_ADDRESS, AAVE_V2_ABI, await provider.getSigner());
  const USER_SIGNER = await ethers.getSigner(WALLET_PRIVATE_KEY);
  const result = await AAVE_V2.connect(USER_SIGNER).repay(reserve, amount, onBehalfOf);
  console.log(result.logs[0]);
}