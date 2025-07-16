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
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                    <img className="img-xs rounded-circle" src="/images/faces/face8.jpg" alt="profile" />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">Allen Moreno</p>
                      <p className="designation">Premium user</p>
                    </div>
                    
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
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
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
      
          <li className={ isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className={ isPathActive('/rtl') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/rtl" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-translate menu-icon"></i>
              <span className="menu-title">RTL</span>
            </Link>
          </li>
          <li className={ isPathActive('/widgets') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/widgets" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-vector-selection menu-icon"></i>
              <span className="menu-title">Widgets</span>
            </Link>
          </li>
          <li className={ isPathActive('/apps') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.appsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('appsMenuOpen')} data-toggle="collapse"> */}
            <div className={`nav-link ${state.menuExpand === "drop1" ? "menu-expanded" : ""}`} onClick={() => dispatch({ type: "toggle", menu: "drop1" })} aria-expanded={state.drop1}>
              <i className="mdi mdi-cart-arrow-down menu-icon"></i>
              <span className="menu-title">Apps</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop1}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/apps/kanban') ? 'nav-link active' : 'nav-link' } to="/apps/kanban">Kanban Board</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/apps/todo') ? 'nav-link active' : 'nav-link' } to="/apps/todo">Todo List</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/apps/ticket') ? 'nav-link active' : 'nav-link' } to="/apps/ticket">Tickets</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/apps/chat') ? 'nav-link active' : 'nav-link' } to="/apps/chat">Chats</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/apps/email') ? 'nav-link active' : 'nav-link' } to="/apps/email">E-mail</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/apps/calendar') ? 'nav-link active' : 'nav-link' } to="/apps/calendar">Calendar</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/apps/gallery') ? 'nav-link active' : 'nav-link' } to="/apps/gallery">Gallery</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop2" ? "menu-expanded" : ""}`}onClick={() => dispatch({ type: "toggle", menu: "drop2" })} aria-expanded={state.drop2}>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={state.drop2}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/accordions') ? 'nav-link active' : 'nav-link' } to="/basic-ui/accordions">Accordions</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/badges') ? 'nav-link active' : 'nav-link' } to="/basic-ui/badges">Badges</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/breadcrumbs') ? 'nav-link active' : 'nav-link' } to="/basic-ui/breadcrumbs">Breadcrumbs</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns">Dropdowns</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/modal') ? 'nav-link active' : 'nav-link' } to="/basic-ui/modal">Modals</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/progressbar') ? 'nav-link active' : 'nav-link' } to="/basic-ui/progressbar">Progress Bar</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/pagination') ? 'nav-link active' : 'nav-link' } to="/basic-ui/pagination">Pagination</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/tabs') ? 'nav-link active' : 'nav-link' } to="/basic-ui/tabs">Tabs</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/tooltips') ? 'nav-link active' : 'nav-link' } to="/basic-ui/tooltips">Tooltips</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/basic-ui/popups') ? 'nav-link active' : 'nav-link' } to="/basic-ui/popups">Popups</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/advanced-ui') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.advancedUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('advancedUiMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop3" ? "menu-expanded" : "" }`} onClick={() => dispatch({ type: "toggle", menu: "drop3" })} aria-expanded={state.drop3}>
              <i className="mdi mdi-cards-variant menu-icon"></i>
              <span className="menu-title">Advanced UI</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop3 }>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/dragula') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/dragula">Dragula</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/clipboard') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/clipboard">Clipboard</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/context') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/context">Context menu</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/slider') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/slider">Sliders</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/carousel') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/carousel">Carousel</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/loaders') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/loaders">Loaders</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/advanced-ui/treeview') ? 'nav-link active' : 'nav-link' } to="/advanced-ui/treeview">Tree View</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop4" ? "menu-expanded" : "" }`} onClick={() => dispatch({ type: "toggle", menu: "drop4" })} aria-expanded={state.drop4}>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Form Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop4 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements">Basic Elements</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/form-elements/advanced-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/advanced-elements">Advanced Elements</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/form-elements/validation') ? 'nav-link active' : 'nav-link' } to="/form-elements/validation">Validation</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/form-elements/wizard') ? 'nav-link active' : 'nav-link' } to="/form-elements/wizard">Wizard</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop5" ? "menu-expanded" : ""}`} onClick={() => dispatch({ type: "toggle", menu: "drop5" })} aria-expanded={state.drop5}>
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop5 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table">Basic Table</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/tables/data-table') ? 'nav-link active' : 'nav-link' } to="/tables/data-table">Data Table</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/tables/react-table') ? 'nav-link active' : 'nav-link' } to="/tables/react-table">React Table</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/tables/ag-grid') ? 'nav-link active' : 'nav-link' } to="/tables/ag-grid">AG Grid</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/maps') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.mapsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('mapsMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop6" ? "menu-expanded" : ""}`} onClick={() => dispatch({ type: "toggle", menu: "drop6" })} aria-expanded={state.drop6}>
            <i className="mdi mdi-map-marker-outline menu-icon"></i>
            <span className="menu-title">Maps</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop6 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/maps/pigeon-map') ? 'nav-link active' : 'nav-link' } to="/maps/pigeon-map">Pigeon Maps</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/maps/simple-map') ? 'nav-link active' : 'nav-link' } to="/maps/simple-map">Simple Maps</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/notification') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/notification" onClick={() => dispatch({ type: "toggle", menu: "common" })}>
              <i className="mdi mdi-bell-outline menu-icon"></i> 
              <span className="menu-title">Notifications</span>
            </Link>
          </li>
          <li className={ isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop7" ? "menu-expanded" : "" }`} onClick={() => dispatch({ type: "toggle", menu: "drop7" })} aria-expanded={state.drop7}>
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">Icons</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop7 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/icons/flag-icon') ? 'nav-link active' : 'nav-link' } to="/icons/flag-icon">Flag icons</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/icons/font-awesome') ? 'nav-link active' : 'nav-link' } to="/icons/font-awesome">Font Awesome</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/icons/simple-line') ? 'nav-link active' : 'nav-link' } to="/icons/simple-line">Simple Line Icons</Link></li>
                <li className="nav-item"> <Link className={isPathActive("/icons/feather")? "nav-link active" : "nav-link"}  to="/icons/feather">  React Feather </Link> </li>
                <li className="nav-item"> <Link className={ isPathActive('/icons/typicons') ? 'nav-link active' : 'nav-link' } to="/icons/typicons">Typicons</Link></li>
              </ul>
            </Collapse>
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
          <li className={ isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop8" ? "menu-expanded" : ""}`} onClick={() => dispatch({ type: "toggle", menu: "drop8" })} aria-expanded={state.drop8}>
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">Charts</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop8 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js">Chart Js</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/charts/nivo') ? 'nav-link active' : 'nav-link' } to="/charts/nivo">Nivo</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/charts/recharts') ? 'nav-link active' : 'nav-link' } to="/charts/recharts">Recharts</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/charts/antv') ? 'nav-link active' : 'nav-link' } to="/charts/antv">AntV Charts</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/charts/gauge') ? 'nav-link active' : 'nav-link' } to="/charts/gauge">Gauge Chart</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${ state.menuExpand === "drop11" ? "menu-expanded" : ""}`} onClick={() => dispatch({ type: "toggle", menu: "drop11" })} aria-expanded={state.drop11}>
              <i className="mdi mdi-bookmark-outline menu-icon"></i>
              <span className="menu-title">General Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop11 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/landing') ? 'nav-link active' : 'nav-link' } to="/general-pages/landing">Landing Page</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/profile') ? 'nav-link active' : 'nav-link' } to="/general-pages/profile">Profile</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/faq') ? 'nav-link active' : 'nav-link' } to="/general-pages/faq">FAQ</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/2faq') ? 'nav-link active' : 'nav-link' } to="/general-pages/2faq">FAQ 2</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/news-grid') ? 'nav-link active' : 'nav-link' } to="/general-pages/news-grid">News Grid</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/timeline') ? 'nav-link active' : 'nav-link' } to="/general-pages/timeline">Timeline</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/search-results') ? 'nav-link active' : 'nav-link' } to="/general-pages/search-results">Search Results</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/portfolio') ? 'nav-link active' : 'nav-link' } to="/general-pages/portfolio">Portfolio</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/general-pages/user-listing') ? 'nav-link active' : 'nav-link' } to="/general-pages/user-listing">User Listing</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse"> */}
            <div  className={`nav-link  ${  state.menuExpand === "drop9" ? "menu-expanded" : ""  }`}  onClick={() => dispatch({ type: "toggle", menu: "drop9" })}  aria-expanded={state.drop9}>
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop9 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/user-pages/login') ? 'nav-link active' : 'nav-link' } to="/user-pages/login">Login</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/user-pages/login-2') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-2">Login 2</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/user-pages/register') ? 'nav-link active' : 'nav-link' } to="/user-pages/register">Register</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/user-pages/register-2') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-2">Register 2</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/user-pages/lock-screen') ? 'nav-link active' : 'nav-link' } to="/user-pages/lock-screen">Lockscreen</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse"> */}
            <div  className={`nav-link  ${  state.menuExpand === "drop10" ? "menu-expanded" : ""  }`} onClick={() => dispatch({ type: "toggle", menu: "drop10" })} aria-expanded={state.drop10}>
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title">Error Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop10 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/error-pages/404') ? 'nav-link active' : 'nav-link' } to="/error-pages/404">404</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/error-pages/500') ? 'nav-link active' : 'nav-link' } to="/error-pages/500">500</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ isPathActive('/ecommerce') ? 'nav-item active' : 'nav-item' }>
            {/* <div className={ this.state.ecommercePagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ecommercePagesMenuOpen') } data-toggle="collapse"> */}
            <div className={`nav-link  ${  state.menuExpand === "drop12" ? "menu-expanded" : ""  }`}  onClick={() => dispatch({ type: "toggle", menu: "drop12" })}  aria-expanded={state.drop12}>
              <i className="mdi mdi-cart-outline menu-icon"></i>
              <span className="menu-title">E-commerce</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ state.drop12 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ isPathActive('/ecommerce/invoice') ? 'nav-link active' : 'nav-link' } to="/ecommerce/invoice">Invoice</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/ecommerce/pricing') ? 'nav-link active' : 'nav-link' } to="/ecommerce/pricing">Pricing</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/ecommerce/catalogue') ? 'nav-link active' : 'nav-link' } to="/ecommerce/catalogue">Product Catalogue</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/ecommerce/project') ? 'nav-link active' : 'nav-link' } to="/ecommerce/project">Project List</Link></li>
                <li className="nav-item"> <Link className={ isPathActive('/ecommerce/orders') ? 'nav-link active' : 'nav-link' } to="/ecommerce/orders">Orders</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://demo.bootstrapdash.com/react-doc/" rel="noopener noreferrer" target="_blank">
              <i className="mdi mdi-file-document-outline menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
