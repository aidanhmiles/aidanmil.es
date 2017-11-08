
import React from 'react';
const Resume = () => (
<div className="slide-content">
  <h1 className="slide-title"> Resume</h1>
  <a id="resume-pdf-link" href="resume.pdf">(PDF)</a>
  <div className="experience">

    <div className="small-box"> 
      <h4> Education </h4> 
      <p>Columbia University | Early graduation in 2012</p>
      <h4> Technical Skills </h4>
      <p>
          Ruby, Javascript (ES5, ES2015+), Bash / UNIX, HTML5, SVG, CSS3, SASS 
          | Ruby on Rails, Node, Angular, Backbone, Meteor, jQuery 
          | TDD (RSpec, Jasmine, Karma, Mocha) 
          | REST APIs, Swagger / the OpenAPI spec 
          | AWS (Beanstalk, RDS, EC2), Docker 
          | SQL (PostgreSQL, MySQL) and NoSQL (Firebase, Mongo) 
          | Git
      </p>
    </div>

    <h4> Experience </h4>

    <ul id="seamgen">
      <li className="company"> 
        <span className="title">Tech Lead / Senior Web Developer @ </span>
        <span><a href="https://seamgen.com/"> Seamgen </a></span>, 
        December 2015 - Present
      </li>
      <li className="company-description">
        <span>
          Application Development for Web and Mobile
        </span>
      </li>
      <li className="responsibilities">
        <em>Responsibilities:</em>
        <span>Estimating project and feature timelines, setting up CI and deployment pipelines for projects, ensuring code quality and supervising other technical aspects of projects, giving lunchtime presentations,  iterating on process / devising more efficient ways of completing projects.
        </span>
      </li> 
      <li className="achievement"> 
        <span>Learned Docker, then taught other developers to use it; initiated an effort to develop web-development style guides (JS, Angular, HTML, etc)</span> 
      </li>
    </ul> 

    <ul id="piksel">
      <li className="company"> 
        <span className="title">Web Developer @ </span>
        <span><a href="https://piksel.com/"> Piksel </a></span>, 
        December 2014 - August 2015
      </li>
      <li className="company-description">
        <span> Creating and managing OTT video monetization solutions for some of the world's leading media brands </span>
      </li>
      <li className="responsibilities">
        <em>Responsibilities:</em> 
        <span> Construction and maintenance of client AT&amp;T's Uverse.com desktop and mobile site</span>
      </li> 
      <li className="achievement"> 
        <span> Built new UI features on desktop and mobile sites, learned about implementing streaming video on the web </span> 
      </li>
    </ul> 

    <ul id="wayla">
      <li className="company"> 
        <span className="title">Developer @ </span>
        <span><a href="https://wayla.com/"> Wayla </a></span>, 
        May - December 2014
      </li>
      <li className="company-description">
        <span> Making elegant, digital documentaries for live art and cultural events. </span>
      </li>
      <li className="responsibilities">
        <em>Responsibilities:</em> 
        <span> Rewriting app from version 1.0 into new stack using Ionic / AngularJS / Firebase. </span>
      </li>
      <li className="achievement"> 
        <span> Successfully rebuilt product from scratch, with very minimal backend (only S3, Firebase, and Filepicker). </span> 
      </li>
    </ul> 

    <ul id="invibox">
      <li className="company"> 
        <span className="title">Developer @ </span>
        <span><a href="http://invibox.com"> InviBox </a></span>, 
        July - September 2014 
      </li>
      <li className="company-description"><span> Next generation, social media-inspired webmail. </span></li>
      <li className="responsibilities">
        <em>Responsibilities:</em> 
        <span>Rewriting and extending existing Meteor codebase in prep for beta launch.</span></li>
      <li className="achievement"> 
        <span>Successfully brought product to beta launch under time pressure after being hired as 1st developer on new team of 3; extended features, rebuilt UI for email components, and rewrote significant portions of existing codebase.</span>
      </li>
    </ul> 

    <ul id="sunrise">
      <li className="company"> 
        <span className="title">
          Program Director @
        </span>
        <span>
          <a href="https://syieducation.com/">Sunrise International Education</a>
        </span>, 
        Feb - Aug 2013 
      </li>
      <li className="company-description">
        <span>Beijing-based company organizing some of the largest extracurricular activities for Chinese high schoolers.</span>
      </li>
      <li className="responsibilities">
        <em>Responsibilities:</em>
        <span>Website construction and management, administration of non-tournament programs, judging tournaments, teaching debate-related classNamees. </span>
      </li>
      <li className="achievement"> 
        <span> Improved existing Ning-based website (both UX and design-wise), and designed a new homepage</span> 
      </li>
    </ul> 

    <ul id="uexcel">
      <li className="company"> 
        <span className="title">Foreign Teacher @ </span>
        <span>
          <a href="https://uexcel.cn/"> The UExcel Int'l Academy </a>
        </span>, 
        Feb - Aug 2013
      </li>

      <li className="company-description">
        <span>Tianjin-based provider of Western-style English-language education to Chinese adults and students seeking high-school or college abroad. </span> 
      </li>
      <li className="responsibilities">
        <em>Responsibilities:</em> 
        <span> Planning and teaching English-language core-content classNamees to middle school and high school students at the UExcel Int'l Academy, as well as teaching private lessons for adults. </span>
      </li>
      <li className="achievement"> 
        <span>Highest reviewed and most requested teacher during my tenure there, both by students and by other staff. Routinely worked overtime without compensation to help my students on a variety of projects.</span> 
      </li>
    </ul> 

    <ul id="peopledaily">
      <li className="company"> 
        <span className="title">Paid Summer Intern @ </span>
        <span>
          <a href="https://english.people.com.cn/"> The People's Daily Online, NYC</a>
        </span>
        , Summer 2012
      </li> 

      <li className="company-description">
        <span> Online edition of China's largest government-sponsored newspaper.</span> 
      </li>

      <li className="responsibilities">
        <em>Responsibilities:</em> 
        <span>Translating and reporting news for the New York office's daily video; editing footage, field reporting, and formally critiquing the English-language website for review by Beijing headquarters.</span>
      </li>

      <li className="achievement"> 
        <span> Wrote a formal proposal for an overhaul of the English-language website, which was reviewed by Beijing headquarters, and has been gradually implemented in the time since. </span> 
      </li>
    </ul> 

    <ul id="baic">
      <li className="company"> 
        Paid Summer Intern @ 
        <span> 
          <a href="https://baihc.cn/"> Beijing Automotive Industrial Corporation </a>
        </span>, 
        Summer 2010 
      </li>
      <li className="company-description">
        <span>State-owned enterprise and holding company of several Chinese automobile and machine manufacturers</span> 
      </li>
      <li className="responsibilities">
        <em>Responsibilities:</em> 
        <span>Designing and conducting a 6-week training on American Culture / English Language for engineers and staff; completing translation projects for PR department; giving presentations to company executives.
          </span>
      </li>
      <li className="achievement"> 
        <span> Created English-language corporation slogan; got some of my students to achieve proficiency and confidence speaking English in 6 weeks. </span> 
      </li>
    </ul>

    <ul id="gcc">
      <li className="company">
        Director of Event Management @ 
        <span><a href="httpsn://gccglobal.org/"> Global China Connection </a></span>, 
        Fall 2009 - Spring 2011
      </li>
      <li className="company-description"> 
        <span> Nonprofit organization for university students of all nationalities looking to engage China's emergence as a global power through events and networking. </span> 
      </li>
        <li className="responsibilities">
          <em>Responsibilities:</em> 
          <span>Coordinating visits of delegations of Chinese university student leaders to New York City, Boston, and Philadelphia; overseeing planning and execution of major events in New York City and Beijing; managing social media for planned events.</span>
        </li>
        <li className="achievement"> 
          <span> Was lead organizer for three successful all-day conferences, two in New York and one in Beijing, each featuring experts in a variety of fields and attended by three to five hundred students and professionals. </span> 
        </li>
    </ul> 
  </div> 
</div> 
);

export default Resume;
