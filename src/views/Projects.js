import { Section } from "../components/Layout";
import Carousel from "../components/Carousel";
import projectsJson from "../json/Projects.json";

export default function Projects(){
    const images = []
    for(let i in projectsJson) images.push(projectsJson[i].cover)
    
    return (
        <Section 
            id="projects"
            className="overflow-hidden transition-all duration-300 ease-in-out
                bg-gray-50/50
                dark:bg-gray-900/30
            "
        >
            <Carousel 
                images={ images } 
                json={ projectsJson }
            />
        </Section>
    )
}