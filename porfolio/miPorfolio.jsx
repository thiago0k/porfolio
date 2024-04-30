import { useState } from "react";
import './miPorfolio.css'


function Principal(){
    return(
        <>
      <header><h1>Thiago</h1></header>
      {/* <div className="contenedor-sobreMi">
        <h2 className="sobreMi">Sobre mi</h2>
        <ul className="contenedor-ul">
            <li className="item">Nombre: Thiago Elias Barbero</li>
            <li className="item">Edad: 17 Años</li>
            <li className="item">Pais: Argentina</li>
            <li className="item">Ciudad: buenos Aires</li>
            <li className="item">Contacto: tiagoelias289@gmail.com</li>
        </ul>
      </div> */}

      <div className="contenedor-tecnologias">
        <img className="image" src="https://logospng.org/download/html-5/logo-html-5-1024.png" alt="imagen-html" />
        <img className="image" src="https://www.shareicon.net/data/512x512/2016/08/01/639873_internet_512x512.png" alt="imagen-css" />
        <img className="image" src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png" alt="imagen-javascript" />
        <img className="image" src="https://vectorified.com/images/icon-react-native-24.png" alt="imagen-react" />
      </div>

      <div className="contenedor-proyectos">
        <h1 className="miProyecTitle">Mis Proyectos</h1>
        <div className="flexbox">
        <div className="content">
        <a href="#"> <img className="image-proyec" src="https://wallpaperaccess.com/full/1392583.jpg" alt="rick y morty" /></a>
        {/* <ul>
            <li>Fecha:..</li>
            <li>Tecnologias: html css javascript</li>
        </ul> */}
        </div>
        <div className="content">
        <a href="#"> <img className="image-proyec" src="http://wallsdesk.com/wp-content/uploads/2017/01/Buenos-Aires-HD-Background-.jpg" alt="rick y morty" /></a>
        {/* <ul>
            <li>Fecha:..</li>
            <li>Tecnologias: html css javascript</li>
        </ul> */}
        </div><div className="content">
        <a href="#"> <img className="image-proyec" src="https://wallpapercave.com/wp/wp1878525.jpg" alt="rick y morty" /></a>
        {/* <ul>
            <li>Fecha:..</li>
            <li>Tecnologias: html css javascript</li>
        </ul> */}
        </div><div className="content">
        <a href="#"> <img className="image-proyec" src="https://wallup.net/wp-content/uploads/2019/09/920368-argentina-fountains-monuments-sculptures-palace-buenos-aires-cities-1.jpg" alt="rick y morty" /></a>
        {/* <ul>
            <li>Fecha:..</li>
            <li>Tecnologias: html css javascript</li>
        </ul> */}
        </div>
        <div className="content">
        <a href="#"> <img className="image-proyec" src="https://s1.1zoom.me/big0/663/Argentina_Houses_Buenos_508212.jpg" alt="rick y morty" /></a>
        {/* <ul> */}
            {/* <li>Fecha:..</li>
            <li>Tecnologias: html css javascript</li>
        </ul> */}
        </div><div className="content">
        <a href="#"> <img className="image-proyec" src="https://images.alphacoders.com/684/thumb-1920-684911.jpg" alt="rick y morty" /></a>
        {/* <ul>
            <li>Fecha:..</li>
            <li>Tecnologias: html css javascript</li>
        </ul> */}
        </div>
        </div>
        <button className="btn-porfolio">ver mas</button>
      </div>
      <footer>
      <div class="footer-content">
        <p>© 2024  Sitio Web thiago elias barbero</p>
        <nav>
            <ul className="ul-foter">
                <li>tiagoelias289@gmail.com</li>
                <li><a href="#">Inicio</a></li>
            </ul>
        </nav>
    </div>
      </footer>
        </>
    )
}

export default Principal;