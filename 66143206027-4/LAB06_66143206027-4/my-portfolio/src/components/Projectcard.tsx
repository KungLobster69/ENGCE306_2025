interface ProjectCardProp {
    title: string;
    description: string;
    imageUrl: string;
}

function ProjectCard(props: ProjectCardProp){
    return(
        <div className="project-card">
            <img src={props.imageUrl} alt={props.title} style={{maxHeight: '100%'}} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default ProjectCard;