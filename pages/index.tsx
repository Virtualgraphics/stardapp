import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import type { NextPage } from 'next';
import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import Modal from '@/components/modules/particles';

const HomePage: NextPage = () => {
  return (
  
    
    <Default pageName="SKY GODZ-We Were Never Alone">

    <Home />
  

    </Default>
  



  );
};


export default HomePage;
