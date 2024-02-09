import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './style.css'; 
import Home from './Home';
import Eclipse from './Eclipse';
import Dreadborne from './Dreadborne';
import Career from './Career';
import About from './About';

const App = () => {
  
  return (
    <Router>
      <Routes>
      <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/home" element = {<Home/>} />
        <Route exact path = "/eclipse" element = {<Eclipse/>} />
        <Route exact path = "/dreadborne" element = {<Dreadborne/>} />
        <Route exact path = "/career" element = {<Career/>} />
        <Route exact path = "/about" element = {<About/>} />
      </Routes>
    </Router>
  )
};

export default App;
