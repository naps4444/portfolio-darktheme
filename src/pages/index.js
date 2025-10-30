import Image from 'next/image';
import Navbar from './Navbar';
import HeroSection from './Hero';
import AboutMe from '../component/AboutMe';
import Works from '../component/Works';
import ParallaxText from '@/component/ParallaxText';
import Contact from '@/component/Contact';
import Footer from './Footer';


export default function Home() {
 

  return (
    <>
      <div className=''>

        <Navbar/>
        <HeroSection/>
        <section className='2xl:container mx-auto bg-[#E0E0E0] pb-2 pt-2'>
      <ParallaxText baseVelocity={-5}>Option  Full</ParallaxText>
      <ParallaxText baseVelocity={5}>Services  Web</ParallaxText>
    </section>
        <AboutMe/>
        <Works/>
        <Contact/>
        <Footer/>
        

       
        
      </div>
    </>
  );
}
