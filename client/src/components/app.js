
import React from 'react';
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

import Resume from './resume';
import Bio from './bio';
import Contact from './contact';

// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )

const App = () => (
  <main id="slides">
    <section className="slide" id="slide1">
      <h1> Hi! </h1>
    </section>

    <section className="slide" id="about">
      <Bio /> 
      
    </section>

    <section className="slide" id="resume">
      <Resume />
    </section>

    <section className="slide" id="contact"> 
      <Contact />
    </section>
  </main>
);

export default App;
