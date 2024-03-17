import './App.css';
import Buynow from './components/Buynow.js';
import Cards from './components/Cards.js';
import Footer from './components/Footer.js';
import Hersosection from './components/Herosection.js';
import Logo from './components/Logo.js';
import Menwomen from './components/Menwomen.js';
import Navbar from './components/Navbar.js';
import Navbar2 from './components/Navbar2.js';
import Searchdata from './components/Searchdata.js';
import Searchform from './components/Searchform.js';

function App() {
  return (
    <div className="app">
      <div className='yellowsec'>
          <Navbar/>
          <Logo/>
          <Navbar2/>
          <Hersosection/>
          <Buynow/>
      </div>
      <div className='whitesec'>
       <Menwomen/>
       {/* <Cards/> */}
       {/* <Searchform/> */}
       <Searchdata/>
       <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
