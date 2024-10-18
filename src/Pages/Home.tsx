import './Home.css';
function Home() { // Create new components of React: 
  return (
    <>
    <main className="container">
    <section id="hero" className="hero">
<h1> Salim Saay</h1>
<p>Associate Professor at University of Limerick |Funded Investigator at Lero and R@ISE | Lero</p>
</section>

{/*Proejct Section */}
<section id="#projects" className="section projects"> 
<h2>Projects</h2>
          <div className="project-grid"> {/* Grid for displaying project cards */}
            <div className="project-card"> {/* Project 1 card */}
              <h3>Blockchain for sustainability (BC4ECO)</h3>
              <p>To build European higher education capacity in teaching DLT in combination with Environmental Engineering, Design Thinking, and Behavioral Psychology/Economics to Computer Science students at the Master level.</p>
            </div>
            <div className="project-card"> {/* Project 2 card */}
              <h3>R@ISE</h3>
              <p>The R@ISE project is focused on developing a strong Low Code / No Code research capability in Ireland, involving international experts and partners to lead research in Software Engineering and LCNC development platforms.</p>
            </div>
          </div>
        </section>
<section id="Research" className='section Research'>
  <h2> Research</h2>
 <p> Salim's research intrest is software architecutre|,software development| and web application development </p>  
</section>

{/* Conctact section */}
<section id="contact" className="section contact"> {/* Contact section */}
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:salim.saay@ul.ie">salim.saay@ul.ie</a></p> {/* Email link */}
          <p>LinkedIn: <a href="https://linkedin.com/in/salimsaay" target="_blank" rel="noopener noreferrer">Salim Saay</a></p> {/* LinkedIn link */}
        </section>
    </main>

    <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Salim Saay. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>  

</>
);
}
    
 export default Home;   
  