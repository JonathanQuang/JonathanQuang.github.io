import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import Topbar from './components/topBar.js';
import Background from './components/background.js';
import WorkExperience from './components/workExperience.js';
import Projects from './components/projects.js'
import ContactMe from './components/contactMe.js'


function App() {
  return (
      <div>
        
       <Topbar></Topbar>
        <canvas id="threeJSbackground">
        <Background></Background>
        </canvas>

        <main>
          <Home></Home>
          <WorkExperience></WorkExperience>
          <Projects></Projects>
          <ContactMe></ContactMe>
          
        </main>
        

      </div>
      
  );
}

export default App;
