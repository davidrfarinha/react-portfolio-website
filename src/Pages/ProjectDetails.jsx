import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../assets/projectsData";
import SlideShow from "../Components/SlideShow";
import { leftArrow } from "../assets/svg";

export default function ProjectDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const params = useParams();
    const currentProjectIndex = projectsData.findIndex(project => project.slug === params.projectslug);
    const currentProject = projectsData[currentProjectIndex];
    const { title, subtitle, gitHubLink, link, detailedDescription, images } = currentProject;
    return (
        <>
            <Link
                to="/projects"
                className="back-button gradient-border"
            >
                <div className="back-button-content">
                    {leftArrow}
                    <div>
                        <span>Back to</span>
                        <span>Projects</span>
                    </div>
                </div>
            </Link>
            <div className="project">

                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <div className="link">
                    <h5>Git Hub Page &#129170;&ensp;</h5>
                    <a 
                    href={gitHubLink}
                    target="_blank"
                    >{gitHubLink}</a>
                </div>
                <div className="link">
                    <h5>Page Link &#129170;&ensp;</h5>
                    <a 
                    href={link}
                    target="_blank"
                    >{link}</a>
                </div>
                <SlideShow
                    images={images}
                />
                {detailedDescription !== null ? detailedDescription.en : <p>More information about this project will be available soon.</p>}
            </div>
        </>

    )
}