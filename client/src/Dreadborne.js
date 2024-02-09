import Disappear from "./Disappear";
import Menu from "./Menu";
import MediaScreen from "./MediaScreen";
import dreadborneGameLogo from "./images/dreadborne/dreadborne logo.png"
import castle from "./images/dreadborne/dreadborne castle.jpg"
import hunter from "./images/dreadborne/hunter.jpg"
import warlock from "./images/dreadborne/warlock.jpg"
import titan from "./images/dreadborne/titan.jpg"
import world from "./images/dreadborne/dreadborne world.jpg"


const Dreadborne = () => {
    return (
        <div>
          <Disappear />
          <div className="page">
            <DreadborneMain />
            <DreadborneGame />
            <DreadbornePlot />
            <DreadborneClasses />
            <DreadborneWorld />
            <DreadborneGameplay />
            <MediaScreen />
          </div>
        </div>
      );
};

const DreadborneMain = () => {
    return (
      <section id="dreadborneMain" className="screen">
        <Menu menuType="menuBlack" />
        <div className="content">
            <img src={dreadborneGameLogo} id = "dreadborneGameLogo" alt="dreadborne logo.png" />
            <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer"><button className= "dreadborneDownload">Kup teraz</button></a>
        </div>
      </section>
    );
};

const DreadborneGame = () => {
    return (
      <section id="dreadborneGame" className="screen">
        <Menu menuType="menuBlack" />
        <div className="content">
            <div>
                <h1>Dreadborne</h1>
                <p>Jeden z najbardziej utytułowanych RPG-ów wszech czasów! <br />
                    Gra doceniana przez krytyków i uwielbiana przez graczy</p>
            </div>
            <img src={castle} alt="dreadborne castle.jpg"/>
        </div>
      </section>
    );
};

const DreadbornePlot = () => {
    return (
      <section id="dreadbornePlot" className="screen">
            <Menu menuType="menuWhite" />
            <div className="content">
                <h1>Wciągająca fabuła na długie godziny</h1>
                <p>Wciągająca opowieść rozgrywająca się w mrocznym fantasy. <br />
                    Przeżyj przygodę w otwartym świecie, gdzie każda decyzja rysuje swoje własne losy.<br />
                    Knuj sojusze, staw czoła wrogom, a tajemnice świata inspirowanego <br />
                    ludowymi legendami same przed Tobą odsłonią. <br />
                    Zanurz się w niezwykłej podróży, gdzie magia splata się z niebezpieczeństwem, <br />
                    a twoje wybory kształtują nie tylko twoją historię, ale i losy całego świata.</p>
            </div>
        </section>
    );
};

const DreadborneClasses = () => {
    return (
      <section id="dreadborneClasses" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <h1>TRZY UNIKALNE KLASY</h1>
                <div id ="warlock">
                    <img src={warlock} alt="warlock.jpg" />
                    <h3>Czarownik</h3>
                    <p>Czarownicy wykorzystują tajemnice świata jako broń pomagającą im przetrwać i pokonać wrogów.</p>
                </div>
                <div id ="hunter">
                    <img src={hunter} alt="hunter.jpg" />
                    <h3>Łowca</h3>
                    <p>Poruszający się szybko i jeszcze szybciej dobywający broni Łowcy wytyczają własne szlaki i spisują swoje własne prawa.</p>
                </div>
                <div id ="titan">
                    <img src={titan} alt="titan.jpg" />
                    <h3>Tytan</h3>
                    <p>Zdyscyplinowani i dumni Tytani stają na czele walki, zaciekle atakując i skutecznie broniąc pozycji.</p>
                </div>
            </div>
        </section>
    );
};

const DreadborneWorld = () => {
    return (
      <section id="dreadborneWorld" className="screen">
            <Menu menuType="menuWhite" />
            <div className="content">
                <div>
                    <h1>Świat inspirowany folklorem</h1>
                    <p>Świat Dreadborne garściami czerpie z wierzeń ludowych z wielu zakądków świata.
                        Przemierzaj słowiańską Nawię i Wyraj, staw czoła nordyckim jotunom lub zapoluj na greckiego minotaura</p>
                </div>
                <img src={world} alt="dreadborne world.jpg"/>
            </div>
        </section>
    );
};

const DreadborneGameplay = () => {
    return (
      <section id="dreadborneGameplay" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <div>
                    <h1>Wciągająca rozgrywka</h1>
                    <p>Zanurkuj w świat gry, gdzie rozgrywka staje się sztuką!
                        Odkryj zaawansowane możliwości, gdzie każdy ruch jest kluczowy, 
                        a decyzje kształtują nie tylko twoje doświadczenia, ale i całą dynamikę gry.
                        To nie tylko gra - to intensywne doświadczenie, w którym Twoje umiejętności i wybory decydują o zwycięstwie. 
                        Przygotuj się na wciągającą rozgrywkę, gdzie każdy moment jest pełen emocji!</p>
                </div>
            </div>
        </section>
    );
};

export default Dreadborne;