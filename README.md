# Svalbard

This repository contains downloadable scripts with which to interact with major DeFi protocols with nothing more than your local machine and access to an Ethereum node.

The purpose of this repo is to enable users to manage their outstanding DeFi positions in the event of a coordinated DDoS attack on DeFi front-ends.

Most users rely on (centralized) front-ends to track and repay their DeFi loans. Even power users generally rely on Etherscan as a conduit for interacting with DeFi smart contracts, making it a key single point of failure.

This repo allows users to download scripts accessible via their CLI to close out DeFi positions. Users can either use an Alchemy/Infura endpoint, or, better yet, point these scripts to a local node.

Users should download this repo, and populate a .env file with:

```
WALLET_PRIVATE_KEY=""
ENDPOINT=""
```

This project is named Svalbard, after the [Svalbard Global Seed Vault](https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault), a backup facility that stores seeds from around the world to protect the world's food supply and biodiversity in the event of disaster.