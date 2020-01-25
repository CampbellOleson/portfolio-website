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
              <div className="cs-links">
                <a href="https://fish-hook.herokuapp.com/#/">Live</a>
                <p>|</p>
                <a href="https://github.com/CampbellOleson/fishhook">GitHub</a>
              </div>
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
            During the later portion of my software development course with App
            Academy, I was tasked with creating a full-stack web application.
            The purpose and implementation details of the website were up to me
            to figure out. I noticed an abundance of fishing-themed Facebook
            groups, and I myself am an avid fly-fisher, so for my project I
            decided to create a social media platform specifically designed for
            people who love to fish (and post about it online).
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Planning</header>
          <article>
            When I set out to design and architect Fishhook, I began by
            determining the core functionality that it would need to include.
            Fishhook would have to provide a way for users to find and connect
            with one another. Furthermore, Fishhook users would need to be able
            to personalize their account and post content for their friends to
            see. It sounded simple in the early stages, but as I delved further
            into it, I determined that my app would need user entities with
            associated post entities, a friend requests system, a search
            component, profile page components, feed components, and much more.
          </article>
          <article>
            Before I started writing any code, I sketched out the backend
            architecture of my app, as well as all the frontend views that it
            would include. App Academy gave me a stringent time limit for the
            completion of this assignment, so after my pen-and-paper wireframes
            were complete, I began developing.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Features and Functionality</header>
          <article>
            I implemented Fishhook using Ruby on Rails for the backend and
            PostgreSQL for the database. I chose this stack so I could leverage
            Rails’s convention-over-configuration philosophy for quick
            development and SQL to manage relationships between different
            entities in my database. I then tested my backend API using Postman
            before moving on.
          </article>
          <article>
            On the frontend, I used Redux to manage application state and
            ReactJS to create a responsive user interface. I employed AJAX to
            send asynchronous requests to my backend API.
          </article>
          <article className="cs-bmo">
            Users of Fishhook can search for other users and friend-request
            them. To friend-request a user, navigate to their profile page and
            clicking the “Add Friend” button. Incoming friend requests are found
            in a dropdown modal attached to the top nav. Users can accept
            incoming friend requests, or delete them.
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
            Once you’ve befriended a user, their posts can be found in the
            “Feed” component of the app. Navigate to a user’s profile page to
            see all the content that they have posted. Similarly, to see a
            user’s friends, navigate to their profile page and click on the
            “friends” tab.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-small-wrapper cs-img-margin cs-bmo">
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

      <div className="cs-img-wrapper cs-img-margin">
        <img src={Feed} alt="Feed Screenshot" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Challenges</header>
          <article>
            Developing Fishhook presented me with a variety of challenges as a
            new programmer. The first challenge I came across was how to create
            “friend-requests” between users that would associate the users as
            “friends” when accepted and allow them to see each other's posts.
          </article>
          <article className="cs-bmo">
            I overcame this by creating a “requests” joins table using Ruby on
            Rails ORM. The table has columns for the “requester_id”, the
            “requested_id”, and a boolean status field indicating whether or not
            the request had been accepted. The friendships controller creates an
            entry in this table whenever a user sends a friend request. Once the
            receiving user accepts the request, the status field is updated, and
            the entry becomes a “friends” association between the users.
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
            I ran into a few difficult bugs in this project, the most
            frustrating of which was an error in one of my Redux reducers. I had
            a JavaScript Object storing arrays. When I tried to copy this object
            into the updated application state, I used Object.assign(), which
            created a shallow copy, and preserved the object ids of the arrays
            inside.
          </article>
          <article>
            I spent hours searching for the cause of the unexpected behavior
            that followed. Finally, when logging my application state changes
            with Chrome DevTools, I noticed that the contents of the arrays from
            previous state changes retroactively updated with each new state
            change. The “old arrays” would update to have the same contents as
            the “new arrays”. This pointed me towards the source of the problem,
            and taught me a valuable lesson about object identity in JavaScript.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Outcome</header>
          <article>
            Fishhook was my first full-stack project at App Academy, and my
            first real venture into software development. It’s important to note
            that this project served as an educational experience for me. Not
            every aspect of this app is production quality, and there are still
            plenty of features for me to improve upon.
          </article>
          <article>
            I plan to continue to work on Fishhook to improve the user
            interface, make the layout more responsive to different device
            sizes, and add some more functionality. All things considered,
            Fishhook turned out to be an excellent learning experience, and gave
            me a strong sense of the fundamentals of web development.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Fishhook;
