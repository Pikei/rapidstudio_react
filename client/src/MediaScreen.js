import Menu from "./Menu";
import Links from "./Links";
import Locations from "./Locations";

const MediaScreen = () => {
  
    return (
      <section id="media" className="screen">
        <Menu menuType="menuWhite" />
        <div className="content">
          <Links />
          <Locations />
        </div>
      </section>
    );
};

export default MediaScreen;