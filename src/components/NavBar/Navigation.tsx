
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="page">
      {/* HEADER */}
      <header>
        <div className="container top-sect">
          <div className="navbar-header">
            <h1 className="navbar-brand">
              <a data-type="rd-navbar-brand" href="./">
                <small>
                  Denominación <br /> Empresa
                </small>
              </a>
            </h1>
            <a className="search-form_toggle" href="#"></a>
          </div>

          <div className="help-box text-right">
            <p>Telefono</p>
            <a href="callto:#">800-2345-6789</a>
            <small>
              <span>Horario:</span> 6am-4pm PST M-Th; 6am-3pm PST Fri
            </small>
          </div>
        </div>

        <div id="stuck_container" className="stuck_container">
          <div className="container">
            <nav className="navbar navbar-default navbar-static-top pull-left">
              <div className="">
                <ul className="nav navbar-nav sf-menu sf-js-enabled sf-arrows" data-type="navbar">
                  <li style={{ listStyle: "none" }} className="active">
                    <a href="home.html">INICIO</a>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <a href="./">LISTA EMPRESAS</a>
                  </li>
                </ul>
              </div>
            </nav>
            <form className="search-form text-right" action="buscador.html" method="GET" acceptCharset="utf-8">
              <label className="search-form_label">
                <input className="search-form_input" type="text" name="buscar" autoComplete="off" placeholder="Ingrese Texto" />
                <span className="search-form_liveout"></span>
              </label>
              <button className="search-form_submit fa-search" type="submit"></button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
