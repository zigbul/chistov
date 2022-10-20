import React from 'react';

import Hero from '../../Components/Hero';
import Advantages from '../../Components/Advantages';
import History from '../../Components/History';
import Holiday from '../../Components/Holiday';
import Reviews from '../../Components/Reviews';
import Gallery from '../../Components/Gallery';
import Reserve from '../../Components/Reserve';

const MainPage = () => {
  return (
    <article className="main">
      <Hero />
      <Advantages />
      <History />
      <Holiday />
      <Reviews />
      <Gallery />
      <Reserve />
    </article>
  );
};

export default MainPage;
