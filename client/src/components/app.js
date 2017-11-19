
import React from 'react';

// import '../scss/main.scss';
import Resume from './resume';
import ResumeContainer from '../containers/resume';

import Bio from './bio';
import Contact from './contact';

const App = () => (

  <main id="slides">

    <section className="slide" id="slide1">
      {
        <div className="centered-container">
          <h1> 
            Aidan Miles
          </h1>
          <p>
            .
          </p>
          <p>
            .
          </p>
          <p>
            Full-stack web developer
          </p>
          <p>
            .
          </p>
          <p>
            .
          </p>
          <p>
            Musician
          </p>

        </div>
        }
    </section>

    <section className="slide" id="about">
      <Bio /> 
      
    </section>

    <section className="slide" id="resume">
      <ResumeContainer />
    </section>

    <section className="slide" id="contact"> 
      <Contact />
    </section>
  </main>
);

export default App;

