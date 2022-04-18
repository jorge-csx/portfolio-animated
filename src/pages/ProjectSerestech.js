import Document from "../components/Document"
import { Title, Subtitle, Description, Highlight, Bold } from "../components/Text"
import { Frame, FrameGroup, Icon, Collapse, Sidebar } from "../components/Layout"

export default function ProjectSerestech() {
    const sidebarItems = [
        {href : "#sobre-el-proyecto", title : "Sobre el proyecto"},
        {href : "#herramientas",  title : "Herramientas"},
        {href : "#requisitos", title : "Requisitos"}
    ]

    return (
        <Document className="flex flex-row gap-4">
            <Sidebar
                items={sidebarItems}
            />
            <article className="w-full">
                {/* Introducción */}
                <section>
                    <Title
                        id="sobre-el-proyecto"
                        className="scroll-mt-10"
                    >
                        Sobre el proyecto
                    </Title>
                    <p>
                        <Highlight className="font-medium">SeresTech</Highlight> es una pyme especializada en la compra y venta de laptops, a cargo de un amigo y su jefe.
                        Como parte de su estrategia de expansión requerían de un sitio para optimizar procesos de atención y
                        conversión de clientes, y administración de stock. 
                    </p>
                    <p>
                        Para ello, acordamos un proyecto Full-stack de eCommerce dividido en 2 fases. La primera fase — ya finalizada — 
                        consta de un catálogo y la segunda lo concluye, agregando herramientas avanzadas propias de un eCommerce,
                        como lo son pasarelas de pago,  servicios de entrega, filtros avanzados, cuentas para clientes, entre otras.
                    </p>
                    <p>
                        El desarrollo del catalogo me llevo 3 meses, es mi primer proyecto full-stack, así que considero que puedo reducir
                        significativamente tiempos. Aunque en un inicio el proyecto pretendía tocar lo mínimo el Back-end, para cumplir
                        con los requisitos para este, fue necesario sumergirme en un aprendizaje intensivo durante todo el proceso de desarrollo.
                    </p>
                    <Description>— El resto del contenido está orientado a la primera fase. —</Description>
                </section>
                {/* Herramientas */}
                <section>
                    <Title 
                        id="herramientas"
                        className="mt-10 scroll-mt-10"
                    >
                        Herramientas
                    </Title>
                    <div className="flex flex-wrap gap-4 mb-3">
                        <FrameGroup
                            icon="fa-brands fa-laravel"
                            iconSize="text-3xl"
                        >
                            <Bold>Laravel 8</Bold> se encarga del Back-end y Blade del Front-end.
                        </FrameGroup>

                        <FrameGroup
                            icon="fa-brands fa-sass"
                            iconSize="text-2xl"
                            frameClassName="h-[3rem]"
                        >
                            <Bold>Sass</Bold> define los estilos para los componentes.
                        </FrameGroup>

                        <FrameGroup
                            icon="bx bxl-jquery"
                            iconSize="text-3xl"
                        >
                            <Bold>Jquery</Bold> implementa UX y query's CRUD.
                        </FrameGroup>
                    </div>

                    <Collapse
                        title="Librerías"
                        from="max-h-[7.5rem]"
                        to="max-h-[62.5rem]"
                        className="mt-6"
                        classNameCollapse="w-full flex flex-wrap gap-4"
                    >
                        <FrameGroup
                            icon="bx bxl-github"
                            iconSize="text-3xl"
                            iconLink="https://github.com/teamtnt/laravel-scout-tntsearch-driver"
                        >
                            <Bold>TNTSearch</Bold> junto con <Bold>Scout</Bold> realizan búsquedas.
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bxl-github"
                            iconSize="text-3xl"
                            iconLink="https://github.com/diglactic/laravel-breadcrumbs"
                        >
                            <Bold>Laravel Breadcrumbs.</Bold>
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bxl-github"
                            iconSize="text-3xl"
                            iconLink="https://github.com/spatie/laravel-cookie-consent"
                        >
                            <Bold>Laravel Cookie Consent</Bold> agrega un aviso de cookies.
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bxl-github"
                            iconSize="text-3xl"
                            iconLink="https://github.com/JohnAlbin/normalize-scss"
                        >
                            <Bold>Normalize Scss</Bold> cuenta con un conjunto de reglas para normalizar estilos entre navegadores.
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bx-link"
                            iconSize="text-3xl"
                            iconLink="https://image.intervention.io/v2"
                        >
                            <Bold>Intervention Image 2</Bold> procesa las imágenes subidas al servidor.
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bx-link"
                            iconSize="text-3xl"
                            iconLink="https://jqueryvalidation.org/documentation/"
                        >
                            <Bold>Jquery Validation</Bold> valida formularios CRUD.
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bx-link"
                            iconSize="text-3xl"
                            iconLink="http://www.openjs.com/scripts/events/keyboard_shortcuts/"
                        >
                            <Bold>Jquery Shortcuts</Bold> agrega keyboards shortcuts para barra de búsqueda (Ctrl + Space) y para cerrar modales (Esc).
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bx-link"
                            iconSize="text-3xl"
                            iconLink="https://boxicons.com/"
                        >
                            <Bold>Boxicons</Bold> añade iconos.
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bxl-google"
                            iconSize="text-3xl"
                            iconLink="https://fonts.google.com/"
                        >
                            <Bold>Google Fonts</Bold> proporciona las fuentes para este sitio.
                        </FrameGroup>
                    </Collapse>

                    <Subtitle className="mt-6">
                        Tests
                    </Subtitle>
                    <p>Los siguientes sitios han sido utilizados para evaluar la velocidad de nuestro sitio.</p>
                    <div className="flex flex-wrap gap-4 mb-3">
                        <FrameGroup
                            icon="bx bxl-google"
                            iconSize="text-3xl"
                            iconLink="https://pagespeed.web.dev/"
                        >
                            <Bold>PageSpeed Insights.</Bold>
                        </FrameGroup>
                        <FrameGroup
                            icon="bx bxl-google"
                            iconSize="text-3xl"
                            iconLink="https://www.thinkwithgoogle.com/intl/es-es/feature/testmysite/"
                        >
                            <Bold>Test My Site.</Bold>
                        </FrameGroup>
                    </div>

                    <Title
                        id="requisitos"
                        className="mt-10"
                    >
                        Requisitos
                    </Title>
                </section>
            </article>
            <Sidebar/>
        </Document>
    )
}