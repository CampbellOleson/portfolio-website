import React from "react";
import "../../stylesheets/case-studies/case-studies.css";

const Canopy = () => {
  return (
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
              I helped create Tax Prep at Canopy. Tax Prep was a product
              designed to automatically prepare and file tax returns based on
              user input about a taxpayers finances
            </summary>
          </section>
        </div>
        <div className="vert-center">
          <div id="catch-img" />
        </div>
      </section>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Assignment</header>
          <article>
            I worked on the product team at Canopy, writing tax-form specific
            software logic and doing manual QA/click testing. Specifically, I
            was on the Subject Matter Experts team. My job was to read tax
            instructions and write software (using a proprietary reference
            language specific to Canopy’s software environment) that execute the
            instructions of the tax form with data from forms that the end user
            would complete.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <article>
            I would also QA the product to make sure that the software completed
            tax forms as expected. This meant using our product to test e-File
            scenarios and double checking formatting, data types, and calculated
            outputs.
          </article>

          <article>
            Apart from making sure forms were filed correctly, I would read over
            XML reports from the IRS in response to e-Filed tax scenarios. These
            reports would report any errors in the tax scenario, which I would
            document and resolve.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article>
            The result of my work, and the work of the rest of the SME and QA
            teams, was a highly-sophisticated tax-prep software that could
            automatically fill out and file hundreds of tax documents, and prove
            invaluable to tax professionals who used it.
          </article>
          <article>
            Tax prep was part of a larger integrated software suite to help tax
            practitioners streamline and automate their workload. It was a cool
            product, and I was proud to be part of the team.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock cs-bmo">
          <article className="cs-bmo">
            I had the opportunity to take part in the development of an
            innovative software product. I also learned a lot about QA and the
            software development lifecycle. Furthermore, Tax Prep received a lot
            of attention and positive press during the time I worked with
            Canopy. My time with Canopy was a formative, career-shaping
            experience.
          </article>
        </div>
      </div>

      <div className="hor-center">
        <div className="cs-textblock">
          <header>Challenges</header>
          <article>
            Working on the product team at Canopy provided me with a variety of
            challenges. It was the first exposure I had to any sort of software
            development. The most challenging aspect of the job was reading and
            interpreting tax instructions and translating them into software
            logic with complete fidelity and precision.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Canopy;
