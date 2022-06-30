import React from 'react';
import HomeHero from '../components/homepage/HomeHero';
import HomeSection1 from '../components/homepage/HomeSection1';
import HomeSection2 from '../components/homepage/HomeSection2';
import HomeSection3 from '../components/homepage/HomeSection3';
import HomeSection4 from '../components/homepage/HomeSection4';
import HomeSection5 from '../components/homepage/HomeSection5';



export default function PageHome() {
  return (
    <div className="">
       <HomeHero/>
       <HomeSection1/>
       <HomeSection2/>
       <HomeSection3/>
       <HomeSection4/>
       <HomeSection5/>

    </div>
  );
}

