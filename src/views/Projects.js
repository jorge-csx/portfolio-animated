import { Section } from "../components/Layout";
import Carousel from "../components/Carousel";
import projectsJson from "../json/Projects.json";

export default function Projects(){
    const images = []
    for(let i in projectsJson) images.push(projectsJson[i].cover)

    return (
        <Section id="projects">
            <Carousel 
                images={images} 
                json={projectsJson}
            />
        </Section>
    )
}