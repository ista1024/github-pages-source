---

title: "WEB3 send ethereum transaction"
description: "Steps to send block chain transaction"
date: "2022-04-01"

---

There are three main steps in order to send a transaction to the Ethereum blockchain: create, sign, and broadcast.

### first
chainId: eth_chainId
nonce: eth_getTransactionCount
block_info: eth_getBlockByNumber
gas: eth_gasPrice or eth_estimateGas


sendSignedTransaction(signTransaction.rawTransaction)

sentSignedTransaction: eth_sendRawTransaction

TransactionHash: eth_getTransactionReceipt

---
## Reference
[A quick guide to perform transactions with Web3 and Node.js
]("https://betterprogramming.pub/how-to-send-ethereum-transactions-using-web3-d05e0c95f820")
