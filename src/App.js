import Header from './header/header'
import './App.css';
import HeaderMain from './header/heder_main/heder_main';
import About from './about/about';
import Slider from './slider-logo/slider-logo';
import Features from './features/features';
import Services from './Services/Services';
import Attraction from './call-of-attraction/Call-of-attraction';
import ExampleWork from './Example-of-work/Example';
import Introduction from './introduction/introduction';
import Testimonials from './testimonials/testimonials';
import Team from './team/team';
import ContactUs from './contact-us/contactUs';
import Footer from './footer/footer';


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
      <ExampleWork/>
      <Introduction/>
      <Testimonials/>
      <Team/>
      <ContactUs/>
      <Footer/>
      

      


    </div>
  );
}

export  default App;
