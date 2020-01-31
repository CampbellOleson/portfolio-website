import React from "react";
import Choose from "../../assets/screenshots/ampcamp/ac-choose.png";
import AlbumShow from "../../assets/screenshots/ampcamp/ac-albumshow.png";
import Profile from "../../assets/screenshots/ampcamp/ac-profile.png";
import Search from "../../assets/screenshots/ampcamp/ac-search.png";
import SignUp from "../../assets/screenshots/ampcamp/ac-signup.png";
import Upload from "../../assets/screenshots/ampcamp/ac-upload.png";
import Home from "../../assets/screenshots/ampcamp/ac-home.png";
import UploadLoop from "../../assets/screenshots/ampcamp/ac-uploadloop.png";
import UploadError from "../../assets/screenshots/ampcamp/ac-uploaderror.png";
import "../../stylesheets/case-studies/case-studies.css";
import "../../stylesheets/case-studies/ampcamp.css";

const AmpCamp = () => {
  return (
    <div id="ampcamp-wrapper" className="cs-wrapper">
      <div className="cs-nav" />
      <section className="cs-topper cs-white-container">
        <div className="vert-center">
          <section className="cs-topper-info">
            <header>AmpCamp</header>
            <div>
              <p>Campbell Oleson</p>
              <div className="cs-links">
                <a href="https://fish-hook.herokuapp.com/#/">Live</a>
                <p>|</p>
                <a href="https://github.com/CampbellOleson/fishhook">GitHub</a>
              </div>
              <p>September 2019</p>
            </div>
            <summary>
              I built a music-sharing website that allows users to upload,
              download, and stream songs and albums. AmpCamp’s main purpose is
              to empower musicians to easily share their music with others, and
              to give listeners a way to discover new music.
            </summary>
          </section>
        </div>
        <div className="vert-bottom">
          <div id="ac-topper-img" />
        </div>
      </section>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={Home} alt="AmpCamp Home Page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Assignment</header>
          <article>
            AmpCamp is the third full-stack web application that I built while
            studying at App Academy. I worked on this project with two other
            students from my cohort. Like myself, one of my teammates was a
            musician, so we figured that a music streaming service was the
            perfect project to take on.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Planning</header>
          <article>
            Before we began development, my team and I laid out our vision for
            AmpCamp. We determined that AmpCamp should provide listeners with an
            easy way to discover new music. We also wanted our website to cater
            to burgeoning musicians, so we chose to integrate a user-friendly
            way to upload albums.
          </article>
          <article>
            We decided that our AmpCamp’s core features would include a home
            page for discovering music, an artist profile page, an album show
            page, an album upload page, and a search feature for finding
            artists, albums, and songs.
          </article>
          <article>
            Before we started writing code, my team and I laid out the
            architecture for the backend API and application state of our
            website. Finally, we created wireframe prototypes for the frontend
            views that our app would include.
          </article>
          <article>
            As with my other projects, my team and I used GitHub to manage
            version control. Before anyone merged a branch, we would come
            together and test the new feature to make sure that it integrated
            seamlessly with everything else. I also set up a Trello board to
            help my team divide and organize responsibilities for this project.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Features and Functionality</header>
          <article>
            We built AmpCamp with NodeJS on the backend and MongoDB as the
            database. We chose MongoDB because we knew that most of our data
            would be non-relational, and we wanted to get started with minimal
            setup.
          </article>
          <article>
            On the frontend, we leveraged ReactJS for the user interface and
            Apollo GraphQL to send requests to our backend API. We also
            integrated Amazon Web Services S3 Bucket for hosting photos and
            audio files.
          </article>
          <article className="cs-bmo">
            The homepage of AmpCamp enables users to discover new music via
            “AmpCamp Daily Picks”, which is a scrolling banner list of album
            recommendations. On the homepage, users can also search for artists,
            albums, and songs. When you mouseover an album on the homepage, a
            play pause button appears and allows you to start listening to the
            album.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={Search} alt="AmpCamp Home Page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            On an artist’s profile page, you can view all of the albums and
            songs that an artist has released. Clicking on an album will
            redirect you to the album show page that displays all the album’s
            songs. Users listen to songs by clicking on song index items in the
            list. When listening to a particular song, you can see the song
            name, artist name, and album cover art displayed on the audio
            playbar at the bottom of the screen.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo cs-bmo">
        <img src={Profile} alt="AmpCamp profile page" className="cs-img" />
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={AlbumShow} alt="AmpCamp show page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            I designed a responsive album-upload interface leveraging ReactJS
            that constructs an “album preview” in real time using the album
            information entered by the user. This allows artists to make sure
            that every aspect of their album fits together seamlessly before
            uploading it.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={Upload} alt="AmpCamp upload page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            <article>
              The album-upload component of AmpCamp asynchronously uploads the
              audio files to AWS S3 Bucket, before saving the collection of
              songs with their respective audio URLs to the database.
            </article>
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-wrapper cs-img-margin">
          <img
            src={UploadLoop}
            alt="Upload loop screenshot"
            className="cs-img-medium"
          />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-small-wrapper cs-img-margin">
          <img src={Choose} alt="Search Screenshot" className="cs-img-small" />
          <img
            src={SignUp}
            alt="Requests Modal Screenshot"
            className="cs-img-small"
          />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Challenges</header>
          <article>
            Creating AmpCamp’s album upload page challenged me to consider the
            importance of good error handling in regards to user experience.
            Initially, I had my website redirect to the artist show page
            immediately after an artist submitted an album. Occasionally, albums
            would fail to upload to AWS S3 Bucket part of the way through,
            leaving the artist with a semi-uploaded album.
          </article>
          <article>
            I improved the user experience of this feature by making it so the
            competent waits until the entire album had been uploaded to S3
            before redirecting to the artists show page. If the upload fails,
            the artist will get a user-friendly error message prompting them to
            try their upload again in a moment. The upload-upload component also
            keeps its local state even when an upload fails, so artists don’t
            have to reconstruct the album with every upload attempt.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-wrapper cs-img-margin">
          <img
            src={UploadError}
            alt="Requests Modal Screenshot"
            className="cs-img-medium"
          />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Outcome</header>
          <article>
            Building AmpCamp was an incredible learning experience. It exposed
            me to some of the more advanced, DevOps-related technologies of web
            development, such as Docker and AWS. It also gave me experience
            collaborating with others on an advanced project with lots of
            interconnected pieces, and managing responsibilities accordingly.
          </article>
          <article>
            AmpCamp turned out to be fully-functional music sharing site with an
            intuitive user interface, and a robust framework for asynchronous
            uploading files to AWS. Anyone can sign up for AmpCamp and upload
            music of their own!
          </article>
        </div>
      </div>
    </div>
  );
};

export default AmpCamp;
