import { Collapse, Dropdown } from "react-bootstrap";
import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

const initialState = {
  drop1: false,
  drop2: false,
  drop3: false,
  drop4: false,
  drop5: false,
  drop6: false,
  drop7: false,
  drop8: false,
  drop9: false,
  drop10: false,
  drop11: false,
  drop12: false,
  common: false,
};

function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case "toggle":
      for (const key in newState) {
        if (key === action.menu) {
          newState[key] = !newState[key];
          newState.menuExpand = newState[key] ? action.menu : null;
        } else if (key !== "menuExpand") {
          newState[key] = false;
        }
      }
      return newState;
    default:
      return state;
  }
}

function Sidebar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to check if the path is active
  const isPathActive = (path) => location.pathname.startsWith(path);



  useEffect(() => {
    const body = document.querySelector('body');
    const navItems = document.querySelectorAll('.sidebar .nav-item');
    // const contentWrapper = document.querySelector('.content-wrapper');

    // if (shouldApplyCustomPadding()) {
    //   contentWrapper.style.paddingBottom = '640px'; // Adjust this value as needed
    // } else {
    //   contentWrapper.style.paddingBottom = ''; // Reset to default
    // }


    const handleMouseOver = (el) => {
      if (body.classList.contains('sidebar-icon-only')) {
        el.classList.add('hover-open');
      }
    };

    const handleMouseOut = (el) => {
      if (body.classList.contains('sidebar-icon-only')) {
        el.classList.remove('hover-open');
      }
    };

    navItems.forEach((el) => {
      el.addEventListener('mouseover', () => handleMouseOver(el));
      el.addEventListener('mouseout', () => handleMouseOut(el));
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      navItems.forEach((el) => {
        el.removeEventListener('mouseover', () => handleMouseOver(el));
        el.removeEventListener('mouseout', () => handleMouseOut(el));
      });
    };
  }, [location.pathname]); 

  return (
    <>
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src="/images/logo.svg" alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src="/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <ul className="nav">          
      
          <li className={ isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>           
         
          <li className={ isPathActive('/notification') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/notification" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-bell-outline menu-icon"></i> 
              <span className="menu-title">Notifications</span>
            </Link>
          </li>   

          <li className={ isPathActive('/text-editor') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/text-editor" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-comment-text-outline menu-icon"></i>
              <span className="menu-title">Text Editor</span>
            </Link>
          </li>

          <li className={ isPathActive('/code-editor') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/code-editor" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-code-tags menu-icon"></i>
              <span className="menu-title">Code Editor</span>
            </Link>
          </li>          
          
          <li className={ isPathActive('/user') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse"> */}
            <div  className={`nav-link  ${  state.menuExpand === "drop9" ? "menu-expanded" : ""  }`}  onClick={() => dispatch({ type: "toggle", menu: "drop9" })}  aria-expanded={state.drop9}>
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop9 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/user/login') ? 'nav-link active' : 'nav-link' } to="/user/login">Login</Link></li>                
                <li className="nav-item"> <Link className={ isPathActive('/user/register') ? 'nav-link active' : 'nav-link' } to="/user/register">Register</Link></li>                
                <li className="nav-item"> <Link className={ isPathActive('/user/lock-screen') ? 'nav-link active' : 'nav-link' } to="/user/lock-screen">Lockscreen</Link></li>
              </ul>
            </Collapse>
          </li> 
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
