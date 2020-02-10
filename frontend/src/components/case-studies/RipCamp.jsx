import React from "react";
import FindByBounds from "../../assets/screenshots/ripcamp/rc-findbybounds.png";
import GetSurfSpots from "../../assets/screenshots/ripcamp/rc-getsurfspots.png";
import Search from "../../assets/screenshots/ripcamp/rc-search.png";
import Show from "../../assets/screenshots/ripcamp/rc-show.png";
import SignUp from "../../assets/screenshots/ripcamp/rc-signup.png";
import Splash from "../../assets/screenshots/ripcamp/rc-splash.png";
import Home from "../../assets/screenshots/ripcamp/rc-home.png";
import MoreProjects from "./MoreProjects";
import "../../stylesheets/case-studies/case-studies.css";
import "../../stylesheets/case-studies/ripcamp.css";

const RipCamp = () => {
  return (
    <div>
      <div id="ripcamp-wrapper" className="cs-wrapper">
        <div className="cs-nav" />
        <section className="cs-topper cs-white-container">
          <div className="vert-center">
            <section className="cs-topper-info">
              <header>RipCamp</header>
              <div>
                <p>Campbell Oleson</p>
                <div className="cs-links">
                  <a href="https://fish-hook.herokuapp.com/#/">Live</a>
                  <p>|</p>
                  <a href="https://github.com/CampbellOleson/fishhook">
                    GitHub
                  </a>
                </div>
                <p>August 2019</p>
              </div>
              <summary>
                I created a map-based surf locator website that allows users to
                find information on surf spots. RipCamp’s main purpose is to
                provide users with an intuitive, easy-to-use way to discover and
                explore new surf spots around the globe.
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
              During my software development course with App Academy, I was put
              in a team with two other students, and tasked with creating a
              full-stack web application. The purpose and implementation details
              of the website were up to us. My teammates and I were all surfing
              enthusiasts, so we came up with the idea of RipCamp: a
              one-stop-shop for planning your day of surfing.
            </article>
          </div>
        </div>

        <div className="hor-center">
          <div className="cs-textblock">
            <header>Planning</header>
            <article>
              Before we started architecting and designing RipCamp, we discussed
              the functionality that our website would include. We determined
              that the primary interface would consist of a map displaying the
              spots’ locations, and a list of quickshow items, allowing users to
              view specific information on each spot. Furthermore, we decided to
              include a search feature so users could locate particular spots.
              Finally, we decided to include a show page for every surf spot,
              displaying photos of the spot, as well as information about
              weather and surf conditions.
            </article>
            <article>
              My team and I wanted to make sure that our project stayed
              organized, so we used GitHub to manage version control. Before
              anyone merged a branch, we would come together and test the new
              feature to make sure that it integrated seamlessly with everything
              else. I also set up a Trello board to help my team divide and
              organize responsibilities for this project.
            </article>
          </div>
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <header>Features and Functionality</header>
            <article>
              We built RipCamp with NodeJS on the backend and MongoDB as the
              database. We chose MongoDB so we could easily store lots of
              unrelated records with minimal setup.
            </article>
            <article>
              We leveraged Redux to manage application state, and designed a
              responsive user interface with ReactJS. We also integrated Google
              Maps API for the map-based interface, Open Weather API for weather
              information, and AWS S3 Bucket for photo hosting.
            </article>
            <article className="cs-bmo">
              On the left hand side of RipCamp’s primary interface is the surf
              spots-index, complete with quickshow items that have names,
              descriptions, and scrolling photos. On the right hand side is the
              map, with surf-green pointers for the geographical location of
              each surf spot. The surf-spots index only displays the spots that
              are currently shown on the map. If you move the map around, the
              index will be updated in real time to display the surf spots that
              are within the map’s bounds.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin">
          <img src={Home} alt="Feed Screenshot" className="cs-img" />
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <article>
              I used JavaScript DOM manipulation to give this interface some
              eye-catching UI effects. If you hover your mouse over a surf spot
              on the map, the surf-spots index will automatically scroll to and
              highlight the corresponding quickshow item! This makes for smooth
              navigation and easy discovery of new surf spots.
            </article>
            <article className="cs-bmo">
              When a user clicks on a surf-spot quickshow item from the
              surf-spots index, they are redirected to a show page that displays
              local weather conditions and photos of the surf spot.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin">
          <img src={Show} alt="Feed Screenshot" className="cs-img" />
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <article className="cs-bmo">
              Users can search for a surf spot by name and find its show page,
              as well as its location on the map. Similarly, users can apply
              location-based filters to the search, which will recenter the map
              on the city that they choose.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin cs-bmo">
          <img src={Search} alt="Search Screenshot" className="cs-img" />
        </div>

        <div className="hor-center">
          <div className="cs-img-wrapper cs-img-margin">
            <img
              src={SignUp}
              alt="Signup Screenshot"
              className="cs-img-small"
            />
          </div>
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <header>Challenges</header>
            <article>
              The biggest development challenge on RipCamp was figuring how to
              query the database and update the application state in such a way
              that the surf-spots index always displays the surf spots on the
              map.
            </article>
            <article className="cs-bmo">
              The first few approaches to this problem that I came up with were
              roundabout and impractical, but I knew that there had to be a
              straightforward solution. Then, while looking through the docs of
              Google Maps API I realized that the Map object provides the
              latitude/longitude coordinates of each corner of the map. Using
              the northeast and southwest corners, I wrote a query to return all
              of the spots with coordinates within these ranges.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin">
          <img
            src={FindByBounds}
            alt="Feed Screenshot"
            className="cs-img-medium"
          />
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <article className="cs-bmo">
              Once I had my API serving up surf spots based on the map’s
              boundaries, I wrote Redux actions to modify my application state
              each time a new batch of surf spots comes in. After every “map
              rest” event (which is fired when you stop moving the map around),
              the application state clears out the surf spots that were
              previously displayed. Then, the frontend client requests more surf
              spots from my API, passing over the new bounds. Finally, the
              application state and frontend components are updated with the new
              data.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin">
          <img
            src={GetSurfSpots}
            alt="Feed Screenshot"
            className="cs-img-medium"
          />
        </div>

        <div className="hor-center">
          <div className="cs-textblock">
            <article>
              I ran into a few quirks with my boundaries-based query system. For
              example, if the map was centered over the prime meridian, the
              query wouldn’t return any surf spots, because the underlying logic
              would look for spots greater than the westmost longitude
              (somewhere around +180°) and less than the eastmost longitude
              (somewhere around -180°). Fortunately, there are no surf spots on
              the prime meridian, and I realized that by slightly zooming the
              map window I could ensure that the prime meridian is never on the
              map while a surf spot is on the map. This prevents the prime
              meridian from breaking my query and goes to show that sometimes
              complicated problems have simple solutions.
            </article>
          </div>
        </div>

        <div className="hor-center">
          <div className="cs-textblock">
            <header>Outcome</header>
            <article>
              The result of our work was a beautifully designed application with
              a responsive user interface, and a nuanced query system that
              integrated seamlessly with the architecture of our application
              state. These features culminated to empower users with an
              intuitive new way of discovering surf spots.
            </article>
            <article>
              Furthermore, this project was an invaluable learning experience
              for me. It taught me how to work with Google Maps API, how to
              design more responsive and visually interesting user interfaces,
              and how to engineer sophisticated systems for managing application
              state.
            </article>
          </div>
        </div>
      </div>
      <MoreProjects exclude="rc" />
    </div>
  );
};

export default RipCamp;
