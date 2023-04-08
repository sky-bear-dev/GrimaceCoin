import CustomHead from '@/components/CustomHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import TransitionEffect from '@/components/TransitionEffect'

import '@/styles/globals.css'
import styles from '@/styles/style.scss'

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>         
      <CustomHead />
      <div className='App'></div>
      <main>        
        <Header />
        <div className='content'>
          <TransitionEffect>
            <Component {...pageProps} />
          </TransitionEffect>
        </div>
        <Footer />
      </main>
    </>
  )    
}
