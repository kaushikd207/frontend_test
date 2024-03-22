import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = ({ loginInfo }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState([{ email: "", password: "" }]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("user") || "[]");
    storedData.map((d) => {
      d?.email === loginData?.email && d?.password === loginData?.password
        ? navigate("/Cart")
        : navigate("/signUp");
    });
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
                name="email"
                type="email"
                placeholder="Enter"
                value={loginData?.email}
                onInput={(e) =>
                  setLoginData({ ...loginData, ["email"]: e.target.value })
                }
              />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input
                name="password"
                type={visible ? "text" : "password"}
                placeholder="Enter"
                value={loginData?.password}
                onInput={(e) =>
                  setLoginData({ ...loginData, ["password"]: e.target.value })
                }
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
