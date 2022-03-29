import { Section, ImageZoomIn } from "../components/Layout";
import { Display } from "../components/Text";
import projectsJson from "../json/Projects.json";

export default function Projects(){
    const getProjectsIcons = (project) => {
        return (
            project.langs.map((lang) => (
                <i 
                    key={lang.id} 
                    className={lang.icon}
                />
            ))
        )
    }
    const getProjectsLinks = (project) => {
        return (
            project.links.map((link) => (
                <a 
                    key={link.id} 
                    href={link.url}>
                    <i className={link.icon}/>
                </a>
            ))
        ) 
    }
    const getProjects = () => {
        return (
            projectsJson.map((project) => 
                <div key={project.id} className="w-full h-full border border-green-400">
                    <Display>
                        {project.title}
                    </Display>
                    <div>
                       <div>
                           Creado con
                           {getProjectsIcons(project)}
                           |
                       </div>
                       <div>
                           Visitar web o repositorio
                           {getProjectsLinks(project)}
                       </div>
                    </div>
                    <div className="h-1/2 cursor-pointer border border-red-500">
                        <ImageZoomIn 
                            src={project.cover}
                        />
                    </div>
                </div>
            )
        )
    }
    return (
        <Section id="projects">
            {getProjects()}
        </Section>
    )
}