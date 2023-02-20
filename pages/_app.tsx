import '@/styles/globals.css'
import '@/styles/slider.css';
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (

  
    <ThirdwebProvider activeChain="mumbai">   
          <Component {...pageProps} />
          </ThirdwebProvider> 
  
  );
};

export default MyApp;