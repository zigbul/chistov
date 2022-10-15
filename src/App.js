import './App.css';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Advantages from './Components/Advantages';
import History from './Components/History';
import Holiday from './Components/Holiday';
import Reviews from './Components/Reviews';
import Gallery from './Components/Gallery';
import Menu from './Components/Menu';
import Reserve from './Components/Reserve';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <article className="main">
        <Hero />
        <Advantages />
        <History />
        <Holiday />
        <Reviews />
        <Gallery />
        <Menu />
        <Reserve />
      </article>
      <Footer />
    </div>
  );
}

export default App;
