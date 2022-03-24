function Welcome(props){
    return (
        <div id="welcome" className="w-full h-screen px-24 py-14">
            {/* Header */}
            <header className="flex flex-row justify-between">
                <p className="text-xl font-bold">
                    {props.title}
                    <span className="text-sky-400">
                        {props.plus}
                    </span>
                </p>
                <i>I</i>
            </header>
            {/* Section */}
            <section className="w-full h-4/5 mt-7 flex">
                {/* Greeting */}
                <div className="w-2/6 h-full">
                    <div>

                    </div>
                </div>
                {/* Image */}
                <div className="w-4/6 h-full border rounded-lg">
                    <img/>
                </div>
            </section>
        </div>
    )
}

export default Welcome;