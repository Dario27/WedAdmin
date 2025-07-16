import {Dropdown} from 'react-bootstrap'
 
function Navbar() {

    const toggleOffCanvas = () => {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active')
    }

    const toggleRightSidebar = () => {
        document.querySelector('.right-sidebar').classList.toggle('open')
    }

    // const handleToggle = () => {
    //     const body = document.body;
        
    //     if (body.classList.contains('sidebar-icon-only')) {
    //       body.classList.remove('sidebar-icon-only');
    //       body.classList.add('sidebar-fixed');
    //     } else {
    //       body.classList.add('sidebar-icon-only');
    //     }
    // };

  return (
    <>
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src="/images/logo-mini.png" alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav navbar-nav-left header-links align-self-center">
            <li className="nav-item font-weight-semibold d-none  d-md-flex">Help : +050 2992 709</li>
            <li className="nav-item dropdown language-dropdown">
            <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <div className="d-inline-flex me-0 mr-md-3">
                    <div className="flag-icon-holder">
                      <i className="fi fi-us"></i>
                    </div>
                  </div>
                  <span className="profile-text font-weight-medium d-none d-md-block">English</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="fi fi-us"></i>
                    </div>English
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="fi fi-fr"></i>
                    </div>French
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="fi fi-ae"></i>
                    </div>Arabic
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="fi fi-ru"></i>
                    </div>Russian
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <form className="ms-auto search-form d-none d-md-block" action="#">
            <div className="form-group">
              <input type="search" className="form-control mb-0" placeholder="Search Here" />
            </div>
          </form>
          <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item  nav-profile border-0 ps-4">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count bg-success">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item py-3 d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-start">You have 4 new notifications </p>
                    <span className="badge badge-pill bg-primary float-end">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-light mb-1">Application Error</h6>
                      <p className="font-weight-light small-text mb-0"> Just now </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-cog m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-light mb-1">Settings</h6>
                      <p className="font-weight-light small-text mb-0"> Private message </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-light mb-1">New user registration</h6>
                      <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count">7</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-start">You have 7 unread mails </p>
                    <span className="badge badge-pill bg-primary">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src="/images/faces/face10.jpg" alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-light">Marian Garner </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src="/images/faces/face12.jpg" alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-light">David Grey </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled</p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src="/images/faces/face1.jpg" alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-light">Travis Jenkins </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            
            
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
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Sign Out
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