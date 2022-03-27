import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-truffle5';
import * as dotenv from 'dotenv';
dotenv.config();

const ENDPOINT = process.env.ENDPOINT;
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