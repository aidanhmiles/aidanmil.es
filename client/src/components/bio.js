import React from 'react';

const Bio = () => (
  <div className="slide-content">
      <h1 className="slide-title"> About Me </h1>	
      <div className="photo-wrapper">
        <img id="headshot" alt="portrait of the artist as a young dev" src={"../assets/images/mahfayce.png"}/>
      </div>

      <div className="bio"> 
          <p> In a nutshell, I like to make things, I love to learn, I ask a lot of questions, and I live web software. I graduated early from Columbia University with a B.A. in Chinese Literature and a few computer science-related (including computer music-related) courses under my belt. After graduation, I lived in China for a while, teaching and working at an <a className="colored-link" href="https://syieducation.com/">educational startup</a>. 
          </p>

          <p> While in China I self-taught a lot of web development basics, and returned to New York to improve my skills with a bunch of similarly motivated and creative young people at the <a className="colored-link" href="https://appacademy.io">App Academy</a>. There, I built the Rails framework from scratch (including ActiveRecord), a basic version of the BackboneJS framework, as well as some basic games with UIs like Snake and Asteroids. It was a lot of learning, and I highly recommend App Academy in specific for others looking to get a substantive, intensive, and worthwhile introduction to web programming.
          </p>

          <p> Since then, I've worked on two very early stage startups, one of which launched (and then subsequently fizzled out) at TechCrunch Disrupt in 2014; I've worked in a large corporate environment, where I learned how useful it is having the resources of an established company, while struggling with "the way it's always been done"; and I've been self-employed, with its own set of perks and struggles. Currently, I'm a senior developer and tech lead at <a className="colored=link"> an agency in San Diego</a>, where I'm learning about managing other developers and how it feels to be accountable for the success of a project. 
          </p>

          <p>In my free time I am constantly building – I work on side-projects, or improvements to my workflow, quite literally every day. I also make websites for friends and family, and currently I'm working on a lightweight CMS, and a browser-based non-Flash music notator with good keyboard shortcuts. That's all been a lot of learning too. 
          </p>

          <p> Outside of developing, I've been a radio host at <a className="colored-link" href="https://www.cc-seas.columbia.edu/wkcr/">WKCR</a>, I've been a professional musician (insofar as I've been paid to perform, and have gigged around New York City), and strive daily to better express myself on the piano, guitar, and my own homemade software instruments. I'm always learning, and I laugh a lot. No need to be over serious about the little things.
          </p>

      </div>
  </div>
);

export default Bio;
