import Disappear from "./Disappear";
import Menu from "./Menu";
import MediaScreen from "./MediaScreen";
import eclipseGameLogo from "./images/eclipse/eclipse logo.png";
import eclipseGameplay1 from "./images/eclipse/img1.jpg";
import eclipseGameplay2 from "./images/eclipse/img2.jpg";
import eclipseGameplay3 from "./images/eclipse/img3.jpg";
import weapon from "./images/eclipse/weapon.jpg";
import spring from "./images/eclipse/spring.jpg";
import summer from "./images/eclipse/summer.png";
import autumn from "./images/eclipse/autumn.png";
import winter from "./images/eclipse/winter.jpg";

const Eclipse = () => {
    return (
        <div>
          <Disappear />
          <div className="page">
            <EclipseMain />
            <EclipseGameplay />
            <EclipseWeapons />
            <EclipseWorld />
            <MediaScreen />
          </div>
        </div>
      );
};

const EclipseMain = () => {
    return (
      <section id="eclipseMain" className="screen">
        <Menu menuType="menuBlack" />
        <div className="content">
            <img src={eclipseGameLogo} id = "eclipseGameLogo" alt="eclipseGameLogo"></img>
            <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer"><button className = "eclipseDownload">Graj za darmo</button></a>
        </div>
      </section>
    );
};

const EclipseGameplay = () => {
    return (
        <section id="eclipseGameplay" className="screen">
            <Menu menuType="menuWhite" />
            <div className="content">
                <h1>WARTKA AKCJA MMO/RPG</h1>
                <div>
                    <img src={eclipseGameplay1} alt="eclipseGameplay1"/>
                    <h3>JEDEN EWOULUJĄCY ŚWIAT</h3>
                    <p>Rozległy świat, który nieustannie powiększa się o nowe sezony, wydarzenia i dodatki, oferując graczom nowe wyzwania i kolekcję przedmiotów do zebrania.</p>
                </div>
                <div>
                    <img src={eclipseGameplay2} alt="eclipseGameplay2"/>
                    <h3>WSPÓŁPRACA CZY RYWALIZACJA</h3>
                    <p>Graj solo lub ze znajomymi, uczestnicząc w ekscytujących przygodach z rzadkimi i potężnymi nagrodami. Weź udział w szturmie jako samotny wilk lub w najeździe z drużyną ogniową. Pokonaj konkurencję w zaciętych potyczkach w trybie każdy na każdego i na dzikich drużynowych arenach.</p>
                </div>
                <div>
                    <img src={eclipseGameplay3} alt="eclipseGameplay3"/>
                    <h3>GRAJ PO SWOJEMU</h3>
                    <p>Wybierz najlepsze twoim zdaniem statystyki i zgromadź fantastyczną kolekcję broni, pancerzy i modyfikacji, dzięki którym spersonalizujesz swój styl walki.</p>
                </div>
            </div>
        </section>
    );
};

const EclipseWeapons = () => {
    return (
        <section id="eclipseWeapons" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <img src={weapon} alt="weapon"/>
                <h2>BROŃ I SPRZĘT</h2>
                <p>Modyfikuj elementy swoich broni i wyposażenia, <br />
                    tak aby odpowiadały one twojemu stylowi rozgrywki <br />
                    dzięki dziesiątkom broni, modyfikacji i elementów wyposażenia.</p>
            </div>
        </section>
    );
};

const EclipseWorld = () => {
    return (
        <section id="eclipseWorld" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <h2>DYNAMICZNIE ZMIENIAJĄCY SIĘ ŚWIAT</h2>
                <p>Regularne dodatki, wydarzenia i sezony powodują, że rozgrywka zawsze jest intensywna. <br />
                    Dodatkowo zmienne pory roku  urozmaicają rozgrywkę.</p>
                <div id = "images">
                    <img src={spring} alt="spring" />
                    <img src={summer} alt="summer" /><br />
                    <img src={autumn} alt="autumn" />
                    <img src={winter} alt="winter" />
                </div>
            </div>
        </section>
    );
};

export default Eclipse;