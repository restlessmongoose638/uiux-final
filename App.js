import "./App.css";
import { useState } from "react";

const App = () => {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <div class="header">
        <div id="name">
        <p>Anabelle Johnston</p>
        </div>
        <div id="links">
          <p>Work</p>
          <p>About</p>
        </div>
      </div>
      <div class="bio">
        <p>Anabelle is a designer and writer interested in creative storytelling across mediums.</p>
      </div>
     <div class="projects">
      <div id="development">
       <img src="./images/development.png"></img>
       <h3>Development</h3>
       <p>For UI/UX, I designed an interactive interface that allows users to filter and sort an array.</p>
       <p>Context: Users need to be able to sort through large lists with speed and accuracy.</p>
       <p>Research: I determined what categories are most useful for this particular demographic (by author, by title) to 
         determine how to sort this information. 
       </p>
       <p>Design Iterations: I made it possible to apply multiple filters because genres and age rage are both relevant to 
         finding a book.
       </p>
       <p>Conclusion: While applying as many filters as possible allows users to find something they may already know they are looking for,
         it is important for the initial design to be as intuitive as possible as well. 
       </p>
      </div>
      <div id="responsive-redesign">
       <img src="./images/responsive-redesign.png"></img>
       <h3>Responsive Redesign</h3>
       <p>For UI/UX, I designed an interactive interface that responds to changing screen dimensions.</p>
       <p>Context: The College Hill Independent website currently has fixed dimensions and an unintuitive design.</p>
       <p>Research: I determined how users move through magazine websites and reorganized the page to emphasize this process. 
       </p>
       <p>Design Iterations: I decided ultimately to keep the featuerd article structure because that was importnat for 
         gathering attention. 
       </p>
       <p>Conclusion: Improving the accessibility of this design and forefronting the individual sections helped user experience 
         without too drastically destabilizing how one moves through the website. 
       </p>
      </div>
      <div id="personas">
       <img src="./images/personas.png"></img>
       <h3>Personas</h3>
       <p>For UI/UX, I developed a user profile and user journey for the CVS self-checkout interface.</p>
       <p>Context: The CVS self-checkout interface is somewhat frustrating but not much has been done to understand why.</p>
       <p>Research: I interviewed subjects in front of the interface.   
       </p>
       <p>Design Iterations: I tried to keep the website simple to emphasize the user experience. 
       </p>
       <p>Conclusion: It is essential to talk to and observe real users to understand the full user experience. 
       </p>
      </div>
      <div id="react-studio">
       <img src="./images/react-studio.png"></img>
       <h3>React Studio</h3>
       <p>For UI/UX, I design an aggregator and cart interface. This project was the basis for my Development assignment.</p>
       <p>Context: Users need to be able to mark items in a list.</p>
       <p>Research: I needed to render the list in react simply.  
       </p>
       <p>Design Iterations: I finally settled on keeping the favorites list at the bottom of the screen so it doesn't interfere
         with the regular list. 
       </p>
       <p>Conclusion: In the future, it is important to signify on the item itself that the item is added to a list. 
       </p>
      </div>
      </div>
      <div class="contact">
        <p>Email</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
    


    </div>
  );
}

export default App;
