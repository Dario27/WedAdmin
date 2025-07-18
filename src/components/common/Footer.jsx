
function Footer() {
  return (
    <>
        <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {new Date().getFullYear()} <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer"></a>All rights reserved.</span>            
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer