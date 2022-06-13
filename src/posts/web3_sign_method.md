---

title: "WEB3 sign method"
description: "Steps to send block chain transaction"
date: "2022-05-09"

---

### Sign tx
```javascript

// TransactionFactory.fromTxData => 각 properties를 byte arr로 리턴
ethTx = TransactionFactory.fromTxData(txData, txOptions);

// 서명
ethTx.sign(Buffer.from(privateKey, 'hex'));

/* 
 * @ethreumjs/tx/dist.broser/transactionFactory.js
 * return: ByteArray
 */
TransactionFactory.fromTxData = function (txData, txOptions)

/* 
 * @ethreumjs/tx/dist.broser/legacyTransaction.js
 * this: TransactionFactory.fromTxData
 * return: ByteArray
 */
Transaction.prototype._getMessageToSign = function () {
        var values = [
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.nonce),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasPrice),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.value),
            this.data,
        ];
        if (this.supports(types_1.Capability.EIP155ReplayProtection)) {
            values.push((0, ethereumjs_util_1.toBuffer)(this.common.chainIdBN()));
            values.push((0, ethereumjs_util_1.unpadBuffer)((0, ethereumjs_util_1.toBuffer)(0)));
            values.push((0, ethereumjs_util_1.unpadBuffer)((0, ethereumjs_util_1.toBuffer)(0)));
        }
        // values: Array(9)
        // nonce, gasPrice, gasLimit, this.to.buf, this.value, this.data, 
        return values;
    };

```


