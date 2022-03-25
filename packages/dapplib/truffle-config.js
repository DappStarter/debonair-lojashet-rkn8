require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remember mistake heavy argue sure slim'; 
let testAccounts = [
"0xc4c9e44b615952687dd8cc488e6f1688bc035b68966de0becafdc99c7151e2c7",
"0x099677fea5fdbb9761152667b5444f5649cb0d19f30aa2a742e457d41179b3bb",
"0x82f401d3e38f4198c91ea0892d72b33b31dc5c43a2d33ad51f0941d7accd1963",
"0x6c2ec3b8df34821c94aba31b1ad89370ec6346f3a06aca081837e8b1250d279c",
"0x046cb868615fd21657b2c429e3800688c99a6048e8d10ccf33f7f2eaa338af89",
"0x7a9fd3be63fcf04addc344bac6e08d1061f3d7b848be06c5d9184a04aba14661",
"0xa22f6614b3be71bd853c5c0534cb814bb7e04a7a6386e97c2832ae610e000086",
"0x6bb761ab71a8a720cf0a626813f3ad456054a317a05094b279785125275716c6",
"0xd68bccbbe9939c6626c7c5e577f7c15a96ccb5d68ef617d32ec89793001e76ed",
"0xa696abfe159ae916b032b89353f82e22b016c257d1d03be7ad459ebf3f10d1bd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

