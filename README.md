# LocalDapp

This repository contains downloadable scripts with which to interact with major DeFi protocols.

The purpose of this repo is to enable users to manage their outstanding DeFi positions in the event of a coordinated DDoS attack on DeFi front-ends.

Most users rely on (centralized) front-ends in order to repay and track their DeFi loans. Even power users generally rely on Etherscan (also centralized) as a conduit for interacting with DeFi smart contracts.

This repo allows users to download scripts accessible via their CLI to repay DeFi loans, and close out positions.

Users can either rely on an Alchemy/Infura endpoint, or, better yet, point these scripts to a local node.

Users should download this repo, and populate a .env file with:

```
WALLET_PRIVATE_KEY=""
ENDPOINT=""
```