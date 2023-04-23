import { Link } from "react-router-dom";
import './register.css'
const Register = () => {
 
    return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h2>Register</h2>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              id="username"
            />
          </div>
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              id="confirmPassword"
            />
          </div>
          <div className="form-group">
           
            <div className="file">
              <label>Select Image</label>
              <input type="file" className="form-control" id="image" />
            </div>
          </div>
          <div className="form-group">
            <span><Link to="/messenger/login"> Login Your Account</Link></span>
          </div>
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Register;
