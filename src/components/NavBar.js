function NavBar(){
    // Creamos un array de objetos con las secciones para la barra de navegación.
    const sections = [
        {id : 'welcome',  title : 'Bienvenida'},
        {id : 'about-me', title : 'Sobre mí'},
        {id : 'projects', title : 'Proyectos'},
        {id : 'contact',  title : 'Contacto'},
    ]
    // Definimos una función que recorrera el array sections y creará uno nuevo (result)
    // para devolverlo.
    // https://es.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components
    const getSections = () => {
        const listSections = sections.map((section) => 
            <a href={'#'+section.id} key={section.id} className="w-1/4">
                <div className="
                    h-8 border-b text-slate-400 px-4 transition duration-75 ease-out
                    hover:border-b-2 hover:border-slate-700 hover:text-slate-700 hover:text-medium">
                    {section.title}
                </div>
            </a>
        );
        return listSections;
    }
    return (
        <div className="fixed bottom-8 w-full px-24 flex flex-row justify-between">
            {getSections()}
        </div>
    )
}

export default NavBar;