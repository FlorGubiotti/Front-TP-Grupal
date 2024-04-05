import axios from 'axios';
import { useState, useEffect } from "react";
import './Home.css';

interface Empresa {
  id: number,
  denominacion: string,
  telefono: number,
  horarioAtencion: string,
  quienesSomos: string,
  latitud: number,
  longitud: number,
  domicilio: string,
  email: string
};

const Home = () => {
  const [empresa, setEmpresa] = useState<Empresa>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/empresas/buscar-by-id/1');
        console.log(response.data)
        setEmpresa(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
  {/*========================================================
                      HEADER
  =========================================================*/}
  <header>
    <div className="container top-sect">
      <div className="navbar-header">
        <h1 className="navbar-brand">
          <a data-type="rd-navbar-brand" href="./">
            <small>
              Denominación <br />
              Empresa
            </small>
          </a>
        </h1>
        <a className="search-form_toggle" href="#" />
      </div>
      <div className="help-box text-right">
        <p>Telefono</p>
        <a href="callto:#">{empresa?.telefono}</a>
        <small>
          <span>Horario:</span> { empresa?.horarioAtencion }
        </small>
      </div>
    </div>
    <div id="stuck_container" className="stuck_container">
      <div className="container">
        <nav className="navbar navbar-default navbar-static-top pull-left">
          <div className="">
            <ul
              className="nav navbar-nav sf-menu sf-js-enabled sf-arrows"
              data-type="navbar"
            >
              <li style={{ listStyle: "none" }} className="active">
                <a href="home.html">INICIO</a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="./">LISTA EMPRESAS</a>
              </li>
            </ul>
          </div>
        </nav>
        <form
          className="search-form"
          action="buscador.html"
          method="GET"
          acceptCharset="utf-8"
        >
          <label className="search-form_label">
            <input
              className="search-form_input"
              type="text"
              name="buscar"
              autoComplete="off"
              placeholder="Ingrese Texto"
            />
            <span className="search-form_liveout" />
          </label>
          <button className="search-form_submit fa-search" type="submit" />
        </form>
      </div>
    </div>
  </header>
  {/*========================================================
                      CONTENT
  =========================================================*/}
  <main>
    <section className="well well1 well1_ins1">
      <div className="camera_container">
        <div id="camera" className="camera_wrap">
          <div data-src="images/page-1_slide1.jpg">
            <div className="camera_caption fadeIn">
              <div className="jumbotron jumbotron1">
                <em>
                  <a href="detalle.html">Titulo Noticia</a>
                </em>
                <div className="wrap">
                  <p>Resumen</p>
                  <a href="detalle.html" className="btn-link fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div data-src="images/page-1_slide2.jpg">
            <div className="camera_caption fadeIn">
              <div className="jumbotron jumbotron2">
                <em>Titulo Noticia</em>
                <div className="wrap">
                  <p>Resumen</p>
                  <a href="#" className="btn-link hov_prime fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div data-src="images/page-1_slide3.jpg">
            <div className="camera_caption fadeIn">
              <div className="jumbotron">
                <em>Titulo Noticia</em>
                <div className="wrap">
                  <p>Resumen</p>
                  <a href="#" className="btn-link fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="well well2 wow fadeIn  bg1" data-wow-duration="3s">
      <div className="container">
        <h2 className="txt-pr">Quienes Somos</h2>
        <div className="row">
          <div className="col">
            <p style={{ textAlign: "justify" }}>
              {empresa?.quienesSomos}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/*========================================================
                      FOOTER
  =========================================================*/}
  <footer className="top-border">
    <section className="well well2 wow fadeIn  bg1" data-wow-duration="3s">
      <div className="container">
        <h2 className="txt-pr">Donde estamos</h2>
      </div>
    </section>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11270.125646913215!2d-68.83492456656404!3d-32.88154997304907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1615335513448!5m2!1ses-419!2sar"
        width={1600}
        height={400}
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
    <section className="well1">
      <div className="container">
        <p className="rights">
          Denominación Empresa © <span id="copyright-year" />
          <a href="index-5.html">Privacy Policy</a>
          {/* {%FOOTER_LINK} */}
        </p>
      </div>
    </section>
  </footer>
</div>

  );
}

export default Home;
