import { Link } from "react-router-dom";
import whiteLogo from './images/rapid/logo rapid białe.png'
import blackLogo from './images/rapid/logo rapid czarne.png'

const Menu = ({ menuType }) => {
    const menuColor = menuType === 'menuWhite';
  
    const renderMenu = () => {
      if (menuColor) {
        return menuWhite();
      } else {
        return menuBlack();
      }
    };

    return (
          renderMenu()
    );
};


const menuWhite = () => {
    return (
        <header className="menuWhite">
            <Link to="/home">
                <button type="button" className="home" id="MWhome">
                    <img src={whiteLogo} id="MWimgmain" alt="logo rapid białe.png"></img>
                    <img src={blackLogo} id="MWimghover" alt="logo rapid czarne.png"></img>
                </button>
            </Link>
            <div className="dopdownWhite">
                <button type="button" className="games">Nasze gry</button>
                <div className="dropdownWhiteContent">
                    <Link to ="/eclipse">
                        <button type="button" className="eclipseLearnMore">Eclipse</button>
                    </Link>
                    <Link to ="/dreadborne">
                        <button type="button" className="dreadborneLearnMore">Dreadborne</button>
                    </Link>
                </div>
            </div>
            <Link to ="/about">
                <button type="button" className="about">O nas</button>
            </Link>
            <Link to ="/career">
                <button type="button" className="career">Kariera</button>
            </Link>
        </header>
    );
};

const menuBlack = () => {
    return (
        <header className="menuBlack">
            <Link to="/home">
                <button type="button" className="home" id="MBhome">
                    <img src={blackLogo} id="MBimgmain" alt="logo rapid czarne.png"></img>
                    <img src={whiteLogo} id="MBimghover" alt="logo rapid białe.png"></img>
                </button>
            </Link>
            <div className="dopdownBlack">
                <button type="button" className="games">Nasze gry</button>
                <div className="dropdownBlackContent">
                    <Link to ="/eclipse">
                        <button type="button" className="eclipseLearnMore">Eclipse</button>
                    </Link>
                    <Link to ="/dreadborne">
                        <button type="button" className="dreadborneLearnMore">Dreadborne</button>
                    </Link>
                </div>
            </div>
            <Link to ="/about">
                <button type="button" className="about">O nas</button>
            </Link>
            <Link to ="/career">
                <button type="button" className="career">Kariera</button>
            </Link>
        </header>
    );
};

export default Menu;