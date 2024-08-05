import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Footer from './components/Footer';
import Header from './components/Header'
import HeroCaption from './components/herocaption/HeroCaption';
import HeroFooter from './components/herocaption/HeroFooter';
import MainPage from './components/mainpage/MainPage';
import ListRotator from './components/works/ListRotator';
import OurStudio from './components/works/OurStudio';

function App() {
  return (
    <div>
      <Cursor />
      <Header />
      <HeroCaption />
      <HeroFooter />
      <MainPage />
      <ListRotator />
      <Contact />
      <OurStudio />
      <Footer />
    </div>
  );
}

export default App;
