import React from 'react';
import facebook from '../assets/home/0-media-icon-blue-facebook.png'
import instagram from '../assets/home/0-media-icon-blue-instagram.png'
import linkeIn from '../assets/home/0-media-icon-blue-linke-in.png'

function Footer(){


    return(
        
        <div className="section-footer-content ">
            <div className="container">
                <div className="row footer-container">
                    <div className="col-md-3">
                      <p className="footer-cabeceras">Contacto</p>
                      <div className="content-contacto">
                          <p>Teléfono</p>
                          <p>99 85 1260 6061</p>
                      </div>
                      <div className="content-correo-electronico">
                          <p>Correo electrónico</p>
                          <p>consectetur adipiscing elit</p>
                      </div>
                      <div className="content-correo-direccion">
                          <p>Dirección</p>
                          <p>consectetur adipiscing elit</p>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                        <p className="footer-cabeceras">Acerca de</p>
                        <div className="content-acerca-de">
                            <a href="/">Beneficios</a>
                            <a href="/">Plus</a>
                            <a href="/">Plus</a>
                            <a href="/">¿Cómo funciona?</a>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                      <p className="footer-cabeceras">Información Adicional</p>
                      <div className="content-informacion-adicional">
                            <a href="/">Términos y condiciones</a>
                            <a href="/">Aviso de Privacidad</a>
                            <a href="/">Preguntas Frecuentes</a>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                      <p className="footer-cabeceras">Redes Sociales</p>
                      <div className="content-redes-sociales">
                          <a href="#">
                          <img src={facebook} alt="facebook" />
                          </a>
                          <a href="#">
                          <img src={instagram} alt="instagram" />
                          </a>
                          <a href="#">
                          <img src={linkeIn} alt="linkeIn" />
                          </a>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Footer