import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar el estado de autenticación si lo tienes
    navigate('/user/login', { replace: true });
  };

    const toggleOffCanvas = () => {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active')
    }

    const toggleRightSidebar = () => {
        document.querySelector('.right-sidebar').classList.toggle('open')
    }

  return (
    <>
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src="/images/logo-mini.png" alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>          
          <ul className="navbar-nav navbar-nav-right">                    
            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <img className="img-xs rounded-circle" src="/images/faces/face8.jpg" alt="Profile" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline me-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline me-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check me-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2" onClick={evt =>evt.preventDefault()}>
                    Administrar Cuenta
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Cambiar Contraseña
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={handleLogout}
                  >
                    Cerrar Sesion
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffCanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar