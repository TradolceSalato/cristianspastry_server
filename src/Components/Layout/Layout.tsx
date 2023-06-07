import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './footer';
import NavBar from './navBar';

interface Props {
  children : {children : React.ReactNode};
}

function Layout({children,}: { children: React.ReactNode}) {
  
  useEffect(() => {
  }, [])
  
  const router = useRouter()
  
  return (
    <section>
      <Header/>
        <NavBar /> 
      {children}
      <Footer/>
    </section>
  );
}

export default Layout;