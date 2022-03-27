import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-truffle5';
import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.ENDPOINT === undefined) {
  console.error("Please provide ENDPOINT env")
  process.exit(1)
}
const ENDPOINT = process.env.ENDPOINT;

if (process.env.WALLET_PRIVATE_KEY === undefined) {
  console.error("Please provide WALLET_PRIVATE_KEY env")
  process.exit(1)
}
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

const config: HardhatUserConfig = {
  networks: {
    mainnet: {
      url: ENDPOINT,
      accounts: [`${WALLET_PRIVATE_KEY}`]
    }
  },
};
export default config;