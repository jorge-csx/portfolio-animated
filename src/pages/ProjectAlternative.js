import Document from "../components/Document";
import { Header, Title, Subtitle } from "../components/Text";
import { Frame, FrameGroup, Icon, Collapse, ImageZoomIn, List } from "../components/Layout"
/**
 * @component
 * * ProjectAlternative
 * Este componente contiene información sobre el proyecto test
 */
 export default function ProjectSerestech() {
    function Introduction() {
        return (
            <section>
                <Header>
                    Encabezado de sección introducción
                </Header>
                <Title>
                    Título de sección introducción
                </Title>
                <Subtitle>
                    Subtítulo de sección introducción
                </Subtitle>
            </section>
        )
    }   
    function Tools() {
        return (
            <section>
                <Header>
                    Encabezado de sección herramientas
                </Header>
                <Title>
                    Título de sección herramientas
                </Title>
                <Subtitle>
                    Subtítulo de sección herramientas
                </Subtitle>
            </section>
        )
    }
    function Requirements() {
        return (
            <section>
                <Header>
                    Encabezado de sección requisitos
                </Header>
                <Title>
                    Título de sección requisitos
                </Title>
                <Subtitle>
                    Subtítulo de sección requisitos
                </Subtitle>
            </section>
        )
    }
    function Structure() {
        return (
            <section>
                <Header>
                    Encabezado de sección construcción
                </Header>
                <Title>
                    Título de sección construcción
                </Title>
                <Subtitle>
                    Subtítulo de sección construcción
                </Subtitle>
            </section>
        )
    }
    function Footer() {
        return (
            <div className="w-fit grid grid-cols-2 mt-10 m-auto gap-x-4 gap-y-2">
                <Frame
                    className="flex justify-self-end"
                >
                    <Icon
                        icon="bx bx-link"
                        size="text-3xl"
                        className="hover:text-cyan-400"
                    />
                </Frame>
                <Frame
                >
                    <Icon
                        icon="bx bxl-github"
                        size="text-3xl"
                        className="hover:text-purple-500"
                    />
                </Frame>
                <p className="col-span-2 mb-0 h-fit">
                    Hechar un vistazo.
                </p>
            </div>
        )
    }
    return (
        <Document className="flex flex-row gap-4">
            <article className="w-full p-4">
                <Introduction/>
                <Tools/>
                <Requirements/>
                <Structure/>
                <Footer/>
            </article>
        </Document>
    )
}