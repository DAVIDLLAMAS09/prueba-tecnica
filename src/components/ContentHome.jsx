import React from 'react';
import imagenBitMap from '../assets/home/bitmap.png'
import computadora from '../assets/home/1-ilustra-beneficios-dos-w.png'
import sectionFourImage from '../assets/home/bitmap2.png'

function ContentHome(){


    return(
        <>
        <div className="section-one">
            <div className="container">
                <div className="row">
                        <div className="col-md-5">
                        <h1 className="section-one-tittle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <p className="caracteristicas-section-one"> <span className="circle"></span> Genera nuevos clientes</p>
                        <p className="caracteristicas-section-one"><span className="circle"></span> Posiciona fácilmente tus servicios en línea</p>
                        </div>
                        <div className="col-md-7">
                            <div className="registrate-solicita">
                                <h2>Regístrate y solicita una demostración de la plataforma.</h2>
                                <button type="button" className="btn btn-info btn-membresia">¡Obtén tu membresia!</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="section-two">
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 section-two-content">
                        <h2 className="section-two-tittle">¿Consectetur adipiscing elit?</h2>
                        <p>Somos la plataforma digital que reúne a los mejores profesionales  en para brindar servicios legales a personas y empresas que buscan solucionar un problema.</p>
                        <button type="button" className="btn btn-info btn-registrate">¡Regístrate!</button>
                    </div>
                    <div className="col-md-7">
                       <div className="container-left">
                       <p className="section-two-descubre text-center">Descubre cómo funciona</p>
                        <iframe width="559" height="307" src="https://www.youtube.com/embed/slb-gnG8Jhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-three">
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 section-three-right">
                       <img  className="imagen-section-three" src={imagenBitMap} alt="" />
                    </div>
                    <div className="col-md-7">
                       <div className="container-three-left">
                            <p className="first-text  text-center">Beneficios de la plataforma</p>
                            <img src={computadora} alt="computsdora" />
                            <p className="second-text text-center">Incrementa tus clientes potenciales desde tu celular o computadora.</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-four">
            <div className="container">
                <div className="row ">
                    <h2 className="title-four">Conoce Lorem ipsum dolor.</h2>
                    <div className="col-md-5 section-four-right">
                            <p className="caracteristicas-section-four"> <span className="circle"></span>¡Regístrate y forma parte de la nueva era  digital!</p>
                            <p className="caracteristicas-section-four"> <span className="circle"></span> Aprovecha tu tiempo en casa u oficina</p>
                            <p className="caracteristicas-section-four"> <span className="circle"></span> Obtén clientes potenciales en todo el país</p>
                            <button type="button" className="btn btn-info btn-registrate">Regístrate</button>
                    </div>
                    <div className="col-md-7">
                       <div className="container-four-left">
                            <img src={sectionFourImage} alt="computsdora" />
                       </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}


export default ContentHome