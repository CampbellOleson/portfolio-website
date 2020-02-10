import React from "react";
import General from "../../assets/screenshots/canopy/ct-general.png";
import ClientSurvey from "../../assets/screenshots/canopy/ct-clientsurvey.png";
import Form from "../../assets/screenshots/canopy/ct-taxform.png";
import IRS from "../../assets/screenshots/canopy/ct-irs.png";
import MoreProjects from "./MoreProjects";
import "../../stylesheets/case-studies/case-studies.css";
import "../../stylesheets/case-studies/canopy.css";

const Canopy = () => {
  return (
    <div>
      <div id="canopy-wrapper" className="cs-wrapper">
        <div className="cs-nav" />
        <section className="cs-topper cs-white-container">
          <div className="vert-center">
            <section className="cs-topper-info">
              <header>Tax Prep</header>
              <div>
                <p>Canopy, Inc.</p>
                <p>2018 - 2019</p>
              </div>
              <summary>
                I worked with product and QA at Canopy, Inc. to create Tax Prep:
                a workflow management software for tax practitioners. The main
                purpose of Tax Prep is to streamline the tax preparation process
                by automatically filling out tax forms.
              </summary>
            </section>
          </div>
          <div className="vert-bottom">
            <div id="ct-topper-img" />
          </div>
        </section>

        <div className="arrow" />

        <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
          <img src={General} alt="General page" className="cs-img" />
        </div>

        <div className="hor-center">
          <div className="cs-textblock">
            <header>The Challenge</header>
            <article>
              At Canopy, we set out to build a revolutionary tax prep software
              that was miles ahead of its competitors, both in utility and
              design. My role on this project was to write reference logic to
              autocomplete tax forms, and to manually QA the end-user product.
            </article>
          </div>
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <header>My Contribution</header>
            <article className="cs-bmo">
              My primary contribution to Tax Prep was the creation of software
              logic that automatically filled out tax forms based on end-user
              input. I would read and interpret tax-form instructions, and then
              translate them into programs that our software environment would
              execute to fill out the form.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
          <img src={Form} alt="Tax form" className="cs-img" />
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <article className="cs-bmo">
              The IRS laid out rules for e-Filing tax returns in an XSD schema,
              so a lot of my QA work involved making sure that the software
              logic that we wrote returned data that was compatible with the
              schema. The most common mistakes I would correct were invalid data
              types, invalid numbers of decimal places, incorrect calculations
              in the logic, and dollar amounts that were outside the range
              permitted by the IRS.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
          <img src={IRS} alt="IRS alert" className="cs-img-medium" />
        </div>

        <div className="hor-center">
          <div className="cs-textblock cs-bmo">
            <article className="cs-bmo">
              I would also manually fill out tax scenarios in the end-user
              product, and then make sure that all the related tax forms were
              filled out correctly with respect to my input. Following this, I
              would e-File the scenario, and read over the XML response from the
              IRS to check for errors. Typically, there were errors, and I would
              track them down in our logic and correct them.
            </article>
          </div>
        </div>

        <div className="cs-img-wrapper cs-img-margin cs-tpf cs-tmo">
          <img
            src={ClientSurvey}
            alt="RipCamp Splash Page"
            className="cs-img-medium"
          />
        </div>

        <div className="hor-center">
          <div className="cs-textblock">
            <header>Challenges</header>
            <article>
              Working on Tax Prep provided me with a variety of challenges. It
              was the first exposure I had to any sort of software development.
              The most challenging aspect of the job was reading and
              interpreting tax instructions and translating them into software
              logic with complete fidelity and precision.
            </article>
            <article>
              While working on Tax Prep, I learned a lot about software
              development, and often times I didn't have anyone to walk me
              through the process. This taught me to take the initiative to
              educate myself when I came across a term or technology that I
              didn’t understand.
            </article>
          </div>
        </div>

        <div className="hor-center">
          <div className="cs-textblock">
            <header>Outcome</header>
            <article>
              The result of my work, and the work of the rest of the product and
              QA teams, was a highly-sophisticated tax-prep software that could
              automatically fill out and file hundreds of tax documents, and
              prove invaluable to tax professionals who used it. Tax prep was
              part of a larger integrated software suite to help tax
              practitioners streamline and automate their workload. It was an
              incredible product, and I was proud to be part of the team.
            </article>
            <article>
              I had the opportunity to take part in the development of an
              innovative software product. I also learned a lot about QA and the
              software development lifecycle. Furthermore, Tax Prep received a
              lot of attention and positive press during the time I worked with
              Canopy. My time with Canopy was a formative, career-shaping
              experience.
            </article>
          </div>
        </div>
      </div>
      <MoreProjects exclude="tp" />
    </div>
  );
};

export default Canopy;
