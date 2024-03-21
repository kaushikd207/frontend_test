import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState([
    { name: "", email: "", password: "test" },
  ]);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${loginData?.name}`);
  };
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="lgnContainer">
        <div className="loginContainer">
          <h2>Login</h2>
          <h3 className="h3">Welcome back to ECOMMERCE</h3>
          <p className="para">The next gen business marketplace</p>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter"
                value={loginData.email}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter"
                value={loginData.password}
                onChange={(e) => handleInput(e)}
              />
              <p className="eye" onClick={() => setVisible(!visible)}>
                Show
              </p>
            </div>
            <button type="submit">LOGIN</button>
          </form>
          <p>
            Don't Have an Account?
            <span>
              <Link to="/signUp">SIGN UP</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
