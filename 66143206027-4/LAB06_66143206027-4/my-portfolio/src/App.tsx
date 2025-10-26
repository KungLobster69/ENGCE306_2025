// import Header from "./components/Header";
// import Herosection from "./components/Herosection";
// import Aboutme from "./components/Aboutme";
// import Project from "./components/Project";
// import Footer from "./components/footer";
// import './App.css';


// function App(){
//   return(
//     <div className="container">
//       <Header></Header>
//         <main>
//           <Herosection></Herosection>
//           <Aboutme></Aboutme>
//           <Project></Project>
//         </main>
//         <Footer></Footer>
//     </div>
//   );
// }


import ProjectCard from "./components/Projectcard";


const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'Built with React and TypeScript for ENGE306.',
        imageUrl: 'https://placehold.co/600x400?text=Project+1'
    },
    {
        id: 2,
        title: 'Database Management System',
        description: 'A project from ENGE216 course.',
        imageUrl: 'https://placehold.co/600x400?text=Project+2'
    }
];

function ProjectList() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div>
                {/* 3. ใช้ .map() เพื่อสร้าง ProjectCard จากข้อมูล */}
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectList;
