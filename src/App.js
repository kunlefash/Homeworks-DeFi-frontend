import React from 'react';
import './App.css';
import Web3Info from './components/web3Info.js';
import { useWeb3 } from '@openzeppelin/network/react';

const infuraProjectId = '95202223388e49f48b423ea50a70e336';

function App() {

  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;

  return (
    <div className="App">
      <div>
        <h1>OpenZeppelin Network.js</h1>
        <div>Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}</div>
        <div>Provider: {providerName}</div>
      </div>
    </div>
  );
}

export default App;