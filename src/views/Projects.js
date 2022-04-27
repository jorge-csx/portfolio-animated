import { Section } from "../components/Layout";
import Carousel from "../components/Carousel";
import projectsJson from "../json/Projects.json";
/**
 * @component
 * * Projects
 * Este componente es la vista de proyectos 
 */
export default function Projects(){
    const images = []
    for(let i in projectsJson) images.push(projectsJson[i].cover)

    return (
        <Section 
            id="projects"
            className="
                h-[calc(100vh_-_4.625rem)] transition-all duration-300 ease-in-out
                bg-gray-50/50
                dark:bg-gray-900/30
            "
        >
            <Carousel 
                images={images} 
                json={projectsJson}
            />
        </Section>
    )
}