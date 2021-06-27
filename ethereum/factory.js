import web3 from './web3';

import Factory from './build/Factory.json'

const instance = new web3.eth.Contract(
  JSON.parse(JSON.stringify(Factory.abi)),
  '0x9da298A19494a4dDd015894E04FDeF2174e3c87d'
);

export default instance;

