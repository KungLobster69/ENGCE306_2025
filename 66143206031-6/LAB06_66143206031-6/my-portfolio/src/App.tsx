import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import './App.css';

function App(){
  return(
    <div>
      <Header/>
      <main>
        <HeroSection/>
        <AboutMe/>
        <ProjectList/>
        <Footer/>
        </main>
    </div>
  )
}
export default App