import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      loginData?.name !== "" ||
      loginData?.email !== "" ||
      loginData?.password !== ""
    ) {
      const data = [{ ...loginData, loginData }];
      console.log("Login data", data);
      localStorage.setItem("signUpData", JSON.stringify(data));
      setLoginData({ name: "", email: "", password: "" });
      navigate("/login");
    } else setWrongInput(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="lgnContainer">
        <div className="loginContainer">
          <h2>Create your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <label>Name</label>
              <input
                className={wrongInput ? "wrongInput" : null}
                type="text"
                placeholder="Enter"
                value={loginData?.name}
                onInput={(e) =>
                  setLoginData({ ...loginData, ["name"]: e?.target?.value })
                }
              />
            </div>
            <div className="inputBox">
              <label>Email</label>
              <input
                className={wrongInput ? "wrongInput" : null}
                type="email"
                placeholder="Enter"
                onInput={(e) =>
                  setLoginData({ ...loginData, ["email"]: e?.target?.value })
                }
                value={loginData?.email}
              />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input
                className={wrongInput ? "wrongInput" : null}
                type={visible ? "text" : "password"}
                placeholder="Enter"
                onInput={(e) =>
                  setLoginData({ ...loginData, ["password"]: e?.target?.value })
                }
                value={loginData?.password}
              />
            </div>
            <p className="eyeR" onClick={() => setVisible(!visible)}>
              Show
            </p>
            <button type="submit">CREATE ACCOUNT</button>
          </form>
          <p>
            Have an Account?
            <span>
              <Link to="/login">LOGIN</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default SignUp;
