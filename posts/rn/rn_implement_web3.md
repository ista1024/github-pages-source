---

title: "Implement WEB3 in React-native"
description: "Implement WEB3 in React-native"
date: "2022-04-26"

---

## Implement web3

### install modules

```bash
npm install
npx react-native start --reset-cache

npm i -S web3 node-libs-browser
npm i base-64
```

### Add these lines to metro.config.js

```json
resolver: {
  extraNodeModules: require('node-libs-browser')
}
```

### Create shim.js

```javascript
import {decode, encode} from 'base-64';

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';
if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (var p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p];
    }
  }
}

process.browser = false;
if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer;

if (typeof location === 'undefined')
  global.location = {port: 80, protocol: 'https:'};
const isDev = typeof __DEV__ === 'boolean' && __DEV__;
process.env['NODE_ENV'] = isDev ? 'development' : 'production';
if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : '';
}

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
require('crypto');
```

### Add shim.js to root App.tsx first line

```javascript
import './shim';
```

### import web3

```javascript
import Web3 from 'web3';

const web3 = new Web3(
  new Web3.providers.HttpProvider('ProviderAddress'),
);
```