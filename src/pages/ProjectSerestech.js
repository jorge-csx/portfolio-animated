import Document from "../components/Document"
import { Title, Subtitle, Description, Highlight, Bold, Header } from "../components/Text"
import { Frame, FrameGroup, Icon, Collapse, SideBar, ImageZoomIn, List } from "../components/Layout"
import { useEffect, useRef, useState } from "react"
import Button from "../components/Button"
import toggleClasses from "../scripts/toggleClasses"
/**
 * @component
 * * ProjectSerestech
 * Este componente contiene información sobre el proyecto SeresTech
 */
export default function ProjectSerestech() {
    function Introduction() {
        return (
            <section>
                <Header>
                    Sobre el proyecto
                </Header>
                <p>
                    SeresTech es una pyme especializada en la compra y venta de laptops, a cargo de un par de socios, uno de ellos mi amigo.
                    Como parte de su expansión requerían de un sitio para optimizar procesos de atención de clientes,
                    conversión de usuarios, y administración de stock. 
                </p>
                <p>
                    Para ello, acordamos un proyecto eCommerce Full-stack dividido en 2 fases. La primera fase —ya finalizada— 
                    consta de un catálogo y la segunda lo concluye, agregando herramientas avanzadas propias de un eCommerce, como
                    pasarelas de pago, servicios de entrega, filtros avanzados, login para clientes, etc.
                </p>
                <p>
                    El desarrollo del catalogo me llevo 3 meses, es mi primer proyecto full-stack, así que considero que puedo reducir
                    significativamente tiempos. Aunque en un inicio el proyecto pretendía tocar lo mínimo el Back-end, para cumplir
                    con los requisitos, fue necesario sumergirme en un aprendizaje intensivo durante todo el proceso de desarrollo.
                </p>
                <Description>
                    —El resto del contenido está orientado a la primera fase.—
                </Description>
            </section>
        )
    }   
    function Tools() {
        return (
            <section>
                <Header>
                    Herramientas
                </Header>
                <div className="flex flex-wrap gap-4 mb-3 border dark:border-slate-600 rounded-md p-4">
                    <FrameGroup
                        icon="fa-brands fa-laravel"
                        iconSize="text-3xl"
                    >
                        <Bold>Laravel 8</Bold> se encarga del Back-end y Blade del Front-end.
                    </FrameGroup>
                    <FrameGroup
                        icon="fa-brands fa-sass"
                        iconSize="text-2xl"
                        frameClassName="flex items-center"
                        frameHeight="h-[3rem]"
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
                <Title>
                    Librerías
                </Title>
                <Collapse
                    id="librerias"
                    from="max-h-[9rem]"
                    to="max-h-[62.5rem]"
                    classNameCollapse="w-full flex flex-wrap gap-4 border dark:border-slate-600 rounded-md p-4"
                >
                    <FrameGroup
                        icon="bx bxl-github"
                        iconSize="text-3xl"
                        iconLink="https://github.com/teamtnt/laravel-scout-tntsearch-driver"
                        iconClassName="hover:text-purple-500"
                    >
                        <Bold>TNTSearch</Bold> junto con <Bold>Scout</Bold> realizan búsquedas.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bxl-github"
                        iconSize="text-3xl"
                        iconLink="https://github.com/diglactic/laravel-breadcrumbs"
                        iconClassName="hover:text-purple-500"
                    >
                        <Bold>Laravel Breadcrumbs.</Bold>
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bxl-github"
                        iconSize="text-3xl"
                        iconLink="https://github.com/spatie/laravel-cookie-consent"
                        iconClassName="hover:text-purple-500"
                    >
                        <Bold>Laravel Cookie Consent</Bold> agrega un aviso de cookies.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bxl-github"
                        iconSize="text-3xl"
                        iconLink="https://github.com/JohnAlbin/normalize-scss"
                        iconClassName="hover:text-purple-500"
                    >
                        <Bold>Normalize Scss</Bold> normaliza estilos entre navegadores.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bx-link"
                        iconSize="text-3xl"
                        iconLink="https://image.intervention.io/v2"
                        iconClassName="hover:text-blue-200"
                    >
                        <Bold>Intervention Image 2</Bold> procesa las imágenes subidas al servidor.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bx-link"
                        iconSize="text-3xl"
                        iconLink="https://jqueryvalidation.org/documentation/"
                        iconClassName="hover:text-red-500"
                    >
                        <Bold>Jquery Validation</Bold> valida formularios CRUD.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bx-link"
                        iconSize="text-3xl"
                        iconLink="http://www.openjs.com/scripts/events/keyboard_shortcuts/"
                        iconClassName="hover:text-red-500"
                    >
                        <Bold>Jquery Shortcuts</Bold> agrega atajos de teclado en barra de búsqueda y modales.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bx-link"
                        iconSize="text-3xl"
                        iconLink="https://boxicons.com/"
                        iconClassName="hover:text-pink-500"
                    >
                        <Bold>Boxicons</Bold> añade iconos.
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bxl-google"
                        iconSize="text-3xl"
                        iconLink="https://fonts.google.com/"
                        iconClassName="hover:text-blue-500"
                    >
                        <Bold>Google Fonts</Bold> proporciona las fuentes para este sitio.
                    </FrameGroup>
                </Collapse>

                <Title>
                    Tests
                </Title>
                <p>Los siguientes sitios han sido utilizados para evaluar la velocidad del proyecto.</p>
                <div className="flex flex-wrap gap-4 mb-3 border dark:border-slate-600 rounded-md p-4">
                    <FrameGroup
                        icon="bx bxl-google"
                        iconSize="text-3xl"
                        iconLink="https://pagespeed.web.dev/"
                        iconClassName="hover:text-yellow-500"
                    >
                        <Bold>PageSpeed Insights.</Bold>
                    </FrameGroup>
                    <FrameGroup
                        icon="bx bxl-google"
                        iconSize="text-3xl"
                        iconLink="https://www.thinkwithgoogle.com/intl/es-es/feature/testmysite/"
                        iconClassName="hover:text-red-500"
                    >
                        <Bold>Test My Site.</Bold>
                    </FrameGroup>
                </div>
            </section>
        )
    }
    function Requirements() {
        return (
            <section>
                <Header>
                    Requisitos
                </Header>
                <div className="flex flex-wrap gap-4">
                    <Frame
                        width="w-[calc(50%_-_.5rem)]"
                        height="h-auto"
                        padding="p-4"
                    >
                        <Title>
                            Diseño UI
                        </Title>
                        <ul className="list-disc ml-5">
                            <li>Estilo llamativo, moderno y orientado a la marca visual.</li>
                            <li>Carrusel de imágenes.</li>
                        </ul>
                    </Frame>
                    <Frame
                        width="w-[calc(50%_-_.5rem)]"
                        height="h-auto"
                        padding="p-4"
                    >
                        <Title>
                            SEO
                        </Title>
                        <ul className="list-disc ml-5">
                            <li>Sitio optimizado para ser promocionado en futuras campañas de Google Ads.</li>
                        </ul>  
                    </Frame>
                    <Frame
                        width="w-[calc(50%_-_.5rem)]"
                        height="h-auto"
                        padding="p-4"
                    >
                        <Title>
                            Funciones UX
                        </Title>
                        <ul className="list-disc ml-5">
                            <li>Consultas en el sitio a través del plugin de Messenger.</li>
                            <li>Consultas y proceso de compra a través del rediccionamiento desde la página de un producto de interés hacia WhatsApp por medio de su API.</li>
                            <li>Mostrar un mensaje para confirmación de cookies y su respectiva documentación.</li>
                            <li>Filtros básicos para mostrar los productos por precio en orden ascendente o descendente.</li>
                            <li>Búsquedas por marca, modelo, línea, procesador, ram y almacenamiento.</li>
                        </ul>
                    </Frame>
                    <Frame
                        width="w-[calc(50%_-_.5rem)]"
                        height="h-auto"
                        padding="p-4"
                    >
                        <Title>
                            Administración
                        </Title>
                        <ul className="list-disc ml-5">
                            <li>Un punto de acceso por medio de un login reservado —por el momento— para usuarios con rol de administrador.</li>
                            <li>CRUD para el manejo de stock y contenido visual del sitio, como lo son las imágenes que componen el carrusel.</li>
                        </ul>
                    </Frame>
                </div>
            </section>
        )
    }
    function Structure() {
        return (
            <section>
                <Header>
                    Construcción
                </Header>
                <p>
                    Después de una platica inicial para acordar los requisitos, comencé
                    con la construcción del sitio por el Front-end. 
                </p>
                <p>
                    Tome la decisión de comenzar desde cero, sin plantillas, librerías
                    de estilos o CMS, con el objetivo de aprender, por supuesto, sin
                    dejar de lado la calidad y seguridad del proyecto.
                </p>
                <p>
                    Antes de comenzar con la maquetación realice una breve investigación
                    sobre los sitios de marcas que compiten directamente con SERESTECH y
                    de aquellas que son un referente para nosotros a largo plazo. Esto
                    con el objetivo de encontrar areas de oportunidad y estrategias UI/UX
                    que podríamos replicar.
                </p>
                <Title>
                    Revisiones semanales
                </Title>
                <p>
                    Parte del acuerdo, implicaba revisiones semanales de los avances del
                    proyecto, cambios constantes. Para lo cual busque que mi flujo de
                    trabajo estuviera orientado en principios Agiles para lograr hacer
                    frente a la evolución del proyecto.
                </p>
                <Title>
                    Diseño
                </Title>
                <p>
                    Como consideraciones iniciales tomamos en cuenta que el sitio de
                    nuestro competidor directo tiene un diseño desactualizado y una
                    interfaz sobrecargada y desaprovechada en determinados puntos del
                    recorrido por el sitio, lo cual podríamos emplear como diferenciador
                    en nuestra tienda.
                </p>
                <p>
                    Así que comencé con el diseño:
                </p>
                <ul className="list-disc ml-5">
                    <li>Definiendo una paleta de colores,</li>
                    <li>creando un pequeño Kit UI</li>
                    <li>y asignando estos elementos en cada una de las vistas del sitio.</li>
                </ul>
                <div className="w-full flex flex-row gap-4 my-3">
                    <ImageZoomIn
                        id="illustration-kit-ui"
                        src="images/projects/serestech-catalog/illustrations/kit-ui.jpg"
                        alt="ilustración-serestech-kit-ui"
                        containerClassName="border dark:border-slate-600"
                    />
                    <ImageZoomIn
                        id="illustration-color-palette"
                        src="images/projects/serestech-catalog/illustrations/color-palette.jpg"
                        alt="ilustración-serestech-color-palette"
                        containerClassName="border dark:border-slate-600"
                    />
                </div>
                <p>
                    Tras una semana entregue mi propuesta y después de unos ligeros
                    cambios estuvimos de acuerdo y listos para continuar con el siguiente paso.
                </p>
                <Title>
                    Front-end
                </Title>
                <p>
                    Para comenzar con la maquetación Front-end me enfoque en organizar
                    el directorio en pequeños módulos y en diseñar estilos para los
                    componentes UI con Sass, después utilizando Blade construí la
                    estructura, y termine agregando funciones UX con JavaScript y Jquery.
                </p>
                <Subtitle>
                    Google Fonts
                </Subtitle>
                <p>
                    Para las fuentes seleccioné Inter en encabezados h1 y h2, y Open Sans
                    en encabezados h3 y contenido general.
                </p>
                <Subtitle>
                    Sass
                </Subtitle>
                <Description type="quote">
                    Puede encontrar los ficheros Sass en <Highlight>resources\scss</Highlight> y el Css compilado
                    en <Highlight>public\storage\css</Highlight>
                </Description>
                <p>
                    Estructura y función de ficheros:
                </p>
                <List type="list-disc">
                    <li><Bold>Abstracts</Bold> mantiene las variables aisladas.</li>
                    <li><Bold>Components</Bold> contiene los estilos de elementos UI reutilizables.</li>
                    <li><Bold>Pages</Bold> maneja estilos de único uso para cada vista.</li>
                    <li><Bold>Tools</Bold> incluye utilidades con fines múltiples.</li>
                </List>
                <p>
                    Estos ficheros son indexados en main.scss para posteriormente ser compilados.
                </p>
                <Subtitle>
                    Blade
                </Subtitle>
                <Description type="quote">
                    Puede encontrar los ficheros en <Highlight>resources\views</Highlight>
                </Description>
                <p>
                    Estructura y función de ficheros:
                </p>
                <List type="list-disc">
                    <li><Bold>Auth</Bold> separa las vistas empleadas para el login.</li>
                    <li><Bold>Components</Bold> contiene código html reutilizable.</li>
                    <li><Bold>Docs</Bold> contiene todos los documentos que sean necesarios agregar al sitio.</li>
                    <li><Bold>Layouts</Bold> almacena los templates</li>
                    <li><Bold>Partials</Bold> contiene el componente de breadcrumbs.</li>
                    <li><Bold>Vendor</Bold> almacena el componente de cookieConsent.</li>
                </List>
                <p>
                    La forma en que estos ficheros trabajan es encapsulando una vista dentro de
                    un template y en esta vista se insertan los componentes que se necesiten.
                </p>
                <Title>
                    Back-end
                </Title>
                <p>
                    Una vez definido el paso anterior, continué con la lógica del sitio. Debido
                    a que mi especialidad no es esta area, elegí el Framework de Laravel, el cual
                    cuenta con herramientas estándar ya definidas, por lo que basta con algunas
                    pocas líneas de código para insertar una función optimizada y que no
                    comprometela seguridad del Back-end.
                </p>
                <Subtitle>
                    Base de datos
                </Subtitle>
                <p>
                    Para la base de datos utilice relaciones muchos a uno para la tabla category y
                    uno a uno para el resto. A largo plazo serán añadidas más categorías y
                    especificaciones para cada una de estas.
                </p>
                <Description type="quote">
                    Puede encontrar estas relaciones en <Highlight>app\Http\Models</Highlight>
                </Description>
                <Subtitle>
                    Login
                </Subtitle>
                <Description type="quote">
                    Puede encontrar el controlador en <Highlight>app\Http\Controllers\LoginController.php</Highlight>
                </Description>
                <p>
                    El login es una de las herramientas que Laravel ya tiene integradas. La lógica
                    básica del formulario en esta vista envía un email y password por POST para ser
                    comparados con los registros en la tabla  user.
                </p>
                <Subtitle>
                    CRUD
                </Subtitle>
                <Description type="quote">
                    Puede encontrar el controlador en <Highlight>app\Http\Controllers\PanelController.php</Highlight>
                </Description>
                <p>
                    El CRUD es accesible para cualquier usuario administrador. Emplea el middleware
                    auth, el cual no permite el acceso a esta vista para usuarios sin sesión, si
                    alguien intenta acceder sin este requisito es redireccionado al login.
                </p>
                <p>
                    Las diferentes acciones CRUD son cargadas en un modal en donde se muestra el
                    formulario necesario por medio de Jquery. Solamente Update cuenta con Ajax,
                    utilizado para eliminar imágenes existentes sin recargar la página.
                </p>
                <Subtitle>
                    Almacenamiento de imágenes
                </Subtitle>
                <p>
                    Para el almacenamiento de imágenes utilice los facades Storage e Image.
                </p>
                <p>
                    Storage almacena la url de la imagen en la base de datos, mientras que Image
                    procesa estas imágenes antes de que sean almacenadas en el host, recortándolas
                    y cambiando su formato a webp.
                </p>
                <Subtitle>
                    Mostrar registros
                </Subtitle>
                <p>
                    Para mostrar registros en las vistas realice consultas en el controlador
                    PanelController.php que devolvía un objeto con los registros, los cuales eran
                    enviados directamente a la vista para ser iterados.
                </p>
                <Subtitle>
                    Búsquedas
                </Subtitle>
                <Description type="quote">
                    Puede encontrar el controlador en <Highlight>app\Http\Controllers\SearchController.php</Highlight>
                </Description>
                <p>
                    Para el motor de búsquedas inicialmente utilice solo el paquete Scout, sin
                    embargo, no cumplía con los requisitos mínimos como full-text; mostrar cualquier
                    registro que contenga al menos una de las palabras buscadas.
                </p>
                <p>
                    Después de un par de días de búsqueda y probar diferentes librerías, encontré
                    TNTSearch un complemento para Scout. Gracias a este driver, fue posible realizar
                    búsquedas full-text correctamente.
                </p>
                <p>
                    Esta búsqueda se realiza comparando la palabra introducida en el input de búsqueda
                    con varios campos de la tabla specifications_laptops.
                </p>
                <Description type="quote">
                    Puede encontrar dichos campos en el modelo <Highlight>SpecificationsLaptop</Highlight> en la función <Highlight>toSearchableArray</Highlight>
                </Description>
                <Subtitle>
                    Filtros 
                </Subtitle>
                <Description type="quote">
                    Puede encontrar la función sort en el controlador <Highlight>HomeController</Highlight>
                </Description>
                <Title>
                    SEO y SEM
                </Title>
                <p>
                    En cuanto al SEO, por el momento se ha limitado al uso de keywords y description
                    en las etiquetas meta de la vista home, la etiqueta title en el head de las
                    vistas home y product, y atributos alt para imágenes y title para los enlaces.
                </p>
                <p>
                    Esta optimización aún se encuentra en desarrollo con el objetivo de introducir
                    campañas publicitarias.
                </p>
                <Title>
                    Deploy
                </Title>
                <p>
                    Con el Front-end y Back-end listos, era hora de subir el sitio, para ello, la
                    empresa contaba con un host disponible en donde directamente subí el directorio.
                </p>
                <Subtitle>
                    Test de velocidad
                </Subtitle>
                <p>
                    Con el sitio en línea, me dedique a optimizarlo realizando cambios recomendados
                    por las aplicaciones de PageSpeed Insights y Test My Site.
                </p>
                <Subtitle>
                    Mantenimiento
                </Subtitle>
                <p>
                    Con la entrega del proyecto se daba comienzo al periodo de mantenimiento
                    trimestral, atendiendo cualquier problema que pueda surgir y agregando pequeñas
                    funciones adicionales.
                </p>
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
                        link="https://serestech.com.mx"
                    />
                </Frame>
                <Frame
                >
                    <Icon
                        icon="bx bxl-github"
                        size="text-3xl"
                        className="hover:text-purple-500"
                        link="#"
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