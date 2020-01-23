import React from "react";
import Splash from "../../assets/screenshots/fishhook/fh-splash.png";
import Search from "../../assets/screenshots/fishhook/fh-search.png";
import Requests from "../../assets/screenshots/fishhook/fh-requests.png";
import Feed from "../../assets/screenshots/fishhook/fh-feed.png";
import Friends from "../../assets/screenshots/fishhook/fh-friends.png";
import UserFeed from "../../assets/screenshots/fishhook/fh-userfeed.png";
import Update from "../../assets/screenshots/fishhook/fh-update.png";
import Create from "../../assets/screenshots/fishhook/fh-create.png";
import "../../stylesheets/case-studies/case-studies.css";
import "../../stylesheets/case-studies/fishhook.css";

const Fishhook = () => {
  return (
    <div id="fishhook-wrapper" className="cs-wrapper">
      <div className="cs-nav" />
      <section className="cs-topper cs-white-container">
        <div className="vert-center">
          <section className="cs-topper-info">
            <header>Fishhook</header>
            <div>
              <p>Campbell Oleson</p>
              <p>July 2019</p>
            </div>
            <summary>
              I engineered a social media site specifically tailored for the
              fishing community. The primary goal of this website is to give
              fishing enthusiasts an online platform where they can connect with
              one another, share their best catches, and discover new fishing
              spots.
            </summary>
          </section>
        </div>
        <div className="vert-center">
          <div id="catch-img" />
        </div>
      </section>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={Splash} alt="Splash Page Screenshot" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Assignment</header>
          <article>
            During the later portion of my full-stack web development course
            with App Academy, I was tasked with single-handedly creating a
            full-stack web application, the purpose of which was my choosing.
            Considering the prevalence of fishing-themed Facebook groups, and
            the fact that I myself am an avid fly-fisher, I decided to create a
            social media platform specifically for people who love to fish (and
            talk about it).
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Planning</header>
          <article>
            First and foremost, Fishhook had to provide a way for users to find
            and connect with one another. Secondly, users needed to be able to
            personalize their account and post content for their Fishhook
            friends to see. Lastly, I planned to add functionality that would
            allow users to share fishing spots with their friends leveraging
            Google Maps API.
          </article>

          <article>
            Before I started developing Fishhook, I sat down and sketched out
            the backend architecture of my app, as well as all the frontend
            views that it would include. I didn’t have much time for this
            project, so after my pen-and-paper wireframes were complete, I began
            developing.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Features and Functionality</header>
          <article>
            I implemented Fishhook using Ruby on Rails for the backend and
            PostgreSQL for the database. This way, I could leverage Rails’s
            convention-over-configuration philosophy for quick development, and
            SQL to manage relationships between different entities in my
            database, such as users, friend requests, and posts. I used Postman
            to test my backend API before moving on.
          </article>
          <article>
            On the frontend, I leveraged Redux to manage application state, and
            ReactJS to create a responsive user interface. I employed AJAX to
            send asynchronous requests to my backend API.
          </article>
          <article>
            Users of Fishhook can search other users and friend-request them. If
            you want to friend-request a user, you can do so by navigating to
            their profile page and clicking the “Add Friend” button. Incoming
            friend requests can be viewed in a dropdown modal. You can accept an
            incoming friend request, or delete it.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-small-wrapper cs-img-margin">
          <img src={Search} alt="Search Screenshot" className="cs-img-small" />
          <img
            src={Requests}
            alt="Requests Modal Screenshot"
            className="cs-img-small"
          />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            Once you’ve befriended a user, you can see their posts in the “Feed”
            component of the app. You can also navigate to a user’s profile page
            and see all the content that they have posted. Similarly, you can
            view a user’s friends on their profile page by clicking on the
            “Friends” tab.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-small-wrapper cs-img-margin">
          <img
            src={UserFeed}
            alt="User Feed Screenshot"
            className="cs-img-small"
          />
          <img
            src={Friends}
            alt="Friends Screenshot"
            className="cs-img-small"
          />
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin" >
        <img src={Feed} alt="Feed Screenshot" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Challenges</header>
          <article>
            Developing Fishhook presented me with a variety of challenges as a
            new developer. The first problem I ran into was how to create
            “friend-requests” between users, that, when accepted, would
            associate the users and allow them to see each other's content.
          </article>
          <article className="cs-bmo">
            I got around this by creating a “requests” joins table using Ruby on
            Rails ORM. The table had columns for the “requester_id”, the
            “requested_id”, and a boolean status field indicating whether or not
            the request had been accepted. Users create entries in this table
            when they issue a friend request. Once the receiving user accepts
            the request, the status field is updated, and the entry becomes an
            association between the users.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-small-wrapper cs-img-margin">
          <img src={Create} alt="Create snippet" className="cs-img-small" />
          <img src={Update} alt="Update snippet" className="cs-img-small" />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <article>
            I also ran into difficult bugs in this project, the most frustrating
            of which was an error in one of my Redux reducers. I had a
            JavaScript Object storing arrays. When I tried to copy this object
            into the updated application state, I used Object.assign(), which
            created a shallow copy, and preserved the object ids of the arrays
            inside.
          </article>
          <article>
            I spent hours searching for the cause of the unexpected behavior
            that ensued. Finally, when logging my application state changes with
            Chrome DevTools, I noticed that the contents of the arrays from
            previous state changes retroactively updated with each new state
            change. The “old arrays” would update to have the same contents as
            the “new arrays”. This pointed me towards the source of the problem,
            and taught me a valuable lesson about object identity in JavaScript.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Conclusion</header>
          <article>
            Fishhook was my first full-stack project at App Academy, and my
            first real venture into software development. It’s important to note
            that this project served as an educational experience for me. Not
            everything about the app is production quality, and there are still
            plenty of aspects for me to improve upon.
          </article>
          <article>
            I plan to continue to work on Fishhook to improve the user
            interface, make the layout more responsive to different device
            sizes, and add the rest of the functionality that I included in the
            blueprints. All things considered, Fishhook turned out to be an
            excellent learning experience, and gave me a strong sense of the
            fundamentals of web development.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Fishhook;
