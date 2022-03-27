AAVE_V2_ABI = [
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "admin",
            "type": "address"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "address",
            "name": "implementation",
            "type": "address"
         }
      ],
      "name": "Upgraded",
      "type": "event"
   },
   {
      "stateMutability": "payable",
      "type": "fallback"
   },
   {
      "inputs": [],
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "implementation",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_logic",
            "type": "address"
         },
         {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
         }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
         }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
         },
         {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
         }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
   }
];

module.exports = {
  AAVE_V2_ABI,
};