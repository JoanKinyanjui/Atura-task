import React from 'react';
import './Navbar.css';
import {IoWalletOutline} from 'react-icons/io5'

function Navbar({connectWallet,walletConnect}) {
  return (
<div className='Navbar'>
        
<div className='flex h-full justify-between items-center w-10/12 md:w-5/6 place-content-center mx-auto'>
<div>   
     <img src='https://netstorm-react.theme-land.com/img/logo.png' className='logo-img'/>
   </div>
   <div > 
     <button className=' wallet-connect flex justify-between items-center '  onClick={connectWallet} ><IoWalletOutline  className='text-lg md:text-2xl'/> <p>{walletConnect ? "Connected" : "Connect Wallet"}</p></button> 
   </div>
</div>

</div>
  )
}

export default Navbar