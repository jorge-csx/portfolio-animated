function Welcome(props){
    return (
        <section id="home" className="px-24 py-14 border border-red-500">
            <div className=" w-3/5 h-96 m-auto flex flex-row gap-14">
                <div className="w-2/3 rounded-md overflow-hidden">
                    <img className="
                        h-full object-cover transition ease-linear
                        hover:scale-110
                    " src={props.picProfileUrl}/>
                </div>
                <div className="relative">
                    <h1 className="text-5xl font-semibold font-display">Frontend Jr</h1>
                    <p>Hola, bienvenidx,</p>
                    <p>soy <span className="code-highlight bg-code-highlight">Jorge Soria</span>, tengo <span className="code-highlight bg-code-highlight">21 años</span></p>
                    
                    <div className="my-4">
                        <div className="
                            border p-2 gap-0 rounded-full w-[2.375rem] max-w-fit overflow-hidden flex items-center text-sm group transition-all ease-in-out delay-100
                            hover:px-4 py-2 hover:gap-4 hover:w-96
                        ">
                            <i className='
                                bx bxs-map-pin text-xl
                            '/>
                            <span className="
                                opacity-0 whitespace-nowrap transition-all ease-in-out delay-100
                                group-hover:opacity-100
                            ">
                                {props.location}
                            </span>
                        </div>

                        {/* Crear componente */}

                        {/* <span>
                            <i className='bx bx-send'/>
                            {props.email}
                            <i className='bx bx-copy'/>
                        </span> */}
                    </div>

                    <p className="mb-2">Disfruto del <span className="code-highlight bg-code-highlight">diseño digital</span>, <span className="code-highlight bg-code-highlight">UI/UX</span>, y de la <span className="code-highlight bg-code-highlight">programación</span> en general. </p>
                    <p className="mb-2">He fusionado tales gustos para especializarme en el diseño y la programación <span className="code-highlight bg-code-highlight">Frontend</span>.</p>
                    <p>Creo en el <span className="code-highlight bg-code-highlight">trabajo en equipo</span> como medio para el <span className="code-highlight bg-code-highlight">desarollo de grandes ideas</span>.</p>

                    <button className="
                        bg-cyan-400 px-5 py-2 rounded-full text-white font-semibold outline outline-2 outline-offset-2 outline-transparent absolute bottom-0
                        hover:outline-cyan-400
                        active:bg-cyan-500
                    ">
                        Escribirme
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Welcome;
/*bg-gradient-to-bl from-transparent via-cyan-50 to-transparent */