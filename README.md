# Svalbard

Svalbard is a turnkey set of scripts with which to interact with major DeFi protocols using nothing more than:
1. your local machine and
2. access to an Ethereum node.

The purpose of this repo is to enable users to manage their outstanding DeFi positions in the event of a coordinated DDoS attack on DeFi front-ends.

# Roadmap

The first iteration of this project will feature thoroughly documented scripts for users comfortable with CLIs. A subsequent iteration will add a simple UI, such that non-technical users can manage their DeFi exposure from a desktop application.  Users can either use an Alchemy/Infura endpoint, or, better yet, point these scripts to a local node.

# Motivation

Most users rely on (centralized) front-ends to track and repay their DeFi loans. Even power users generally rely on Etherscan as a conduit for interacting with DeFi smart contracts, making it a key single point of failure.

# Instructions

Users should download this repo, and populate a .env file in the root directory containing:

```
WALLET_PRIVATE_KEY=""
ENDPOINT=""
```

# Etymology

Svalbard is named after the [Svalbard Global Seed Vault](https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault), a backup facility that stores seeds from around the world to protect the world's food supply and biodiversity in the event of disaster.