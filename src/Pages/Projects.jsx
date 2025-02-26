import { projectsData } from "../assets/projectsData";
import ProjectThumbnail from "../Components/ProjectThumbnail";

export default function Projects() {
    const thumbnails = projectsData.map(item => (
        <ProjectThumbnail
            key={item.slug}
            {...item}
        />
    ))
    return (
        <>
            <h2 className="page-title">My Projects</h2>
            <div className="projects">
                {thumbnails}
            </div>
        </>
    );
}
