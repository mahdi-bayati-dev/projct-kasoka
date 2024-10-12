import Header from './header/header'
import './App.css';
import HeaderMain from './header/heder_main/heder_main';
import About from './about/about';
import Slider from './slider-logo/slider-logo';
import Features from './features/features';


function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderMain/>
      <About/>
      <Slider/>
      <Features/>
      
      
      

    </div>
  );
}

export  default App;
