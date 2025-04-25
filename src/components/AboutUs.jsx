import "../App.css"

const AboutUs = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="min-h-fit lg:h-[70vh] w-full lg:w-[80vw] flex flex-col lg:flex-row lg:bg-[url(../../src/assets/favicon.png)] lg:bg-cover lg:bg-no-repeat  bg-gray-300">
                <div className="w-full lg:w-1/2 flex justify-center items-center px-3">
                    <img src="../src/assets/aboutus.avif" alt="Imagen sobre nosotros" className="object-cover max-h-full w-auto" />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
                    <div className="flex flex-col text-center gap-4">
                        <h1 className="text-5xl font-h1 font-bold text-cyan">Sobre nosotros</h1>
                        <p className="font-p">
                            TheKiddU nació en 2020, en plena pandemia, como un emprendimiento cargado de pasión y sabor. En medio de la incertidumbre, decidimos apostar por lo que más nos gusta: hacer hamburguesas increíbles.
                            <br /><br />
                            Lo que empezó como una cocina casera y muchas ganas, hoy es una hamburguesería con identidad propia, donde cada smash burger está hecha con ingredientes de calidad, recetas originales y un estilo que nos define. Creemos en el poder de la comida para conectar personas, y por eso cada pedido que sale de nuestra cocina lleva un poco de nuestra historia.
                            <br /><br />
                            Seguimos creciendo gracias a quienes nos eligen, y nos esforzamos cada día por ofrecer no solo un producto riquísimo, sino también una experiencia TheKiddU.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
