interface ProjectCardProps{
    title: string;
    description: string;
    imageUr: string;
}

function ProjectCard(props: ProjectCardProps){
    return(
        <div className="project-card">
            <img src={props.imageUr} alt={props.title} style={{maxWidth:'100%'}}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default ProjectCard;