
import { Link } from "react-router-dom"
import './register.css'
const Login = () => {

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h2>Log In</h2>
        </div>
      </div>
      <div className="card-body">
        <form>
        
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="password"
            />
          </div>
          <div className="form-group">
            <span>
              <Link to="/messenger/register"><p>Dont have account?Please Register</p> </Link>
            </span>
          </div>
       
        </form>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Login