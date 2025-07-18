import { Link } from "react-router-dom"

function Register() {
  return (
    <>
      <div className="d-flex align-items-stretch auth auth-img-bg h-100">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-start p-3">              
              <h4>New here?</h4>
              <h6 className="fw-light">Join us today! It takes only few steps</h6>
              <form className="pt-3">
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-start-0" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-end-1">
                        <i className="mdi mdi-email-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control form-control-lg border-start-0" placeholder="Email" />
                  </div>
                </div>                
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-start-0" id="exampleInputPassword" placeholder="Password" />                        
                  </div>
                </div>
                {/* Combo de selección de rol */}
                <div className="form-group">
                  <label>Rol</label>
                  <select className="form-control form-control-lg">
                    <option value="">Seleccione un rol</option>
                    <option value="auditor">Rol auditor (SNAI)</option>
                    <option value="administrador">Rol administrador (RIASEM)</option>
                    <option value="familiar">Rol familiar</option>
                  </select>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3 d-grid gap-2">
                  <Link className="btn btn-primary btn-lg fw-medium auth-form-btn" to="/dashboard">SIGN UP</Link>
                </div>
                <div className="text-center mt-4 fw-light">
                  Already have an account? <Link to="/user/login" reloadDocument className="text-primary">Login</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 register-half-bg d-flex flex-row">
          </div>
        </div>
      </div>
    </>
  )
}

export default Register