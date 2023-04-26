import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css";
const Register = () => {
  const [inputState, setInputState] = useState({
    userName:"",
    email:'',
    password:"",
    confirmPassword:"",
    image:""
  });
  const [loadImage,setLoadImage] = useState('')

  const inputHandle  = (e)=>{
    setInputState({
      ...inputState,
      [e.target.name] : e.target.value
    })
  }

  const fileHandle = (e)=>{
      if(e.target.files.length !==0){
        setInputState({
          ...inputState,
          [e.target.name]: e.target.files[0]
        })
      }
      const reader = new FileReader();
      reader.onload = ()=>{
        setLoadImage(reader.result);
      }
      reader.readAsDataURL(e.target.files[0]);
  }
  const submitHandler = e =>{
    e.preventDefault()
    
  
  }
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h2>Register</h2>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              id="userName"
              name="userName"
              value={inputState.userName}
              onChange={inputHandle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              name="email"
              value={inputState.email}
              onChange={inputHandle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="password"
              name="password"
              value={inputState.password}
              onChange={inputHandle}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              id="confirmPassword"
              autoComplete="off"
              name="confirmPassword"
              onChange={inputHandle}
              value={inputState.confirmPassword}
            />
          </div>
          <div className="form-group">
          <div className="file-image">
            <div className="image">
              {
                loadImage ? <img src={loadImage} /> : ''
              }
            </div>
          </div>
            <div className="file">
           
              <input type="file" onChange={fileHandle}  className="form-control" name="image" id="image" />
            </div>
          </div>
          <div className="form-group">
            <span>
              <Link to="/messenger/login"> Login Your Account</Link>
            </span>
          </div>
          <button type="Submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
