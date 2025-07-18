import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// Puedes usar SweetAlert2 si ya está instalado en el proyecto
import Swal from 'sweetalert2'

function Login() {
  const [username, setUsername] = useState('jmartillo');
  const [password, setPassword] = useState('Abc_123');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'jmartillo' && password === 'Abc_123') {
      // Aquí iría la lógica para consultar el endpoint en el futuro
      navigate('/dashboard');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'El usuario o la contraseña no son válidos.',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <>
      <div className="d-flex align-items-stretch auth auth-img-bg h-100">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-start p-3">              
              <h4>Welcome back!</h4>
              <form className="pt-3" onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg border-left-0"
                      id="exampleInputEmail"
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
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
                    <input
                      type="password"
                      className="form-control form-control-lg border-left-0"
                      id="exampleInputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-light">Forgot password?</a>
                </div>
                <div className="my-3 d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg fw-medium auth-form-btn">LOGIN</button>
                </div>                
                <div className="text-center mt-4 fw-light">
                  Don't have an account? <Link to="/user/register" reloadDocument className="text-primary">Create</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 login-half-bg d-flex flex-row">
          </div>
        </div>
      </div>
    </>
  )
}

export default Login