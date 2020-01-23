import React from "react";
import Snippet from "../../assets/screenshots/ripcamp/rc-findbybounds.png";
import Search from "../../assets/screenshots/ripcamp/rc-search.png";
import Show from "../../assets/screenshots/ripcamp/rc-show.png";
import SignUp from "../../assets/screenshots/ripcamp/rc-signup.png";
import Splash from "../../assets/screenshots/ripcamp/rc-splash.png";
import Home from "../../assets/screenshots/ripcamp/rc-home.png";
import "../../stylesheets/case-studies/case-studies.css";
import "../../stylesheets/case-studies/ripcamp.css";

const RipCamp = () => {
  return (
    <div id="ripcamp-wrapper" className="cs-wrapper">
      <div className="cs-nav" />
      <section className="cs-topper cs-white-container">
        <div className="vert-center">
          <section className="cs-topper-info">
            <header>RipCamp</header>
            <div>
              <p>Campbell Oleson</p>
              <p>August 2019</p>
            </div>
            <summary>
              I created a map-based surf locator website that allows users to
              find surf spots around the globe. RipCamp’s primary purpose is to
              connect people with the surf.
            </summary>
          </section>
        </div>
        <div className="vert-bottom">
          <div id="rc-map-img" />
        </div>
      </section>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={Splash} alt="RipCamp Splash Page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Assignment</header>
          <article>
            During the later portion of my full-stack web development course
            with App Academy, two other students and I were tasked with
            designing and creating a full-stack web application. Being surfing
            enthusiasts, we came up with the idea of RipCamp: a one-stop-shop
            for planning your day of surfing.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Planning</header>
          <article>
            Before beginning on RipCamp, my team and I planned out the
            architecture of the app. We determined that the primary interface
            would consist of a map and a surf-spots index, allowing users to get
            information on a surf spots while simultaneously viewing the spots’
            geographical locations on the map. Furthermore, RipCamp would need
            to include a search feature so users could locate particular spots.
            Finally, we decided to include a show page for every surf spot,
            displaying photos of the spot, as well as information about weather
            and surf conditions.
          </article>

          <article>
            I like to make sure that the projects I work on are organized to
            make sure that there are no conflicts between features. On this
            project, my team and I used GitHub to manage version control and
            Trello to divvy out responsibilities.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Features and Functionality</header>
          <article>
            We engineered RipCamp with NodeJS on the backend and MongoDB as the
            database. We chose MongoDB so we could easily store lots of
            unrelated records with minimal setup.
          </article>
          <article>
            We used Redux to manage application state, and designed a responsive
            user interface using ReactJS. We also integrated Google Maps API for
            the maps-based interface, Open Weather API for weather conditions,
            and AWS S3 Bucket for photo hosting.
          </article>
          <article>
            RipCamp’s home page consists of a map-based interface on the right,
            enabling users to view the geographical location of surf spots, and
            a list of surf spots on the left, complete with quickshow items that
            have names, descriptions, and scrolling photos.
          </article>
          <article>
            I used JavaScript DOM manipulation here for some cool UI effects.
            For example, if you hover your mouse over a surf spot on the map,
            the list will automatically scroll to and highlight the
            corresponding quickshow. This makes for smooth navigation and easy
            discovery of surf spots!
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin">
        <img src={Home} alt="Feed Screenshot" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            If you click on a surf-spot quickshow item from the list, you will
            be redirected to a surf-spot show page, where you can view photos of
            the spot and see the local weather conditions.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin">
        <img src={Show} alt="Feed Screenshot" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            You can also search the name of your favorite surf spot and find its
            show page, as well as its location on the map. Similarly, you can
            apply location-based filters to your search, which will recenter the
            map on a city of your choosing.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin">
        <img src={Search} alt="Feed Screenshot" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article>
            RipCamp’s interface uses the boundaries of the map to query the
            database for surf spots. This allows users to scroll around the map
            and see surf spots pop up all over the world! The surf-spots index
            will also change to reflect whatever spots are currently being
            displayed on the map.
          </article>
          <article>
            Overall, we produced a fluid map-based UI that allows users to
            easily navigate the globe and find information about different surf
            spots. Currently, RipCamp’s database only has seed data, but once it
            is populated with real surf-spot information, it will prove useful
            to surfers everywhere.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-wrapper cs-img-margin">
          <img src={SignUp} alt="Feed Screenshot" className="cs-img-small" />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Challenges</header>
          <article className="cs-bmo">
            The biggest development challenge on RipCamp was figuring how to
            make the surf-spots list display the spots that were currently
            within the boundaries of the map (and only those spots). While
            digging through the docs of Google Maps API, I determined that we
            could use the bounds from the map to query the database for surf
            spots. I used a JavaScript Regex library to write queries to
            retrieve all the surf spots with coordinates falling within the
            range of the bounds.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-wrapper cs-img-margin">
          <img src={Snippet} alt="Feed Screenshot" className="cs-img-small" />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Conclusion</header>
          <article>
            It’s important to note that this project was for educational
            purposes. There are still elements that could be improved, and not
            every feature is production quality. RipCamp will need quite a bit
            of optimization before it’s ready for a real user base. Nonetheless,
            building RipCamp was a great experience, and it taught me a lot
            about JavaScript DOM manipulation, application state, and
            integrating external APIs.
          </article>
          <article>Another conclusion paragraph</article>
        </div>
      </div>
    </div>
  );
};

export default RipCamp;
