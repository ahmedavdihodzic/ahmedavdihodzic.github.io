
const App = ()=>{
    return(
            <div className="container">

<div className='navbar'>

            <div className='logo'>
             <img src='./assets/hand.png' alt='hand'/>
             <h3>&lt;Welcome&gt;</h3>
             </div>

             <div className='links'>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#skills">SKILLS</a>
                <a href="#contact">CONTACT</a>
             </div>

 </div>
            
<div className='home' id='home'>

              <div className='home_text'>
                <h1>Hi There,</h1>
                <h1>I'm <span className="myname">Ahmed</span></h1>
                <p>I Am Web Developer</p>
                <form action="https://en.wikipedia.org/wiki/Web_developer" method="get" target="_blank">
                <button  type="submit" class="btn btn-outline-warning">About</button>
                </form>
                <div className='home_links'>
                <a href='https://ba.linkedin.com/in/ahmed-avdihod%C5%BEi%C4%87-523918141?trk=public_profile_samename-profile'><i class="bi bi-linkedin home_icons"></i></a>
                <a href='https://github.com/ahmedavdihodzic'><i class="bi bi-github home_icons"></i></a>
               </div>
              </div>

              <div className='home_quotes'>  
              <h3>Quotes<img src='./assets/idea.png' alt='idea'/></h3>   
              <p>“Before software can be reusable it first has to be usable.”</p>  
              <p>“ Code is like humor. When you have to explain it, its bad.” </p> 
              <p>“Fix the cause, not the symptom.”</p> 
              <p>“Simplicity is the soul of efficiency.”</p>   
              </div>
            
 </div>

 <div className="about" id='about'>
                    <h3>About Me<img src='./assets/man.png' alt='man'/></h3>      
                    <p>I've been working as a web developer for a few years now, 
                        and I'm passionate about everything that goes into making websites work well and look beautiful. 
                        The web is my passion because it's where I can find the most exciting projects to work on. 
                        It's also where I get to express my creativity in ways that are hard to find elsewhere.</p>       
 </div>

 <div className="skills" id='skills'>
  
  <div className='skills_container'>
  <h3><p>Front</p> <i class="bi bi-file-richtext"></i></h3>  
  <p className='skills_icon'><img src='./assets/html.png' alt='html'/>Html</p>
  <p className='skills_icon'><img src='./assets/css.png' alt='css'/>CSS</p>
  <p className='skills_icon'><img src='./assets/js.png' alt='js'/>JavaScript</p>
  <p className='skills_icon'><img src='./assets/react.png' alt='react'/>React</p>
    </div>
  <div className='skills_container'>
  <h3><p>Back</p> <i class="bi bi-file-earmark-text"></i>  </h3> 
  <p className='skills_icon'><img src='./assets/nodejs.png' alt='nodejs'/>Node.js</p>
  <p className='skills_icon'><img src='./assets/java.png' alt='java'/>Java</p> 
    </div>
  <div className='skills_container'>
  <h3><p>DB</p> <i class="bi bi-database"></i></h3> 
  <p className='skills_icon'><img src='./assets/mongo.png' alt='mongo'/>MongoDB</p>
  <p className='skills_icon'><img src='./assets/sql.png' alt='slq'/>SQL</p>
    </div>

</div>

<div className='contact' id='contact'>
  <h3>Contact <img src='./assets/user.png' alt='user'/></h3>
<p className='contact_icon'><img src='./assets/gmail.png' alt='gmail'/>ahmedavdihodzic@gmail.com</p>
<p className='contact_icon'><img src='./assets/insta.png' alt='insta'/>ahmedavdihodzic</p>
<p className='contact_icon'><img src='./assets/phone.png' alt='phone'/>Send Request</p>

</div>

            
        </div>
    )
}