import Web3 from 'web3';

const web3Object =  {};

web3Object['checkProvider'] = () => {
    return window.web3 && window.web3.currentProvider ? window.web3.currentProvider : (Web3.givenProvider ? Web3.givenProvider : "http://localhost:8545");
};
web3Object['GlobalWeb3Object'] = new Web3(web3Object.checkProvider());

web3Object['getAccounts'] = async () => {
    try {
        let accounts = await web3Object.GlobalWeb3Object && web3Object.GlobalWeb3Object.eth.getAccounts();
        return accounts;
    }
    catch(err) {
        return err;
    }
};

export default web3Object;