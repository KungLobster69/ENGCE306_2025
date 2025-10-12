import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <ProjectList></ProjectList>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
