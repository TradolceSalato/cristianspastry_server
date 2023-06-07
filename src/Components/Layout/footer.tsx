import Link from "next/link";



const Footer = () => {
    return (
    <>
      <footer className={'text-black fixed left-0 bottom-0 w-full text-center'}>
       Copyright © 2023 {" Creato Da "} <Link href={"#social-nettworks"}>{"Cristian Sorrentino"}</Link>.
    </footer>
      </>
    );
   }

   export default Footer;