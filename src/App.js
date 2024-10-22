import Header from './header/header'
import './App.css';
import HeaderMain from './header/heder_main/heder_main';
import About from './about/about';
import Slider from './slider-logo/slider-logo';
import Features from './features/features';
import Services from './Services/Services';
import Attraction from './call-of-attraction/Call-of-attraction';


function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderMain/>
      <About/>
      <Slider/>
      <Features/>
      <Services/>
      <Attraction/>


    </div>
  );
}

export  default App;
