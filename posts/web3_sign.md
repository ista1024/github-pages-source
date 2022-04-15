---

title: "WEB3 sign"
description: "Steps to send block chain transaction"
date: "2022-04-15"

---

const encodeSignature = ([v, r, s]) => Bytes.flatten([r, s, v]);

const decodeSignature = hex => [Bytes.slice(64, Bytes.length(hex), hex), Bytes.slice(0, 32, hex), Bytes.slice(32, 64, hex)];


[web3-eth-accounts](https://github.com/ChainSafe/web3.js/blob/1.x/packages/web3-eth-accounts/src/index.js) & node_modules/web3-eth-accounts/node_modules/eth-lib/lib/
```javascript
Accounts.prototype.signTransaction = function signTransaction(tx, privateKey, callback) {
    var _this = this,
        error = false,
        transactionOptions = {},
        hasTxSigningOptions = !!(tx && ((tx.chain && tx.hardfork) || tx.common));

    function signed(tx) {

        try {
            var transaction = helpers.formatters.inputCallFormatter(Object.assign({},tx));
            transaction.data = transaction.data || '0x';
            transaction.value = transaction.value || '0x';
            transaction.gasLimit = transaction.gasLimit || transaction.gas;
            if (transaction.type === '0x1' && transaction.accessList === undefined) transaction.accessList = []

            // Because tx has no @ethereumjs/tx signing options we use fetched vals.
            if (!hasTxSigningOptions) {
                transactionOptions.common = Common.forCustomChain(
                    'mainnet',
                    {
                        name: 'custom-network',
                        networkId: transaction.networkId,
                        chainId: transaction.chainId
                    },
                    transaction.hardfork || HardForks.London
                );

                delete transaction.networkId;
            } else {
                if (transaction.common) {
                    transactionOptions.common = Common.forCustomChain(
                        transaction.common.baseChain || 'mainnet',
                        {
                            name: transaction.common.customChain.name || 'custom-network',
                            networkId: transaction.common.customChain.networkId,
                            chainId: transaction.common.customChain.chainId
                        },
                        transaction.common.hardfork || HardForks.London,
                    );

                    delete transaction.common;
                }

                if (transaction.chain) {
                    transactionOptions.chain = transaction.chain;
                    delete transaction.chain;
                }

                if (transaction.hardfork) {
                    transactionOptions.hardfork = transaction.hardfork;
                    delete transaction.hardfork;
                }
            }
            if (privateKey.startsWith('0x')) {
                privateKey = privateKey.substring(2);
            }
            var ethTx = TransactionFactory.fromTxData(transaction, transactionOptions);
            var signedTx = ethTx.sign(Buffer.from(privateKey, 'hex'));
            var validationErrors = signedTx.validate(true);

            if (validationErrors.length > 0) {
                let errorString = 'Signer Error: '
                for(const validationError of validationErrors) {
                    errorString += `${errorString} ${validationError}.`
                }
                throw new Error(errorString);
            }

            var rlpEncoded = signedTx.serialize().toString('hex');
            var rawTransaction = '0x' + rlpEncoded;
            var transactionHash = utils.keccak256(rawTransaction);

            var result = {
                messageHash: '0x' + Buffer.from(signedTx.getMessageToSign(true)).toString('hex'),
                v: '0x' + signedTx.v.toString('hex'),
                r: '0x' + signedTx.r.toString('hex'),
                s: '0x' + signedTx.s.toString('hex'),
                rawTransaction: rawTransaction,
                transactionHash: transactionHash
            };

            callback(null, result);
            return result;

        } catch (e) {
            callback(e);
            return Promise.reject(e);
        }
    }

    tx.type = _handleTxType(tx);

    // Resolve immediately if nonce, chainId, price and signing options are provided
    if (
        tx.nonce !== undefined &&
        tx.chainId !== undefined &&
        (
            tx.gasPrice !== undefined ||
            (
                tx.maxFeePerGas !== undefined &&
                tx.maxPriorityFeePerGas !== undefined
            )
        ) &&
        hasTxSigningOptions
    ) {
        return Promise.resolve(signed(tx));
    }

    // Otherwise, get the missing info from the Ethereum Node
    return Promise.all([
        ((isNot(tx.common) || isNot(tx.common.customChain.chainId)) ? //tx.common.customChain.chainId is not optional inside tx.common if tx.common is provided
            ( isNot(tx.chainId) ? _this._ethereumCall.getChainId() : tx.chainId)
            : undefined ),
        isNot(tx.nonce) ? _this._ethereumCall.getTransactionCount(_this.privateKeyToAccount(privateKey).address) : tx.nonce,
        isNot(hasTxSigningOptions) ? _this._ethereumCall.getNetworkId() : 1,
        _handleTxPricing(_this, tx)
    ]).then(function(args) {
        const [txchainId, txnonce, txnetworkId, txgasInfo] = args;

        if ( (isNot(txchainId) && isNot(tx.common) && isNot(tx.common.customChain.chainId)) || isNot(txnonce) || isNot(txnetworkId) || isNot(txgasInfo)) {
            throw new Error('One of the values "chainId", "networkId", "gasPrice", or "nonce" couldn\'t be fetched: ' + JSON.stringify(args));
        }

    return signed({
            ...tx,
            ... ((isNot(tx.common) || isNot(tx.common.customChain.chainId) ) ? {chainId: txchainId}:{}), // if common.customChain.chainId is provided no need to add tx.chainId
            nonce: txnonce,
            networkId: txnetworkId,
            ...txgasInfo // Will either be gasPrice or maxFeePerGas and maxPriorityFeePerGas
        });
    });
};
```
