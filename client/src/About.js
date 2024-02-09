import Disappear from "./Disappear";
import Menu from "./Menu";
import MediaScreen from "./MediaScreen";
import icon from "./images/rapid/rapid icon.png"
import eclipseGameLogo from "./images/eclipse/eclipse logo.png"
import dreadborneGameLogo from "./images/dreadborne/dreadborne logo.png"

const About = () => {
    return (
        <div>
            <Disappear />
            <div className="page">
                <RapidTeam />
                <RapidGames />
                <MediaScreen />
            </div>
        </div>
      );
};

const RapidTeam = () => {
    return (
        <section id="rapidTeam" className="screen">
            <Menu menuType="menuWhite" />
            <div className="content">
            <img src={icon} alt="rapid icon.png"/>
                <div>
                    <h1>Ekipa Rapid Studio</h1>
                    <h3>Pasjonacki Zespół</h3>
                    <p>W Rapid Studio, naszą siłą napędową stanowi ekipa złożona z pasjonatów gier, 
                        którzy łączą różnorodne umiejętności, od projektowania gier po programowanie. 
                        Nasz zespół to nie tylko koleżeństwo pracy, to rodzina, 
                        w której wspieramy się nawzajem, czerpiąc z kreatywności każdego członka.</p>
                    <h3>Innowacyjna Wizja</h3>
                    <p>W naszym studiu, innowacja to kluczowa wartość. Dążymy do tworzenia gier, 
                        które wyróżniają się nowatorskim podejściem i zaskakują graczy. 
                        Otwarta komunikacja i współpraca w zespole są fundamentem naszych projektów, 
                        czyniąc Rapid Studio miejscem, gdzie pomysły mają realny wpływ.</p>
                    <h3>Życie i Pasja w Kodzie</h3>
                    <p>Nasze gry nie są jedynie wynikiem umiejętności programistycznych, 
                        ale także odzwierciedleniem naszej pasji i zaangażowania w każdą linijkę kodu.
                        Stawiamy na serce, które wkładamy w tworzenie każdej gry, 
                        co sprawia, że nasze projekty są pełne życia i emocji.</p>
                </div>
            </div>
        </section>
    );
};

const RapidGames = () => {
    return (
        <section id="rapidGames" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <div id="left">
                    <img src={eclipseGameLogo} id = "eclipseLogo" alt="eclipse logo.png" />
                    <img src={dreadborneGameLogo} id = "dreadborneLogo" alt="dreadborne logo.png" />
                </div>
                <div id="right">
                    <h1>Tworzymy z Pasją</h1>
                    <h3>Pasja Przekładająca się na Zaangażowanie</h3>
                    <p>Nie ograniczamy się do samej pracy nad projektami, 
                        ale przenosimy pasję do każdego elementu procesu twórczego, 
                        co przekłada się na wyjątkowe doświadczenia dla graczy. 
                        Każdy projekt w Rapid Studio to nie tylko praca, ale również spełnianie marzeń, 
                        co sprawia, że nasze gry mają autentyczność i osobisty wydźwięk.</p>
                    <h3>Gry, Które Budzą Emocje</h3>
                    <p>Nasze gry łączą wciągającą narrację z głębokim emocjonalnym doświadczeniem graczy, 
                        sprawiając, że stają się one nie tylko formą rozrywki, ale również podróżą przez różne uczucia. 
                        Naszym celem jest nie tylko dostarczanie rozrywki, lecz także rozwijanie społeczności graczy, 
                        dzięki czemu każdy, kto wchodzi w świat Rapid Studio, może odkryć coś nowego i inspirującego.</p>
                </div>
            </div>
        </section>
    );
};
export default About;