
import { connect } from 'react-redux';
import React from 'react';

let Resume = ({ resume }) => (

<div className="slide-content">
  <h1 className="slide-title"> Resume</h1>
  <a id="resume-pdf-link" href="resume.pdf">(PDF)</a>
  <div className="experience">

    <div className="small-box">
      <h4> Education </h4>
      <p>Columbia University | Early graduation in 2012</p>
      <h4> Technical Skills </h4>
      <p>
        { 
            resume.technicalSkills.map(list => {
              return list.join(', ')
            })
            .join(' | ')
        }
      </p>
    </div>

    <h4> Experience </h4>
    {
      resume.experiences.map(exp => (
        <ul key={ exp.key }>
        <li  className="company" >
          <span className="title">{ exp.title } @ </span>
          <span><a href="{ exp.website }"> { exp.companyName } </a></span>, { exp.when }
        </li>
        <li className="company-description">
          <span>
            { exp.companyDescription }
          </span>
        </li>
        <li className="responsibilities">
          <em>Responsibilities:</em>
          <span> { exp.responsibilities }</span>
        </li>
        <li className="achievement">
          <span> { exp.achievement } </span>
        </li>
        </ul>
      ))
    }

  </div>
</div>
);

Resume = connect()(Resume);

export default Resume;

