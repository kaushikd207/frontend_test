import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Login.css";
const SignUp = () => {
  // onRegisterSubmit(){
  //   const user = {
  //       a: this.a,
  //       b: this.b,
  //       c: this.c,
  //     id: Date.now()
  //   }

  //  var abc = [];
  //  var get =  JSON.parse(localStorage.getItem('user'));
  //  abc = [get];
  //  abc.push(user);

  //  localStorage.setItem('user', JSON.stringify(abc));

  //  console.log(JSON.stringify(abc));
  //  console.log(get);
  // }

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);

  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    var abc = [];

    event.preventDefault();
    if (
      loginData?.name !== "" &&
      loginData?.email !== "" &&
      loginData?.password !== ""
    ) {
      let get = JSON.parse(localStorage.getItem("users") || "[]");
      abc = [...get, loginData];
      localStorage.setItem("users", JSON.stringify(abc));
      navigate("/Otp");
    } else {
      setWrongInput(true);
      navigate("/signUp");
    }
  };

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
