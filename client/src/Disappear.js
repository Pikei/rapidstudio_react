import React, { useEffect } from 'react';
import blackLogo from './images/rapid/logo rapid czarne.png'


const Disappear = () => {
  useEffect(() => {
    const disappear = () => {
      const section = document.querySelector("#disappearingLogo");
      section.innerHTML = `<img id="disappearingLogoIMG" src="${blackLogo}" alt="Logo"></img>`;
      section.scrollIntoView({ behavior: 'smooth' });
  
      const main = document.querySelector(".page");
      const logo = document.querySelector("#disappearingLogoIMG");
  
      logo.addEventListener("animationend", () => {
        main.scrollIntoView({ behavior: 'smooth' });
      });
    };

    disappear(); // Wywołanie funkcji disappear podczas montowania komponentu
  }, []); // Pusta tablica dependency oznacza, że ten efekt zostanie uruchomiony tylko raz, po pierwszym renderowaniu

  return (
    <div id="disappearingLogo">
      <img id="disappearingLogoIMG" src={blackLogo} alt="Logo"></img>
    </div>
  );
};

export default Disappear;
