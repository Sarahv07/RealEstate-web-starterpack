import Header from './components/Header/Header';
import Hero from'./components/hero/hero';
import './App.css'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
