import React, { useEffect, useRef, useState } from 'react';
import Explore from './Explore/Explore';
import Hero from './Hero/Hero';
import Web3Modal from 'web3modal';
import { providers } from 'ethers';

function All() {
  const [walletConnect, setWalletConnect] = useState(false);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);

      let { chainId } = await web3Provider.getNetwork();
      if (chainId !== 5) {
        window.alert('Please connect to Goerli');
      }

      if (needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider;
    } catch (e) {
      console.error(e);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnect(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!walletConnect) {
      web3ModalRef.current = new Web3Modal({
        network: 'goerli',
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnect]);

  return (
    <div>
      <Hero connectWallet={connectWallet}  walletConnect={walletConnect}/>
      <Explore />
    </div>
  );
}

export default All;