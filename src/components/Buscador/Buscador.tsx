import React from 'react';

interface Props {}

const PrivacyPage: React.FC<Props> = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <title>PRIVACY</title>
        {/* Bootstrap */}
        <link href="css/bootstrap.css" rel="stylesheet" />
        {/* Links */}
        <link rel="stylesheet" href="css/search.css" />
      </head>
      <body>
        <div className="page">
          {/* HEADER */}
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
                <a className="search-form_toggle" href="#"></a>
              </div>
              <div className="help-box text-right">
                <p>Telefono</p>
                <a href="callto:#">800-2345-6789</a>
                <small>
                  <span>Horario:</span> 6am-4pm PST M-Th; &nbsp;6am-3pm PST Fri
                </small>
              </div>
            </div>
            <div id="stuck_container" className="stuck_container">
              <div className="container">
                <nav className="navbar navbar-default navbar-static-top pull-left">
                  <div className="">
                    <ul className="nav navbar-nav sf-menu sf-js-enabled sf-arrows" data-type="navbar">
                      <li style={{ listStyle: 'none' }} className="active">
                        <a href="home.html">INICIO</a>
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <a href="./">LISTA EMPRESAS</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <form className="search-form" action="buscador.html" method="GET" acceptCharset="utf-8">
                  <label className="search-form_label">
                    <input className="search-form_input" type="text" name="buscar" autoComplete="off" placeholder="Ingrese Texto" />
                    <span className="search-form_liveout"></span>
                  </label>
                  <button className="search-form_submit fa-search" type="submit"></button>
                </form>
              </div>
            </div>
          </header>
          {/* CONTENT */}
          <main>
            <section className="well well4">
              <div className="container">
                <h2>Texto Buscado</h2>
                <div className="row offs2">
                  {/* Table Content Goes Here */}
                </div>
              </div>
            </section>
          </main>
          {/* FOOTER */}
          <footer>
            <section className="well">
              <div className="container">
                <p className="rights">
                  Denominación Empresa © <span id="copyright-year"></span>
                  <a href="index-5.html">Privacy Policy</a>
                  {/* {%FOOTER_LINK} */}
                </p>
              </div>
            </section>
          </footer>
        </div>
        {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
        {/* Include all compiled plugins (below), or include individual files as needed */}
        <script src="js/bootstrap.min.js"></script>
        <script src="js/tm-scripts.js"></script>
        {/* </script> */}
        {/* coded by vitlex */}
      </body>
    </html>
  );
};

export default PrivacyPage;
