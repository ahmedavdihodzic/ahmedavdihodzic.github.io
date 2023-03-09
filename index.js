
const App = ()=>{
    return(
            <div className="container">

<div className='navbar'>

            <div className='logo'>
             <img src='./assets/logo3.png' alt='logo'/>
             <h3>&lt;Welcome&gt;</h3>
             </div>

             <div className='links'>
                <a href="#home">HOME</a>
                <a href="home">ABOUT</a>
                <a href="home">SKILLS</a>
                <a href="home">CONTACT</a>
             </div>

 </div>
            
<div className='home' id='home'>

              <div className='home_text'>
                <h1>Hi There,</h1>
                <h1>I'm <span className="myname">Ahmed</span></h1>
                <p>I Am Into Web Developer</p>
                <button type="button" class="btn btn-outline-warning">About Me</button>
                <div className='home_links'>
                <a href='https://ba.linkedin.com/in/ahmed-avdihod%C5%BEi%C4%87-523918141?trk=public_profile_samename-profile'><i class="bi bi-linkedin home_icons"></i></a>
                <a href='https://github.com/ahmedavdihodzic'><i class="bi bi-github home_icons"></i></a>
               </div>
              </div>

              <div className='home_img '>        
              <img src='./assets/dev.png' alt='logo'/>     
              </div>
            


 </div>

            
        </div>
    )
}