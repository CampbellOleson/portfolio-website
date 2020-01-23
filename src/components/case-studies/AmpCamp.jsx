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
              <p>September 2019</p>
            </div>
            <summary>
              I created a heavy-metal themed music streaming site. AmpCamp
              serves as a platform where musicians can share their music, and
              listeners can discover new artists.
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
            AmpCamp is a full-stack web application that I created as a project
            at App Academy. I worked on AmpCamp with a team of two other
            students. We used GitHub for source code management.
          </article>
          <article>
            As our final project with App Academy, my team wanted to take on a
            sophisticated project. We chose to create a music streaming site
            because we wanted something with functionality that goes beyond that
            of an every-day website. Our idea for the site was a platform where
            artists could share their music, complete with artist profiles,
            profile photos, and album uploading capability.{" "}
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Planning</header>
          <article>
            In AmpCamp, my team tried to emulate the core functionality of band
            camp. We decided that the home page should be a place where users
            could discover music, complete with “daily albums” and search
            functionality.
          </article>
          <article>
            We also determined that our site should be easy-to-use for artists,
            with functionality to seamlessly upload entire albums at a time. We
            determined that artists should have profile pages where all their
            albums and songs could be viewed and listened to. This meant that we
            also had to integrate audio-player functionality into our app.
          </article>
          <article>
            Like my other projects at App Academy, AmpCamp is not a
            production-quality website. It was an opportunity for me and my
            teammates to learn about more sophisticated facets of web
            development. That being said, we built a lot of functionality into
            AmpCamp, and I stand behind all of our work.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <header>Features and Functionality</header>
          <article>
            AmpCamp was implemented with NodeJS and MongoDB on the backend. We
            used the ExpressJS library for our backend server, and tested our
            API with Postman during development.
          </article>
          <article>
            On the front end, we leveraged React for the UI and Apollo GraphQL
            for requests to our backend API. AmpCamp also integrates AWS SW
            Bucket for hosting photos and audio files.
          </article>
          <article className="cs-bmo">
            The homepage of AmpCamp enables users to discover new music via
            “AmpCamp Daily Picks”, and search for artists, albums, and songs. A
            play/pause button on the homepage album index items allows users to
            listen to albums on the home page.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={Search} alt="AmpCamp Home Page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            If you navigate to an artists profile page, you can view all of the
            albums and songs that an artist has released. Similarly, there is an
            album show page that allows you to view the details of a particular
            album. You can stream music on an artists profile page, and a fixed
            music-player nav bar on the bottom of the page will display the name
            of the song that’s playing, the album artwork, and the artist that
            the song belongs to.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo cs-bmo">
        <img src={Profile} alt="AmpCamp Home Page" className="cs-img" />
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
        <img src={AlbumShow} alt="AmpCamp Home Page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            I was responsible for creating the upload functionality of AmpCamp.
            If you sign up to AmpCamp as an artist, you can upload as many songs
            as you want as an album, complete with a description and a cover
            art. I used React to create a live preview of the album information,
            so an artist can look over the details of their album before
            uploading. This page asynchronously uploads audio files to AWS S3
            Bucket, and then stores the URLs in MongoDB so the tracks can be
            played back later.
          </article>
        </div>
      </div>

      <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo cs-bmo">
        <img src={Upload} alt="AmpCamp Home Page" className="cs-img" />
      </div>

      <div className="hor-center">
        <div className="cs-img-wrapper cs-img-margin">
          <img
            src={UploadLoop}
            alt="Upload Error Screenshot"
            className="cs-img"
          />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            AmpCamp has fully functional upload and streaming capabilities,
            complete with a fluid and intuitive user interface.
          </article>
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
            One of the challenges I faced when creating the album upload page on
            AmpCamp was asynchronous exception handling. Occasionally, albums
            would fail to upload to S3 part of the way through, leaving the
            artist with a semi-uploaded album. The way I got around this was to
            have the app stay on the upload page until the upload was complete,
            afterwhich, it would redirect to the new album show page. If the
            upload failed, the local state of the upload page would be preserved
            (so the user didn’t have to recreate the album) and a user-friendly
            error message would prompt the user to “try again in a moment”. This
            taught me the importance of good error handling as it pertains to
            user experience.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-img-wrapper cs-img-margin">
          <img
            src={UploadError}
            alt="Requests Modal Screenshot"
            className="cs-img"
          />
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Conclusion</header>
          <article>
            The result of our work was a fully functional indie streaming site,
            with upload and download functionality. I plan to optimize AmpCamp
            further as time goes on, and I hope to make the audio player
            compatible with mobile devices as well. All in all, AmpCamp was a
            great learning experience, and it taught me how to create bigger web
            apps with more complex functionality.
          </article>
        </div>
      </div>
    </div>
  );
};

export default AmpCamp;
