import ScrollIntoView from 'react-scroll-into-view'
import Disappear from "./Disappear";
import Menu from "./Menu";
import JobOffers from './JobOffers';
import NewsletterForm from './NewsletterForm';
import MediaScreen from "./MediaScreen";

const Career = () => {
    return (
        <div>
          <Disappear />
          <div className="page">
            <Jobs />
            <Newsletter />
            <MediaScreen />
          </div>
        </div>
      );
};

const Jobs = () => {
    return (
        <section id="jobs" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <div id="left">
                    <h1>Dołącz do nas</h1>
                    <p>Wyślij nam swoje CV na <a href="mailto: rapidstudio@career.com">rapidstudio@career.com </a>
                        lub zapisz się do newslettera aby otrzymywać najnowsze informacje</p>
                        <ScrollIntoView selector="#newsletter">
                            <button id = "newsletterScroll">Zapisz się do newslettera</button>
                        </ScrollIntoView>
                </div>
                <div id="right">
                    <JobOffers />
                </div>
            </div>
        </section>
    );
};

const Newsletter = () => {
    return (
        <section id="newsletter" className="screen">
            <Menu menuType="menuBlack" />
            <div className="content">
                <h1>Bądź na bieżąco</h1>
                <NewsletterForm />
            </div>
        </section>
    );
};

export default Career;