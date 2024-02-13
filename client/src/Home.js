import { Link } from "react-router-dom";
import Disappear from "./Disappear";
import Menu from "./Menu";
import eclipseGameLogo from "./images/eclipse/eclipse logo.png"
import dreadborneGameLogo from "./images/dreadborne/dreadborne logo.png"
import MediaScreen from "./MediaScreen";

const Home = () => {
    return (
        <div>
          <Disappear />
          <div className="page">
            <EclipseScreen />
            <DreadborneScreen />
            <TeamScreen />
            <MediaScreen />
          </div>
        </div>
      );
};

const EclipseScreen = () => {
    return (
      <section id="eclipse" className="screen">
        <Menu menuType="menuBlack" />
        <div className="content">
          <div className="left">
            <p>
              Osadzona w świecie 30 lat po wojnie nuklearnej gra z elementami multiplayer, <br />
              gdzie musisz uważać zarówno na mordercze promieniowanie ale również na innych ludzi.
            </p>
          </div>
          <div className="right">
            <img src={eclipseGameLogo} id="eclipseGameLogo" alt="Eclipse Logo" />
            <Link to ="/eclipse">
              <button type="button" className="eclipseLearnMore">Dowiedz się więcej</button>
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  const DreadborneScreen = () => {
    return (
      <section id="dreadborne" className="screen">
        <Menu menuType="menuWhite" />
        <div className="content">
          <div className="left">
            <img src={dreadborneGameLogo} id="dreadborneGameLogo" alt="Dreadborne Logo" />
            <Link to ="/dreadborne">
              <button type="button" className="dreadborneLearnMore">Dowiedz się więcej</button>
            </Link>
          </div>
          <div className="right">
            <p>
              Wielokrotnie nagradzana gra RPG z otwartym światem w klimatach dark fantasy, <br />
              w której każdy wybór niesie za sobą konsekwencje.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  const TeamScreen = () => {
    return (
      <section id="team" className="screen">
        <Menu menuType="menuBlack" />
        <div className="content">
          <h1>POZNAJ NAS</h1>
          <Link to ="/about">
            <button className="about">Kim jesteśmy</button>
          </Link>
          <Link to ="/career">
            <button className="career">Kariera</button>
          </Link>
        </div>
      </section>
    );
  };

  export default Home