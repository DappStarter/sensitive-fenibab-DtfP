require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net proud grace infant flat sell'; 
let testAccounts = [
"0xa8ca57c61140a3d87e9b2b64faae3a3e180ddd85a644c953eb642c5ef2c0e764",
"0xc873acb5f019f08cd5e811f25b39bbe6430a576ce64dbf30dd0e9f1cb3c250f8",
"0x2c0f4255803beab0b08577aad7000dd5e2e51d960f25cde4022522df7ece544e",
"0x0df4e2e0356cf38d9f72e998b1fdde1a7456f70531d1a8eabe35bd20c4d412bf",
"0x8f336144d9d79745a4cd827d18107618b1675d6a44a8449795aeb563a7ca7954",
"0x7e361f4e8f81eb40d0a0947a9c6e6335687a363e9505c1ebf7308c32d345f7b8",
"0xccadf154a0acd301abd8fc3807a61cb04ff8e30c22ade1bde4008e8cbfe45462",
"0x17b6cef0573e157bfaf568fd19723476836f78366c2fa9575a36535a721a2f46",
"0xb8d76f867a4c7b8b596cdbf276e7c0efb6c71d5d1541d584d32256e8b7053311",
"0xe6669c13aab27b4cb30ec42e06e74cd33713230fc46328f9401dd6391537c80c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


